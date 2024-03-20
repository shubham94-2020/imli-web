import React, { useState } from 'react';
import './resources.css'; // Import the CSS file

const ResourcesPage = () => {
  const [selectedOption, setSelectedOption] = useState('introduction');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <div className="heading-center">
        <button onClick={() => handleOptionClick('introduction')}className="nav-link">INTRODUCTION</button>
        <button onClick={() => handleOptionClick('parentStudent')} className="nav-link">PARENT / STUDENT</button>
        <button onClick={() => handleOptionClick('teacherEducator')} className="nav-link">TEACHER / EDUCATOR</button>
      </div>
      <div className="text-center" style={{ marginTop: '20px' }}>
        {selectedOption === 'introduction' && (
          <div>
            <p>
              <h2 className="heading">What is IMLi’s Resource World?</h2><br/>
              Welcome to IMLi’s Resource World! This resource repository provides you expertly compiled content for student instruction/learning and teacher professional development. We have put together the best materials created by our team and have sourced high quality, contextual resources to make this your one stop-shop for teaching, learning materials for Grades 1-5.
            </p>
            <p><br/>
              <h2 className="heading">How to explore?</h2><br/>
              You will find here learning materials for students in Grades 1-5 (ages 5-10) and professional development / classroom instructional support for teachers teaching primary grades. You can navigate through the repository by clicking through the relevant categorization of material.
            </p>
            <div className="button-group">
              <button onClick={() => handleOptionClick('parentStudent')} className="button-group button-one">Are you a parent or student looking for student-facing resources?</button>
              <button onClick={() => handleOptionClick('teacherEducator')} className="button-group button-two">Are you a teacher or educator exploring teacher-facing resources?</button>
              <button onClick={() => handleOptionClick('research')} className="button-group button-three">Are you a practitioner looking for research related to the education sector?</button>
            </div>
            <br />
            <p>
              If you are an NGO looking for support to run a student-learning/ self-learning space or want to build a partnership with us, please fill in and tell us more about how we can support you.
            </p><br />
            <h2 className="heading heading-left">Know your child’s learning level</h2><br/>
            <p>
              The first step in any learning journey is to understand how much more there is to learn. Our team of curriculum experts has designed a set of contextual student assessment tools which will be able to identify the grade-level competency of the child. This means that by taking these simple assessments you will be able to identify the child’s academic strengths and areas of development, compared to the grade-benchmarked skills expected of children in their age / stage of development. Watch the space for more.
            </p><br />
            <h2 className="heading heading-left">The team behind IMLi’s Resource World</h2><br/>
            <p>
              IMLi’s curriculum and content team has supported the Tamil Nadu State Council of Educational Research and Training (SCERT) in the textbook revision process, has co-authored 25 primary school books, and designed tech-blended learning materials for remote learning projects. We have extensive expertise in the education sector as consultants, researchers, and over 30 years of collective teaching experience, most of it in government school classrooms. Our team is specialized in creating solutions for the education sector, specifically to enhance the foundational literacy and numeracy skills of students.
            </p>
          </div>
        )}
        {selectedOption === 'parentStudent' && (
          <div>
          <h2 className="heading heading-left">Welcome to IMLi’s Resource World!</h2><br />
          <p>
            Discover high quality, relevant student-facing learning materials which have been deftly compiled by IMLi’s team of curriculum experts. You will find audio clips, videos and worksheets to learn from and practice with. Simply click below on the relevant subject, to find topic-wise learning and practice materials. Materials are available for students aged 5-10 (stds. 1-5). If you are looking for teacher professional development content, <a href="#" onClick={() => handleOptionClick('teacherEducator')} style={{ color: 'green' }}>please click here</a> . You will find lesson planning and teacher professional development materials here.
          </p>
          <div className="dropdown-container">
            <button className="dropdown-container dropButton-one">English</button>
            <button className="dropdown-container dropButton-two">Indian Languages</button>
            <button className="dropdown-container dropButton-three">3D Learning</button>
            {/* Add dropdown content for each button (implementation omitted for brevity) */}
            <div className="dropdown-content">
        <button onClick={() => handleDropdownOptionClick('Marathi')} className="dropdown-item">Marathi</button>
        <button onClick={() => handleDropdownOptionClick('Tamil')} className="dropdown-item">Tamil</button>
        <button onClick={() => handleDropdownOptionClick('Hindi')} className="dropdown-item">Hindi</button>
        <button onClick={() => handleDropdownOptionClick('Tribal Languages')} className="dropdown-item">Tribal Languages</button>
      </div>
          </div>
        </div>
        )}
        {selectedOption === 'teacherEducator' && (
          <div>
          <h2 className="heading heading-left">Welcome to IMLi’s Resource World!</h2><br />
          <p>Discover teacher-facing learning materials which have been deftly compiled by Madhi’s team of curriculum experts. You will find articles, template resources, videos which will help you to plan and execute your lessons better and also to develop your professional skills. If you are looking for student-facing materials to use in classrooms, <a href="#" onClick={() => handleOptionClick('parentStudent')} style={{ color: 'green' }}>please click here</a> . Student facing materials are available for students aged 5-10 (Stds. 1-5).
          </p>
          <div className="dropdown-container">
            <button className="dropdown-container dropButton-one">Assessment</button>
            <button className="dropdown-container dropButton-two">Classroom </button>
            <button className="dropdown-container dropButton-three">Professional Development</button>
            {/* Add dropdown content for each button (implementation omitted for brevity) */}
          </div>
        </div>
        )}
        {selectedOption === 'research' && (
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
