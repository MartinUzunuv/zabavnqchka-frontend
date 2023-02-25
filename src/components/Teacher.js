import React from "react";
import "./Teacher.css";

const Teacher = ({ teacher, index, setIndicator }) => {
  const rate = () => {
    //setIndicator(Math.random());
    fetch("http://localhost:9000/vote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: teacher.name }),
    })
    .then((res) => {
      setIndicator(Math.random());
    });
  };
  return (
    <div className="Teacher">
      <h5>
        {index === 0 ? <>🥇</> : <>{index === 1 ? <>🥈</> : <>{index === 2 ? <>🥉</> : <>{index}</>}</>}</>}. {teacher.name}: {teacher.score}{" "}
        <button type="button" className="btn btn-light" onClick={rate}>
          👍+1
        </button>
      </h5>
    </div>
  );
};

export default Teacher;
