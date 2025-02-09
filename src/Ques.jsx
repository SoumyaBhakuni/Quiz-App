import { useState } from "react";
import "./Ques.css";

const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Transfer Markup Language",
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Home Tool Markup Language"
    ],
    correct: 1
  },
  {
    question: "Which HTML tag is used to define an internal stylesheet?",
    options: ["<css>", "<style>", "<script>", "<link>"],
    correct: 1
  },
  {
    question: "Which property is used in CSS to change the text color of an element?",
    options: ["text-color", "fgcolor", "color", "font-color"],
    correct: 2
  },
  {
    question: "Which HTML element is used for the largest heading?",
    options: ["<h1>", "<h6>", "<head>", "<heading>"],
    correct: 0
  },
  {
    question: "What is the correct way to apply an external CSS file to an HTML document?",
    options: [
      "<style src='styles.css'>",
      "<link rel='stylesheet' href='styles.css'>",
      "<css>styles.css</css>",
      "<script src='styles.css'></script>"
    ],
    correct: 1
  },
  {
    question: "Which CSS property is used to set the background color of an element?",
    options: ["background-color", "color", "bgcolor", "background"],
    correct: 0
  },
  {
    question: "Which unit is NOT relative in CSS?",
    options: ["em", "rem", "px", "%"],
    correct: 2
  },
  {
    question: "Which of the following is the correct way to comment in CSS?",
    options: [
      "// This is a comment",
      "/* This is a comment */",
      "<!-- This is a comment -->",
      "# This is a comment"
    ],
    correct: 1
  },
  {
    question: "Which HTML tag is used to display a table?",
    options: ["<table>", "<tab>", "<tr>", "<td>"],
    correct: 0
  },
  {
    question: "Which property is used in CSS for controlling text size?",
    options: ["font-weight", "text-size", "font-size", "text-style"],
    correct: 2
  }
];


export default function Ques() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div>
      <p className="Timer">10:00</p>
      <div className="ques-container">
        <div className="ques-box">
          <h1>Question {currentQuestion + 1}:</h1>
          <p>{questions[currentQuestion].question}</p>
        </div>

        {/* Options grid */}
        <div className="options-container">
          {questions[currentQuestion].options.map((option, index) => (
            <button key={index} className="option-btn">
              {option}
            </button>
          ))}
        </div>

        {/* Next button */}
        {currentQuestion < questions.length - 1 ? (
          <button className="next-btn" onClick={handleNext}>
            Next
          </button>
        ) : (
          <button className="next-btn" disabled>
            Finish
          </button>
        )}
      </div>
    </div>
  );
}
