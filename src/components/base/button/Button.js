import PropTypes from "prop-types";

const Button = ({variant, size, type, disabled, outline, className, onClick, children}) => {
  const renderClass = () => {
    let classes = "btn btn-";

    classes += outline ? `outline-${variant}` : variant;
    classes += size ? " btn-" + size : "";
    classes += disabled ? " disabled" : "";
    classes += className ? " " + className : "";

    return classes;
  };

  return (
    <button type={type} className={renderClass()} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  variant: "primary",
  type: "button",
  disabled: false,
  outline: false,
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"]),
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  size: PropTypes.oneOf(["sm", "lg"]),
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
