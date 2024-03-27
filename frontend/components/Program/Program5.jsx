import React from "react";
import "./Program4.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Program5() {
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
      <img src="/3D Learning.jpeg" alt="program4" className="image" />
      <h2>3D Learning Program </h2>
      <p style={{ fontWeight: 600 }}>
        Empowering Children and Educators for a Compassionate and Mindful Future
      </p>
      <p>
        In a rapidly changing global landscape, the traditional focus on
        academic achievements is no longer sufficient. The need for empathy and
        compassion is paramount in fostering harmonious societies. Mindfulness
        contributes to mental well-being and enhances the learning process. SEL
        improves student's attitudes toward learning and their self-awareness
        and self-efficacy. Critical inquiry equips children with the ability to
        think deeply, solve problems, and navigate the complex information
        ecosystem.
      </p>

      <div>
        <p>
          At IMLi Education, we recognize the evolving demands of the 21st
          century and the vital role of education in meeting these challenges.
          Our 3D Learning Program is designed to integrate Socio-Emotional
          Learning (SEL) and essential 21st-century skills, focusing on Empathy,
          Mindfulness, Compassion, and Critical Inquiry (EMCC). These core
          competencies are not just educational skills but fundamental tools in
          shaping responsible, thoughtful, and creative individuals. Nurturing
          Social-Emotional Learning involves creating opportunities to learn and
          practice the related knowledge, skills, and attitudes and creating
          compassionate and inclusive environments for everyone.
        </p>
        <h3>IMLi’s Approach </h3>
        <p>
          At IMLi, we believe in a well-rounded, holistic education - one that
          transcends conventional boundaries. Our 3D Learning Program
          encompasses:
        </p>
        <ol style={{ listStyleType: "decimal" }}>
          <li>
            <span style={{ fontWeight: "bold" }}>Empathy Training:</span>{" "}
            Activities and courses designed to enhance understanding and
            sensitivity towards others, promoting a culture of respect and
            inclusivity.
          </li>
          <li>
            <span style={{ fontWeight: "bold" }}> Mindfulness Practices:</span>{" "}
            Incorporating mindfulness exercises to help students and educators
            develop a focused and calm approach to both personal and academic
            challenges.
          </li>
          <li>
            <span style={{ fontWeight: "bold" }}>Cultivating Compassion:</span>{" "}
            Through interactive sessions and storytelling, we encourage the
            growth of compassion, nurturing kind and caring individuals who
            contribute positively to society.
          </li>
          <li>
            <span style={{ fontWeight: "bold" }}>
              Developing Critical Inquiry:
            </span>{" "}
            We offer courses and learning material equipping learners with
            critical thinking skills, fostering curiosity, navigating the
            digital world and social media, ultimately encouraging analytical
            reasoning in day-to-day life.
          </li>
        </ol>
        {showDetails && (
        <div><h3>Programs and Resources </h3>
        <ol style={{ listStyleType: "decimal" }}>
          <li>
            Interactive workshops for students, focusing on the practical
            application of EMCC skills.
          </li>
          <li>
            Professional development courses for educators, emphasizing
            integration of mindfulness and critical inquiry in pedagogy.
          </li>
          <li>
            Materials and resources on these aspects that are accessible to both
            educators and students for self-paced learning
          </li>
        </ol>
        <h3>Join Us in Shaping the Future </h3>
        <p>
          The 3D Learning Program at IMLi Education is more than just an
          academic initiative; it's a commitment to nurturing well-rounded,
          empathetic, and critically aware citizens of tomorrow. We invite you
          to explore our courses and resources, and join us in this
          transformative journey.
        </p>
        <p>
          For more information, course enrolments, and access to our materials,
          please <Link to="/contact">contact us</Link> or visit our online
          repository.
        </p>
        </div>)}
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

export default Program5;
