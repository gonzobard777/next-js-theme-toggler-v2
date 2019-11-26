import React from "react";
import './Main.less';

export const Main: React.FC = (props) => {
  return (
    <main className="main">
      <div className="app__adaptive-container">
        <div className="main__content">
          <h2>Welcome!</h2>
          <p>Do|While|For|Each is a composite application.</p>
          <p><a href="https://gitlab.com/Do-While-For-Each/backend" target="_blank" rel="noopener noreferrer">Backend</a> is written in Java using microservice architecture.</p>
          <p>As a frontend you can use anything that can communicate with the backend API.</p>
          <p>While there is only three <a href="https://gitlab.com/Do-While-For-Each/frontend" target="_blank" rel="noopener noreferrer">frontend implementation</a>. You are now interacting with Next.js implementation.</p>
          <p>--</p>
          <p>src: <a href="https://gitlab.com/Do-While-For-Each" target="_blank" rel="noopener noreferrer">gitlab.com/Do-While-For-Each</a></p>
        </div>
      </div>
    </main>
  );
};
