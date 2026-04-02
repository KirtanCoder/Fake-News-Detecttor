import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const checkNews = async () => {
    const res = await fetch("http://localhost:8080/check", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    const data = await res.json();
    setResult(data.result);
  };

  return (

    <div>
<div>
  <nav className="navbar">
    <a href="">Home</a>
    <a href="">Features</a>
    <a href="">Tools</a>
    <a href="">setting</a>
  </nav>
</div>

      <h1>Fake News Detector</h1>
      <textarea onChange={(e) => setText(e.target.value)} />
      <button onClick={checkNews}>Check</button>
      <h2>{result}</h2>
    </div>
  );
}

export default App;