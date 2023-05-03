import { useState } from "react";
import { getRandomNumber } from "./utils/getRandom";
import phrases from "./assets/phrases.json";
import Phrase from "./components/Phrase/Phrase";
import ChangePhraseButton from "./components/Phrase/ChangePhraseButton";

import "./App.css";
import space1 from "./assets/space_1.jpg";
import space2 from "./assets/space_2.jpg";

const backgrounds = [space1, space2, "/space_3.jpg", "/space_4.jpg"];

function App() {
  const getRandomPhrase = () => phrases[getRandomNumber(phrases.length - 1)];
  const getRandomBackground = () => backgrounds[getRandomNumber(backgrounds.length - 1)];

  const [phraseObject, setPhraseObject] = useState(getRandomPhrase());
  const [background, setBackground] = useState(getRandomBackground());
  const [newPhrase, setNewPhrase] = useState("");
  const [newAuthor, setNewAuthor] = useState("");

  const changePhrase = () => {
    let newPhraseObj = getRandomPhrase();
    let newBackground = getRandomBackground();

    while (newPhraseObj.phrase === phraseObject.phrase) {
      newPhraseObj = getRandomPhrase();
    }

    while (newBackground === background) {
      newBackground = getRandomBackground();
    }

    setPhraseObject(newPhraseObj);
    setBackground(newBackground);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPhraseObj = { phrase: newPhrase, author: newAuthor };
    setPhraseObject(newPhraseObj);
    setNewPhrase("");
    setNewAuthor("");
  };

  return (
    <div className="container_app" style={{ backgroundImage: `url("${background}")` }}>
      <h1 className="titulo">Info-Galaxy</h1>
      <Phrase phrase={phraseObject.phrase} />
      <p className="author">
        Autor: <mark>{phraseObject.author}</mark>
      </p>
      <ChangePhraseButton changePhrase={changePhrase} />
      <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="phrase">Escribe tu Frase:</label>
        <input type="text" id="phrase" value={newPhrase} onChange={(e) => setNewPhrase(e.target.value)} />
        <label htmlFor="author">Nombre del Autor:</label>
        <input type="text" id="author" value={newAuthor} onChange={(e) => setNewAuthor(e.target.value)} />
        <button type="submit" className="button-with-icon">
          <i className="bx bx-send"></i>
        </button>
      </form>
    </div>
    </div>
  );
}

export default App;
