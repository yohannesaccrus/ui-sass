import React from "react";

const App = () => {
  return (
    <div className="app">
      <div className="app__overlay" />
      <div className="app__text">
        <h1 className="app__title">"You can do it"</h1>
        <p className="app__subtitle">
          a simple template to brighten and start your adventure in UI/UX world
          using React and SASS
        </p>
        <div className="app__socials">
          <a href="https://www.instagram.com/yohanesaccrus/" className="app__social">
            <i className="fab fa-instagram" />
            <p>@yohanesaccrus</p>
          </a>
          <a href="https://web.facebook.com/yohannes.accroozdelcacciaderto" className="app__social">
            <i className="fab fa-facebook-square" />
            <p>Accrus</p>
          </a>
          <a href="https://www.youtube.com/watch?v=fLE9pChmC7M" className="app__social">
            <i className="fab fa-youtube" />
            <p>yohanes accrus</p>
          </a>
         
        </div>
      </div>
    </div>
  );
};

export default App;
