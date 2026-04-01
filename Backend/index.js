const express = require("express");

const app = express();
const cors = require("cors");
const Port = 8080;

app.use(cors());
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Hiii");
})


app.post("/check", (req, res) => {
  const { text } = req.body;

  // Dummy logic (replace later)
  if (text.includes("shocking") || text.includes("breaking")) {
    return res.json({ result: "⚠️ Fake News" });
  }

  res.json({ result: "✅ Real News" });
});

app.listen(Port ,()=>{
    console.log("Server Started on Port 8080");
})

