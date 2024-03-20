import React from "react";
import "./Program4.css";
import { useState } from "react";

function Program2() {
    const [showDetails, setShowDetails] = useState(false);
    const auth = localStorage.getItem("user");
    const user = auth ? JSON.parse(auth) : null;
    const isAdmin = user && user.email === "alaknanda@gmail.com";

    const toggledet = () => {
      setShowDetails(!showDetails);
    };
  return (
    <div className="ece-container">
      <img src="/i3.jpg" alt="program2" className="image" />
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
      {isAdmin && showDetails && <h1> </h1>}
      <button onClick={toggledet}>
        {" "}
        {showDetails ? "Show Less" : "Read More"}
      </button>
    </div>
  );
}

export default Program2;
