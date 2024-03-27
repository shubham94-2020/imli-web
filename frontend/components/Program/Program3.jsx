import React from "react";
import "./Program3.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PdfComp from "../PDF/PdfComp";


function Program3() {
  const [showDetails, setShowDetails] = useState(false);
  const auth = localStorage.getItem("user");
  const user = auth ? JSON.parse(auth) : null;
  const isAdmin = user && user.email === "alaknanda@gmail.com";
  const [newProgramTitle, setNewProgramTitle] = useState("");
  const [newProgramDescription, setNewProgramDescription] = useState("");
  const [programs, setPrograms] = useState([]);
  const [selectedPdf, setSelectedPdf] = useState(null);
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
  const images = [
    {
      name: "आंब्याचं झाड ",
      name2: "मामडी माकं",
      url: "pdf1.jpg",
      file: "./105764-ambyache-zaad-mamadi-makam.pdf",
    },
    
    {
      name: "मला खूप गोष्टी बनवता येतात!",
      name2: "आनुङ कुबी गोटकुल बेनाप वाव!",
      url: "pdf2.jpg",
      file: "./105888-mala-khoop-goshti-banavta-yetat-aanun-kubee-goteekul-benaap-vaav.pdf",
    },
    {
      name: "कल्पनाची सायकल ",
      name2: "कल्पनाकनेत सायकल",
      url: "pdf3.jpg",
      file: "./106243-kalpanachi-cycle-kalpanakaneth-cycle.pdf",
    },
    // Add more images here if needed
  ];

  const openPdf = (file) => {
    setSelectedPdf(file); // Set the selected PDF path
  };
  const handleReadMore = () => {
    window.location.href =
      "https://storyweaver.org.in/en/stories?language=Marathi-Kolami&language=Kolami&language=Gondi&language=Pawari&level=1&query=&sort=Ratings";
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

      {showDetails && (
        <div>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <span style={{ fontWeight: "bold" }}> Stories and Poems</span>–
              Dive into our Translation of storybooks, children's literature
              stories, poems etc
            </li>
            <div className="image-grid">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="image-with-name-container"
                  onClick={() => openPdf(image.file)}
            >
                  <img src={image.url} alt={image.name} className="image" />
                  <pre className="image-name">{image.name}</pre>
                  <pre className="image-name">{image.name2}</pre>
                </div>
              ))}
              <button className="read-more" onClick={handleReadMore}>
                Read More Stories
              </button>
            </div>
            {selectedPdf && <PdfComp src={selectedPdf} />}
            <li>
              <span style={{ fontWeight: "bold" }}> IMLi Language Hub</span>–
              Explore our knowledge base on the why and how of Multi-lingual
              Education.{" "}
              <Link to="https://www.youtube.com/@imli.education/playlists">
                Click here
              </Link>
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}> Research Studies</span>
              -Learn more about the studies undertaken in collaboration by IMLi
              on language learning, conservation, and transition.{" "}
              <Link to="https://imlieducation.com/resources">Click here</Link>
            </li>
          </ul>
        </div>

      )}

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
