import React from 'react';
// import logo from './logo.svg';
import Input from './inputs';
import './styles/App.css';

//create a component to host all inputs
// create another component to host the table all the data should go
function App() {
  return (
    <div className="App">
      <div className="nav__image__container">
        <img alt="background" src="https://www.enye.tech/wp-content/uploads/2019/09/556x300.png"/>
        <span className="text">React Coding Challenge</span>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
   

    <Input />
    </div>
  );
}

export default App;
