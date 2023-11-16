import "./App.css";
import React from "react";

const mock = [
  {
    title: "Газель фермер",
    price: 500,
    location: "Екатеринбург",
    cargoType: [
      "Личные вещи",
      "Стройматериалы",
      "Техника и оборудование",
      "Комлектующие для пк",
      "Одежда",
    ],
    image: `${__dirname}/../public/image1.png`,
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={mock[0].image} className="App-logo" alt="logo" />
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
      </header>
    </div>
  );
}

export default App;
