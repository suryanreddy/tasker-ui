import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button onClick={props.onClick} style={props.style} className="btn">
      {props.description}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

Button.propTypes = {
  description: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
