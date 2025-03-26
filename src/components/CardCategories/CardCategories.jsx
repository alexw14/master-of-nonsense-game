import "./CardCategories.css";

const CardCategories = ({ categories }) => {
  if (!categories) return null;

  const { en, zh } = categories;

  const renderedCategoryCards = zh.map((cat, index) => {
    return (
      <div key={index} className="category">
        <div className="category-title zh">{cat}</div>
        <div className="category-title en">{en[index]}</div>
      </div>
    );
  });

  return (
    <div className="card-categories-container">
      <div className="card-categories">{renderedCategoryCards}</div>
    </div>
  );
};

export default CardCategories;
