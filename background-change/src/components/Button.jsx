import PropTypes from "prop-types";

const Button = ({ name, changeColor, color }) => {
  const handleClick = () => {
    changeColor();
  };
  return (
    <button
      type="button"
      className="px-8 py-2 rounded-full outline font-semibold outline-black outline-1"
      style={{
        backgroundColor: color,
        color: color === "#000000" ? "#ffffff" : "#000000",
      }}
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  changeColor: PropTypes.func.isRequired,
};

export default Button;
