import React from "react";
import "./Aboutus.css"; // Import the CSS file
import Minols from "./Minols";
const Aboutus = () => {
  return (
    <>
      <div>
        <div className="about-imli-container">
          <h1 className="about-us">Who We are</h1>
          <p>
            IMLi Education Foundation was started in 2018 with the core idea
            that every student, no matter his circumstances and language, has
            the right to an excellent education and gain the skills needed to be
            future-ready.
          </p>
          <p>
            IMLi helped set up mini-libraries in anganwadis and schools in
            Baramati district of Pune and trained anganwadi workers on early
            childhood education and early literacy. We sought to partner with
            resource organizations to create and translate free learning
            resources for tribal children.
          </p>
          <p>
            While we continued to engage with local and tribal language resource
            building, we saw that many students needed support in English, and
            the current teaching pedagogies across many schools were not
            implementing a science-backed approach to teaching English.
          </p>
          <p>
            And through the waves of the pandemic and technological changes
            sweeping across sectors, we saw the immense need to support students
            to become different kind of learners. We sought to bring
            enquiry-based approaches and socio-emotional learning of Empathy,
            Mindfulness, Compassion, and Critical Inquiry to children to help
            them adapt and succeed.
          </p>
          <p>
            Thus, the mission of IMLi has grown to encompass these areas of
            engagement while staying true to its core beliefs and vision. Half a
            decade later, it is now a full-fledged organisation with a dedicated
            team that works towards the same core purpose of bridging inequities
            in language education in India.
          </p>
          <h1 className="about-us">Our Beliefs</h1>
          <ul>
            <li>
              <h2>Language is at the heart of Learning.</h2>
              <p>
                Children need to have strong foundations in language to be able
                to express themselves and engage fully with learning across all
                other subjects. Whether it be STEM or 21st Century skills,
                strong language abilities open doors to better learning.
              </p>
            </li>
            <li>
              <h2>Every child should be able to choose his language.</h2>{" "}
              <p>
                Language is also key to the world, and children and parents need
                to have keys to the language they want. Whether a child is
                learning in his mother tongue or in English, he should have
                access to the best resources for learning it.
              </p>
            </li>
            <li>
              <h2>Teachers are doing their best. </h2>{" "}
              <p>
                Teachers are the pillars of the education system. Any real
                solution will be based on trusting them and supporting their
                efforts with a clear understanding of their challenges and
                limitations.
              </p>
            </li>
            <li>
              <h2>Knowledge grows with sharing.</h2>{" "}
              <p>
                Open dialogue and collaborative learning extends beyond
                classrooms. Collaboration among educators and partnerships with
                various stakeholders can cultivate a diverse, inclusive, and
                community-driven learning ecosystem that benefits everyone.
              </p>
            </li>
          </ul>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            To support and strengthen positive learning environments for
            children, that engender empathy in <br /> children to create a world
            of where pluralistic democratic communities coexist in harmony.
          </p>
        </div>
        <div className="vision">
          <h2>Our Mission</h2>
          <ul>
            <li>
              Impact language learning for 10,000 children by 2028 across
              English and Indian languages
            </li>
            <li>
              Create a network of 2000 teachers and educators by empowering them
              with best practices in language learning.{" "}
            </li>
            <li>
              Strengthen schools and systems with research-backed pedagogies and
              resources for language education.
            </li>
            <li>
              Provide open access to key resources for building this empowered
              network and collaborative culture of learning.
            </li>
          </ul>
        </div>
      </div>
      <div>
        <Minols></Minols>
      </div>
    </>
  );
};

export default Aboutus;
