import React, { useState, useEffect } from "react";
import "./Program1.css";
// import { useNavigate } from "react-router-dom";
function Program1() {
  const [showDetails, setShowDetails] = useState(false);
  const [newProgramTitle, setNewProgramTitle] = useState("");
  const [newProgramDescription, setNewProgramDescription] = useState("");
  const [programs, setPrograms] = useState([]);
  const auth = localStorage.getItem("user");
  const user = auth ? JSON.parse(auth) : null;
  const isAdmin = user && user.email === "alaknanda@gmail.com";
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

 

  const addProgram = async() => {
    if (!newProgramTitle || !newProgramDescription ) {
      setError(true);
      return false;
    }else{
       const id = 1; // Generate a unique ID
       let result = await fetch("http://localhost:3000/programs", {
       method: "post",
       body: JSON.stringify({ id:id, title:newProgramTitle, description:newProgramDescription}),
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
      setNewProgramDescription("");}
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
      <img src="/Early Childhood Education..jpg" alt="program1" className="image" />
      <h2>Early Childhood Education</h2>
      <p> 
        Parents and policy makers all agree - early childhood is a pivotal phase
        in human development as the child learns and develops the most in this
        period. In India, this is seen through the widespread presence of
        government anganwadis and balwadis, and the large number of private
        preschools that are opening to cater to parental demand.
      </p>

      <div>
        <p>
          And yet, many children face a severe lack of quality education in
          government centers, and low fee pre-primary schools. The India Early
          Childhood Education Impact (IECEI) longitudinal study showed that
          participation in good quality preschools leads to higher school
          readiness levels, which in turn lead to better early grade outcomes.
          The National Education Policy (NEP) 2020 and its Action Guidelines
          have also highlighted the importance of ECCE within the newly
          formulated Foundational Stage of learning.
        </p>
        <p style={{ fontWeight: 600 }}>
          We partner with state and district-level government agencies,
          like-minded NGOs and institutions, to provide technical support for
          interventions within ICDS and other pre-primary programmes of NGOs and
          schools. IMLI EDUCATION, has provided technical support to private as
          well as government preschools.
        </p>
        <h3>IMLI Early Childhood Education Programs</h3>
        <p>
          Our program support in ECCE has been a comprehensive handholding that
          included:
        </p>
        <ul>
          <li>
            Capacity building of teachers, ensuring the application of child
            development principles into daily ECE practices, we have trained
            anganwadi workers and pre-primary teachers.
          </li>
          <li>
            Supporting creation and tweaking of ECE curriculum, to make it more
            developmentally appropriate, incorporating local contexts,
            activity-based pedagogy, with specific inputs on English Language
            Learning.
          </li>
          <li>
            Provision of low-cost ECCE kit of playful, teaching-learning
            materials, for anganwadi workers and teachers.
          </li>
          <li>
            Scaffolding internal assessments of student learning processes and
            outcomes
          </li>
          <li>
            Recommending Strategies for involvement of parents and local
            communities, including local panchayats, NGOs, CBOs, SHGs
          </li>
        </ul>
      </div>
      <button onClick={toggleDetails}>
        {showDetails ? "Show Less" : "Read More"}
      </button>
      {showDetails && (
        <>
          {isAdmin && (<div className="program-form">
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
          </div>)}
          {programs
            .filter((program) => program.id === 1)
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

export default Program1;
