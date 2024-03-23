import React from "react";
import "./Program4.css";
import { useState, useEffect } from "react";

function Program3() {
  const [showDetails, setShowDetails] = useState(false);
  const auth = localStorage.getItem("user");
  const user = auth ? JSON.parse(auth) : null;
  const isAdmin = user && user.email === "alaknanda@gmail.com";
  const [newProgramTitle, setNewProgramTitle] = useState("");
  const [newProgramDescription, setNewProgramDescription] = useState("");
  const [programs, setPrograms] = useState([]);
  const [error, setError] = useState(false);

  // const navigate=useNavigate();

  useEffect(() => {
    getPrograms();
  }, []);

  const getPrograms = async () => {
    try {
      let result = await fetch("http://localhost:3000/programs", {
        method: "get",
        headers: {
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
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
    setShowForm(false);
  };

  const addProgram = async () => {
    if (!newProgramTitle || !newProgramDescription) {
      setError(true);
      return false;
    } else {
      const id = 4; // Generate a unique ID
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
        headers: {
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
          "Content-Type": "application/json",
        },
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
      <img src="/i6.jpg" alt="program4" className="image" />
      <h2>Multilingual Education </h2>
      <p>
        Children’s languages empower them to communicate with others, but also
        provide them an anchor to their culture and identity. At IMLi, we
        believe in the power of multilingual education in the classroom and
        beyond.
      </p>

      <div>
        <p>
          Students who are taught in their mother tongue or home language
          perform better academically. Access to the curriculum becomes easier,
          leading to confident learners who can transfer their skills and
          knowledge to other languages. We believe that multilingual education
          implies ensuring equal opportunities for learning, regardless of a
          student's linguistic background. It fosters a sense of belonging,
          identity, and reduces discrimination. Our approach caters to the
          linguistic realities and needs of learners while respecting
          constitutional provisions and the National Education Policy.
        </p>
        <p>
          At the Institute for Multilingual education, we provide support
          strategies for schools and teachers to help scaffold children in their
          early language journeys and when needed, to help children bridge the
          gap between home and school language. Multilingual approaches benefit
          all children to learn and benefit, even if they are from the majority
          language. Our pedagogy focuses on learner-centered and interactive
          approaches to develop language proficiency and awareness. We promote
          cross-linguistic transfer and multiliteracy skills, using culturally
          relevant materials that reflect language and cultural diversity.
        </p>
        <p style={{ fontWeight: 600 }}>
          We partner with like-minded NGOs and schools, and offer programs that
          complement and build on the existing teaching of the school and NGOs.
          IMLI EDUCATION, has provided technical support to schools and NGOs
          through trainings and courses to help improve children’s reading
          skills in English.
        </p>
      </div>

      <button onClick={toggleDetails}>
        {" "}
        {showDetails ? "Show Less" : "Read More"}
      </button>
      {showDetails && (
        <>
          {isAdmin && (
            <div className="program-form">
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
            </div>
          )}
          {programs
            .filter((program) => program.id === 4)
            .map((program) => (
              <div key={program.id} className="program">
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                {isAdmin && (
                  <button
                    className="delete"
                    onClick={() => deleteProgram(program.title)}
                  >
                    Delete
                  </button>
                )}
              </div>
            ))}
        </>
      )}
    </div>
  );
}

export default Program3;
