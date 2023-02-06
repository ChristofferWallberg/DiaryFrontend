import { useState, useEffect } from "react";

function GetUsers() {
  const [diaries, setDiaries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/Users")
      .then((response) => response.json())
      .then((data) => setDiaries(data));
  }, []);
  return diaries;
}

export default GetUsers;
