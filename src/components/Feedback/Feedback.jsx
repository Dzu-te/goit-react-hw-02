export const Feedback = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const totalPositive = good + bad;
  const positivePercentage =
    totalPositive > 0 ? Math.round((good / totalPositive) * 100) : 0;

  return (
    <>
      <h3>Good: {good}</h3>
      <h3>Neutral: {neutral}</h3>
      <h3>Bad: {bad}</h3>
      <h3>Total: {total}</h3>
      <h3>Positive: {positivePercentage}%</h3>
    </>
  );
};
