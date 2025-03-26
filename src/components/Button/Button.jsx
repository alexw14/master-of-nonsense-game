import "./Button.css";

const Button = ({ info, className }) => {

  return (
    <div>
      <button className={`btn ${className}`} onClick={info.onClick}>
        {info.text}
      </button>
    </div>
  );
};

export default Button;
