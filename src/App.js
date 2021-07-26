import React, { useState } from "react";
import data from "./data";

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let countNumber = parseInt(count);
    // console.log(typeof countNumber, countNumber);
    if (countNumber <= 0) {
      countNumber = 1;
    }
    if (countNumber > 8) {
      countNumber = 8;
    }
    setText(data.slice(0, countNumber));
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

      {text.map((singleParagragh, index) => {
        return <p key={index}>{singleParagragh}</p>;
      })}

      <article className="lorem-text">{}</article>
    </section>
  );
};

export default App;
