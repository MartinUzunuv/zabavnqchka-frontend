import { useState, useEffect } from "react";
import Teacher from "./Teacher";

const Leadbord = () => {
  const [teachers, setTeachers] = useState([]);
  const [indicator, setIndicator] = useState(Math.random());

  useEffect(() => {
    fetch("http://localhost:9000/leadbord", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then((res) => {
        let tempTeachers = res.teachers
        setTeachers(tempTeachers)
      });
  }, [indicator]);

  return <div><br />{teachers.map((teacher, index) => (
    <Teacher key={index} teacher={teacher} index={index} setIndicator={setIndicator} />
  ))}</div>;
};

export default Leadbord;
