export const Options = ({ updateFeedback, resetState }) => {
  const handleGood = () => {
    console.log(`You clicked on Good button`);
    updateFeedback("good");
  };
  const handleNeutral = () => {
    console.log(`You clicked on Neutral button`);
    updateFeedback("neutral");
  };
  const handleBad = () => {
    console.log(`You clicked on Bad button`);
    updateFeedback("bad");
  };

  return (
    <>
      <button onClick={handleGood} type="button">
        Good
      </button>
      <button onClick={handleNeutral} type="button">
        Neutral
      </button>
      <button onClick={handleBad} type="button">
        Bad
      </button>
      <button onClick={resetState} type="button">
        Reset
      </button>
    </>
  );
};
