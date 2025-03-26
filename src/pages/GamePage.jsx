import { useState, useEffect } from "react";
import CardTopic from "../components/CardTopic/CardTopic";
import CardCategories from "../components/CardCategories/CardCategories";
import CardExplanation from "../components/CardExplanation/CardExplanation";
import CountdownTimer from "../components/CountdownTimer/CountdownTimer";
import Button from "../components/Button/Button";
import topics from "../data/topics.json";
import "./GamePage.css";

const GamePage = () => {
  const [card, setCard] = useState({});
  const [showExplanation, setShowExplanation] = useState(false);

  const getRandomTopic = () => {
    const randomIndex = Math.floor(Math.random() * topics.length);
    return topics[randomIndex];
  };

  const openExplanation = () => {
    setShowExplanation(true);
  };

  const closeExplanation = () => {
    setShowExplanation(false);
  };

  const getRandomTopicAndUpdateCard = () => {
    const randomTopic = getRandomTopic();
    setCard(randomTopic);
  };

  const viewExplanationBtnInfo = {
    text: "查看解釋 / View Explanation",
    onClick: openExplanation,
  };

  const nextBtnInfo = {
    text: "下一題 / Next",
    onClick: getRandomTopicAndUpdateCard,
  };

  useEffect(() => {
    getRandomTopicAndUpdateCard();
  }, []);

  const renderedGame = showExplanation ? (
    <>
      <div className="explanation-header">
        <CardTopic topic={card.topic} />
        <CardCategories categories={card.correct_category} />
      </div>
      <CardExplanation explanation={card.explanation} />
      <CountdownTimer onTimerEnd={closeExplanation} />
    </>
  ) : (
    <>
      <CardTopic topic={card.topic} />
      <CardCategories categories={card.categories} />
      <div className="btn-container">
        <Button className="view-explanation" info={viewExplanationBtnInfo} />
        <Button className="next" info={nextBtnInfo} />
      </div>
    </>
  );

  return <div className="game-page-container">{renderedGame}</div>;
};

export default GamePage;
