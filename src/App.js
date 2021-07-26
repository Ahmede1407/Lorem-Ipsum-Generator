import React, { useState } from "react";
import data from "./data";

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <section className="section-center">
      <h3>tired of boaring lorem ipusm?</h3>
      <form action="" className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs : </label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>

      <article className="lorem-text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
          voluptatum deserunt corporis illo, harum eius maxime iste voluptatem
          repudiandae esse.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
          voluptatum deserunt corporis illo, harum eius maxime iste voluptatem
          repudiandae esse.
        </p>
      </article>
    </section>
  );
};

export default App;
