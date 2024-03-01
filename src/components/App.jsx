import { useState } from "react";
import "./App.css";
import { Header } from "./Description/Description";
import { Feedback } from "./Feedback/Feedback";
import { Options } from "./Options/Options";

export const initialState = { good: 0, neutral: 0, bad: 0 };

export default function App() {
  const [state, setState] = useState(initialState);
  console.log(state);
  const updateFeedback = (feedbackType) => {
    setState((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };
  const resetState = () => {
    console.log(`You clicked on Reset button`);
    setState(initialState);
  };
  return (
    <div>
      <Header />
      <Options updateFeedback={updateFeedback} resetState={resetState} />
      <Feedback good={state.good} neutral={state.neutral} bad={state.bad} />
    </div>
  );
}
