import React from 'react';
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src='./me.png' alt="me" className="my-image"/>
      <div className="content">
        <h1>Ayala Koslowsky</h1>
        <p>Computer science graduate from Tel Aviv University and a passionate programmer.</p>
        {/* <button>My Websites</button> */}
        <div className='icon-links'>
          <a href='https://www.linkedin.com/in/ayala-koslowsky-38bbbb1b5/' target="_blank" rel="noopener noreferrer">
            <img src='./linkedin.png' alt='linkedin'/>
          </a>
          <a href='mailto:ko.ayala@gmail.com' target="_blank" rel="noopener noreferrer">
            <img src='./phone.png' alt='phone'/>
          </a>
          <a href='https://github.com/AyalaKoslowsky' target="_blank" rel="noopener noreferrer">
            <img src='./github.png' alt='github'/>
          </a>
          <a href='mailto:ko.ayala@gmail.com' target="_blank" rel="noopener noreferrer">
            <img src='./mail.png' alt='mail'/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
