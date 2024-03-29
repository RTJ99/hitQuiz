import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home";

import QuizInstructions from "./components/quiz/QuizInstructions";
import Play from "./components/quiz/Play";
import QuizSummary from "./components/quiz/QuizSummary";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />

        <Route path="/play/quiz" exact component={Play} />
        <Route path="/play/quizSummary" exact component={QuizSummary} />
      </Router>
    </div>
  );
}

export default App;
