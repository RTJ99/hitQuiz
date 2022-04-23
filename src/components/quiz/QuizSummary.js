import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

class QuizSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      numberOfQuestions: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
    };
  }

  componentDidMount() {
    const { state } = this.props.location;
    if (state) {
      this.setState({
        score: (state.score / state.numberOfQuestions) * 100,
        numberOfQuestions: state.numberOfQuestions,
        numberOfAnsweredQuestion: state.numberOfAnsweredQuestion,
        correctAnswers: state.correctAnswers,
        wrongAnswers: state.wrongAnswers,
      });
    }
  }

  render() {
    const { state, score } = this.props.location;
    let stats, remark;
    const userScore = this.state.score;
    // Defining user score
    if (userScore <= 50) {
      remark = "😔 Better luck next time!";
    } else if (userScore > 50 && userScore <= 70) {
      remark = "😁 Barely passed!";
    } else if (userScore > 70 && userScore <= 90) {
      remark = "😎 You did Great";
    } else if (userScore > 90 && userScore <= 100) {
      remark = "👑 Perfectly done";
    }
    if (state !== undefined) {
      stats = (
        <Fragment>
          <div className="bg-gradient-to-tr from-[#fff] via-[#e0f1ff] to-[#6cbdff] text-center md:px-20 2xl:px-40 text-[#556B78] pt-[100px]  px-10 pb-20 min-h-[100vh] ">
            <div className=".quiz-summary text-xl">
              <h4 className="text-5xl font-bold mb-5">{remark}</h4>
              <h2>Your Score: {this.state.score.toFixed(0)}&#37;</h2>
              <span className="stats">Total number of questions: </span>
              <span className="stats">{this.state.numberOfQuestions}</span>
              <br />
              <span className="stats">Number of attempted questions: </span>
              <span className="stats">
                {this.state.numberOfAnsweredQuestion}
              </span>
              <br />
              <span className="stats">Number of Correct Answers: </span>
              <span className="stats">{this.state.correctAnswers}</span> <br />
              <span className="stats">Number of Wrong Answers: </span>
              <span className="stats">{this.state.wrongAnswers}</span>
              <br />
            </div>
            <section>
              <ul className="mt-5">
                <Link
                  to="/"
                  className="bg-slate-400 rounded-lg text-white p-2 m-2 hover:bg-slate-500 cursor-pointer"
                >
                  Return
                </Link>
                <Link
                  to="/play/quiz"
                  className="bg-blue-400 rounded-lg text-white p-2 m-2 hover:bg-blue-500 cursor-pointer"
                >
                  Play Again
                </Link>
              </ul>
            </section>
          </div>
        </Fragment>
      );
    } else {
      stats = (
        <section>
          <div className=".quiz-summary">
            <h1 className="no-stats">No stats available yet</h1>
            <ul>
              <Link to="/" className="options">
                Return
              </Link>
              <Link to="/play/quiz" className="options">
                Take a Quiz!
              </Link>
            </ul>
          </div>
        </section>
      );
    }
    return (
      <Fragment>
        <Helmet>
          <title>HIT QUIZ - Summary</title>
        </Helmet>
        {stats}
      </Fragment>
    );
  }
}

export default QuizSummary;
