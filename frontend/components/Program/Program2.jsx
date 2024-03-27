import React from "react";
import "./Program4.css";
import { useState, useEffect } from "react";

function Program2() {
  const [showDetails, setShowDetails] = useState(false);
  const [newProgramTitle, setNewProgramTitle] = useState("");
  const [newProgramDescription, setNewProgramDescription] = useState("");
  const [programs, setPrograms] = useState([]);
  const [error, setError] = useState(false);
  const auth = localStorage.getItem("user");
  const user = auth ? JSON.parse(auth) : null;
  const isAdmin = user && user.email === "alaknanda@gmail.com";

  // const navigate=useNavigate();

  useEffect(() => {
    getPrograms();
  }, []);

  const getPrograms = async () => {
    try {
      let result = await fetch("http://localhost:3000/programs", {
        method: "get",
        // headers: {
        //   authorization: bearer ${JSON.parse(localStorage.getItem("token"))},
        // },
      });

      result = await result.json();
      console.log(result);

      setPrograms(result); // Set the new list of programs
    } catch (error) {
      console.error("Error fetching programs:", error);
    }
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
    //setShowForm(false);
  };

  const addProgram = async () => {
    if (!newProgramTitle || !newProgramDescription) {
      setError(true);
      return false;
    } else {
      const id = 2; // Generate a unique ID
      let result = await fetch("http://localhost:3000/programs", {
        method: "post",
        body: JSON.stringify({
          id: id,
          title: newProgramTitle,
          description: newProgramDescription,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert("product added Succesfully...");
      result = await result.json();
      console.warn(result);

      getPrograms();
      // setShowForm(false); // Hide the form after adding the program
      setNewProgramTitle(""); // Reset the input fields
      setNewProgramDescription("");
    }
  };

  const deleteProgram = async (title) => {
    try {
      let result = await fetch("http://localhost:3000/programs", {
        method: "DELETE",
        // headers: {
        //   authorization: bearer ${JSON.parse(localStorage.getItem("token"))},
        //   "Content-Type": "application/json",
        // },
        body: JSON.stringify({ title: title }),
      });

      // Check if the response status indicates success
      if (result.ok) {
        console.log("Program deleted successfully");
        // Assuming the delete operation was successful, fetch programs again to update the list
        getPrograms();
      } else {
        console.error("Error deleting program:", result.statusText);
      }
    } catch (error) {
      console.error("Error deleting program:", error);
    }
  };

  return (
    <div className="ece-container">
      <img src="/i2.jpg" alt="program2" className="image" />
      <h2>English Language Reading and Writing</h2>
      <p>
        English literacy presents a significant challenge in Indian classrooms,
        where students consistently struggle in reading and writing assessments.
        Existing FLN programs fall short of what current research and evidence
        have shown to work in early literacy, which is systematic and explicit
        phonics instruction, accompanied by authentic reading and writing tasks.
      </p>

      <div>
        <p>
          English language teaching in schools often focuses on one strand, with
          mainstream schools using NCERT textbooks without teaching systematic
          decoding. This leads to a disconnect between textbook expectations and
          early readers' capabilities. Pre-primary schools often emphasize rote
          learning of alphabet names and writing, sprinkled with some phonics
          activities and decodables. These programs often avoid exposure to
          other texts and stories, making children less likely to retain the
          code. While some non-profit organizations and innovative schools adopt
          a whole language-based approach, incorporating lived experiences and
          writing work but failing to include systematic decoding. This can lead
          to children developing sight reading and oral language skills but
          falling behind as the cognitive burden increases with grades.
        </p>
        <p>
          IMLi Education believes in a balanced approach to language learning,
          where context and comprehension in reading are as important as
          decoding. A comprehensive literacy program should ideally ensure the
          development of the child’s oral language, while building orthographic
          expertise, and providing adequate exposure to real texts, all three
          serving as parallel strands of a wholesome language curriculum that
          incorporates the realities and challenges of resources and time.
        </p>
        <p style={{ fontWeight: 600 }}>
          We partner with like-minded NGOs and schools, and offer programs that
          complement and build on the existing teaching of the school and NGOs.
          IMLI EDUCATION, has provided technical support to schools and NGOs
          through trainings and courses to help improve children’s reading
          skills in English.
        </p>
        <h3>IMLI Reading Improvement Programs </h3>
        <p>
          Our programs in Reading have been always complementing an existing
          program to cement gaps and build from strengths.
        </p>
        <ul>
          <li>
            We build capacity of teachers, supporting them through a deeper
            understanding of pedagogy and English language instruction.
          </li>
          <li>
            We offer student reading programs that supplement their school
            learning through an exposure to amazing children’s stories and
            characters.
          </li>
          <li>
            We offer Phonics programs for students that help support their
            English learning with a systematic teaching of the code, and learn
            to read better.
          </li>
          <li>
            We offer student writing programs that will strengthen children’s
            reading comprehension and creative writing abilities to express
            themselves better
          </li>
        </ul>
      </div>
      <button onClick={toggleDetails}>
        {showDetails ? "Show Less" : "Read More"}
      </button>
       {showDetails && (
        <>
          {isAdmin &&<div className="program-form">
            <input
              type="text"
              placeholder="Enter program title"
              value={newProgramTitle}
              onChange={(e) => setNewProgramTitle(e.target.value)}
              required
            />
            {error && !newProgramTitle && (
              <span className="invalid">Enter valid title </span>
            )}
            <input
              type="text"
              placeholder="Enter program description"
              value={newProgramDescription}
              onChange={(e) => setNewProgramDescription(e.target.value)}
              required
            />
            {error && !newProgramDescription && (
              <span className="invalid">Enter valid description</span>
            )}
            <button onClick={addProgram}>Add</button>
          </div>}
          {programs
            .filter((program) => program.id === 2)
            .map((program) => (
              <div key={program.id} className="program">
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                {isAdmin && <button
                  className="delete"
                  onClick={() => deleteProgram(program.title)}
                >
                  Delete
                </button>}
              </div>
            ))}
        </>
      )}
    </div>
  );
}


export default Program2;