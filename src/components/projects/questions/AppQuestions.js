import React, { useState } from 'react';
import data from './Data';
import Question from './Question';
import "./AppQuestions.css"
import NavbarProjects from "../NavbarProjects"

function AppQuestions() {
  const [questions, setQuestions] = useState(data);
  return (
    <main className="AppQuestions">
      <NavbarProjects />
      <div className='container-app-question'>
        <h3>ULTRALEARNING SUMMARY</h3>
        <section className='info'>
          {questions.map((question) => {
            return (
              <Question key={question.id} {...question}></Question>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default AppQuestions;