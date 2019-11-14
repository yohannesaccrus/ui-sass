import React from "react";

const App = () => {
  return (
    <div className="app">
      <div className="app__overlay" />
      <div className="app__text">
        <h1 className="app__title">
          Let's have <span>Crush</span> on <span>Code</span>
        </h1>
        <p className="app__subtitle">
          a simple template to brighten and start your adventure in UI/UX world
          using React and SASS
        </p>
        <div className="app__socials">
          <a
            href="https://www.instagram.com/crushoncode/"
            className="app__social"
          >
            <i className="fab fa-instagram" />
            <p>@crushoncode</p>
          </a>
          <a
            href="https://www.youtube.com/channel/UCmEkB9GWMPJ6H833W-gKMAw"
            className="app__social"
          >
            <i className="fab fa-youtube" />
            <p>CrushOnCode</p>
          </a>
          <a href="https://github.com/yohannesaccrus" className="app__social">
            <i className="fab fa-github" />
            <p>yohannesaccrus</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
