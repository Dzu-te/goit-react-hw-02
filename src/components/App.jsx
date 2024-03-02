import { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./Description/Description";
import { Feedback } from "./Feedback/Feedback";
import { Options } from "./Options/Options";

export const initialState = { good: 0, neutral: 0, bad: 0 };

export default function App() {
  const [state, setState] = useState(() => {
    const savedState = localStorage.getItem("feedbackState");
    return savedState ? JSON.parse(savedState) : initialState;
  });

  useEffect(() => {
    localStorage.setItem("feedbackState", JSON.stringify(state));
  }, [state]);

  const updateFeedback = (feedbackType) => {
    if (!feedbackType) {
      return setState(initialState);
    }

    setState((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  const totalFeedback = state.good + state.neutral + state.bad;

  return (
    <div>
      <Header />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? (
        <Feedback good={state.good} neutral={state.neutral} bad={state.bad} />
      ) : (
        <p>No feedback yet</p>
      )}
    </div>
  );
}
