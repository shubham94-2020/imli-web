import React, { useState } from 'react';
import './resources.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const ResourcesPage = () => {
  const [selectedOption, setSelectedOption] = useState('introduction');

  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  

  const toggleDropdown1 = () => {
    setShowDropdown1(!showDropdown1);
    setShowDropdown2(false);
    setShowDropdown3(false);
  };
  const toggleDropdown2 = () => {
    setShowDropdown2(!showDropdown2);
    setShowDropdown1(false);
    setShowDropdown3(false);
  };
  const toggleDropdown3 = () => {
    setShowDropdown3(!showDropdown3);
    setShowDropdown1(false);
    setShowDropdown2(false);
  };

  return (
    <div>
      <div className="heading-center">
        <button
          onClick={() => handleOptionClick("introduction")}
          className={`nav-link ${
            selectedOption === "introduction" ? "active" : ""
          }`}
        >
          INTRODUCTION
        </button>
        <button
          onClick={() => handleOptionClick("parentStudent")}
          className={`nav-link ${
            selectedOption === "parentStudent" ? "active" : ""
          }`}
        >
          PARENT / STUDENT
        </button>
        <button
          onClick={() => handleOptionClick("teacherEducator")}
          className={`nav-link ${
            selectedOption === "teacherEducator" ? "active" : ""
          }`}
        >
          TEACHER / EDUCATOR
        </button>
      </div>
      <div className="text-center" style={{ marginTop: "20px" }}>
        {selectedOption === "introduction" && (
          <div>
            <p>
              <h2 className="heading">What is IMLi’s MultiLingual Resource Hub?</h2>
              <br />
              Welcome to IMLi’s Resource Hub! This resource repository provides you expertly compiled content for student instruction/learning and teacher professional development. We have put together the best materials created by our team and have sourced high quality, contextual resources to make this your one stop-shop for teaching, learning materials for Grades 1-5.
            </p>
            <p>
              <br />
              <h2 className="heading">How to explore?</h2>
              <br />
              You will find here learning materials for students in Grades 1-5 (ages 5-10) and professional development / classroom instructional support for teachers teaching primary and pre-primary grades. You can navigate through the repository by clicking through the relevant categorization of material.
            </p>
            <div className="button-group">
              <button
                onClick={() => handleOptionClick("parentStudent")}
                className="button-group button-one"
              >
                Are you a parent or student looking for student-facing
                resources?
              </button>
              <button
                onClick={() => handleOptionClick("teacherEducator")}
                className="button-group button-two"
              >
                Are you a teacher or educator exploring teacher-facing
                resources?
              </button>
              <button
                onClick={() => handleOptionClick("research")}
                className="button-group button-three"
              >
                Are you a practitioner looking for research related to the
                education sector?
              </button>
            </div>
            <br />
            <p>
              If you are an NGO looking for support to run a student-learning/
              self-learning space or want to build a partnership with us, please
              fill in and tell us more about how we can support you.
            </p>
            <br />
            {/* <h2 className="heading heading-left">
              Know your child’s learning level
            </h2>
            <br />
            <p>
              The first step in any learning journey is to understand how much
              more there is to learn. Our team of curriculum experts has
              designed a set of contextual student assessment tools which will
              be able to identify the grade-level competency of the child. This
              means that by taking these simple assessments you will be able to
              identify the child’s academic strengths and areas of development,
              compared to the grade-benchmarked skills expected of children in
              their age / stage of development. Watch the space for more.
            </p>
            <br />
            <h2 className="heading heading-left">
              The team behind IMLi’s Resource World
            </h2>
            <br />
            <p>
              IMLi’s curriculum and content team has supported the Tamil Nadu
              State Council of Educational Research and Training (SCERT) in the
              textbook revision process, has co-authored 25 primary school
              books, and designed tech-blended learning materials for remote
              learning projects. We have extensive expertise in the education
              sector as consultants, researchers, and over 30 years of
              collective teaching experience, most of it in government school
              classrooms. Our team is specialized in creating solutions for the
              education sector, specifically to enhance the foundational
              literacy and numeracy skills of students.
            </p> */}
          </div>
        )}
        {selectedOption === "parentStudent" && (
          <div className="parentarea">
            <h2 className="heading heading-left">
              Welcome to IMLi’s Resource World!
            </h2>
            <br />
            <p>
              Discover high quality, relevant student-facing learning materials
              which have been deftly compiled by IMLi’s team of curriculum
              experts. You will find audio clips, videos and worksheets to learn
              from and practice with. Simply click below on the relevant
              subject, to find topic-wise learning and practice materials.
              Materials are available for students aged 5-10 (stds. 1-5). If you
              are looking for teacher professional development content,{" "}
              <a
                href="#"
                onClick={() => handleOptionClick("teacherEducator")}
                style={{ color: "green" }}
              >
                please click here
              </a>{" "}
              . You will find lesson planning and teacher professional
              development materials here.
            </p>
            <br />
            <div className="dropdown-container">
              <button className="dropdown1" onClick={toggleDropdown1}>
                English
              </button>
              {showDropdown1 && (
                <div
                  className="dropdown-content1"
                  // onMouseEnter={handleMouseEnter1}
                  // onMouseLeave={handleMouseLeave}
                >
                  <p>Phonics</p>
                  <br />
                  <p>Reading Comprehension</p>
                  <br />
                  <p>Writing</p>
                </div>
              )}

              <button className="dropdown2" onClick={toggleDropdown2}>
                Indian Languages
              </button>
              {showDropdown2 && (
                <div className="dropdown-content2">
                  <p>Marathi</p>
                  <br />
                  <p>Tamil</p>
                  <br />
                  <p>Hindi</p>
                  <br />
                  <p>Tribal Languages</p>
                </div>
              )}
              <button className="dropdown3" onClick={toggleDropdown3}>
                3D Learning
              </button>
              {showDropdown3 && (
                <div
                  className="dropdown-content3"
                  // onMouseEnter={handleMouseEnter1}
                >
                  <p>ThinkBox</p>
                  <br />
                  <p>SEL Material</p>
                  <br />
                  <p>STEM</p>
                </div>
              )}
            </div>
          </div>
        )}
        {selectedOption === "teacherEducator" && (
          <div>
            <h2 className="heading heading-left">
              Welcome to IMLi’s Resource World!
            </h2>
            <br />
            <p>
              Discover teacher-facing learning materials which have been deftly
              compiled by Madhi’s team of curriculum experts. You will find
              articles, template resources, videos which will help you to plan
              and execute your lessons better and also to develop your
              professional skills. If you are looking for student-facing
              materials to use in classrooms,{" "}
              <a
                href="#"
                onClick={() => handleOptionClick("parentStudent")}
                style={{ color: "green" }}
              >
                please click here
              </a>{" "}
              . Student facing materials are available for students aged 5-10
              (Stds. 1-5).
            </p>
            <br />
            <div className="dropdown-container">
              <button className="dropdown1" onClick={toggleDropdown1}>
                Assessment
              </button>
              {showDropdown1 && (
                <div className="dropdown-content1">
                  <p>Phonics</p>
                  <br />
                  <p>Reading Comprehension</p>
                  <br />
                  <p>Writing</p>
                </div>
              )}

              <button className="dropdown2" onClick={toggleDropdown2}>
                Classroom
              </button>
              {showDropdown2 && (
                <div className="dropdown-content2">
                  <p>Marathi</p>
                  <br />
                  <p>Tamil</p>
                  <br />
                  <p>Hindi</p>
                  <br />
                  <p>Tribal Languages</p>
                </div>
              )}
              <button className="dropdown3" onClick={toggleDropdown3}>
                Development
              </button>
              {showDropdown3 && (
                <div className="dropdown-content3">
                  <p>ThinkBox</p>
                  <br />
                  <p>SEL Material</p>
                  <br />
                  <p>STEM</p>
                </div>
              )}
            </div>
          </div>
        )}
        {selectedOption === "research" && (
          <div>
            <h2 className="heading">Research Section</h2>
            <p>Content for Research section goes here...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourcesPage;