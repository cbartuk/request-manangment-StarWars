import PropTypes from "prop-types";

const Link = ({href, className, children, target}) => {
  return (
    <a href={href} target={target} className={className}>
      {children}
    </a>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  target: PropTypes.oneOf(["_blank", "_self", "_parent", "_top"]),
};

export default Link;
