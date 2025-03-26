import "./CardTopic.css";

const CardTopic = ({ topic }) => {
  if (!topic) return null;
  const { en, zh } = topic;
  return (
    <div className="card-topic-container">
      <div className="title zh">{zh}</div>
      <div className="title en">{en}</div>
    </div>
  );
};

export default CardTopic;
