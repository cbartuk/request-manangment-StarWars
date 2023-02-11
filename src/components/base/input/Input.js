import PropTypes from "prop-types";

const Input = ({type, onChange}) => {
  return <input type={type} className="form-control" onChange={onChange} />;
};

Input.defaultProps = {
  type: "text",
};

Input.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
