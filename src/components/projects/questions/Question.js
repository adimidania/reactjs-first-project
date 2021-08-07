import React, { useState } from 'react';


const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className='question'>
      <header>
        <span>
          <button className='btn' onClick={() => setShowInfo(!showInfo)}>
            {showInfo ? <i class="fas fa-chevron-up"></i> : <i class="fas fa-chevron-down"></i>}
          </button>
        </span>
        <h4>{title}</h4>        
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;