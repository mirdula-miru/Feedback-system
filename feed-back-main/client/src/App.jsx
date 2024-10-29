import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function App() {
  const [feedback, setFeedback] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
  });

  const handleChange = (e) => {
    setFeedback({
      ...feedback,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/feedback", feedback);
      alert("Feedback submitted successfully!");
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  return (
    <div>
      <h1>Feedback Form</h1>
      <form onSubmit={handleSubmit}>
        <label>What is your name: </label>
        <input
          type="text"
          name="q1"
          value={feedback.q1}
          onChange={handleChange}
        />
        <br />

        <label>Why you conducting this Section</label>
        <input
          type="text"
          name="q2"
          value={feedback.q2}
          onChange={handleChange}
        />
        <br />

        <label>Any opinion about this</label>
        <input
          type="text"
          name="q3"
          value={feedback.q3}
          onChange={handleChange}
        />
        <br />

        <label>Any thing else</label>
        <input
          type="text"
          name="q4"
          value={feedback.q4}
          onChange={handleChange}
        />
        <br />

        <label>Question 5</label>
        <input
          type="text"
          name="q5"
          value={feedback.q5}
          onChange={handleChange}
        />
        <br />

        <button type="submit">Submit</button>
      </form>

      <Link to="getAllData">Feedback</Link>
    </div>
  );
}

export default App;
