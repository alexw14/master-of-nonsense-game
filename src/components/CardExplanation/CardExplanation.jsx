import "./CardExplanation.css";

const CardExplanation = ({ explanation }) => {
  if (!explanation) return null;

  const { en, zh } = explanation;

  return (
    <div className="card-explanation-container">
      <div className="title zh"> {zh}</div>
      <div className="title en"> {en}</div>
    </div>
  );
};

export default CardExplanation;
