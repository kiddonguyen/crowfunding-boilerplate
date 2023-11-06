import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from "utils/classNames";
/**
 * A versatile button component that can render as either a <button> or a <Link> based on props.
 * It supports various styling options, loading state, and customizable children.
 *
 * @param {string} type - The type of button (default is 'button').
 * @param {ReactNode} children - The content to be displayed within the button.
 * @param {string} className - Additional CSS classes for customization.
 * @param {boolean} isLoading - Determines if the button is in a loading state.
 * @param {string} kind - The kind of button (e.g., 'primary', 'secondary', 'ghost') that affects its styling.
 * @param {string} href - If provided, the button will render as a <Link> with this URL.
 * @param {object} rest - Additional props to be spread on the button or link.
 *
 * @returns {ReactNode} - A button or link component with specified styles and behavior.
 */
const Button = ({
  type = "button",
  children,
  className = "",
  isLoading = false,
  ...rest
}) => {
  // Render loading spinner or children based on the isLoading prop.
  const child = isLoading ? (
    <div className="w-10 h-10 rounded-full border-4 border-white border-t-transparent border-b-transparent animate-spin" />
  ) : (
    children
  );
  // Define default styling based on the kind prop (primary, secondary, or default).
  let defaultClassName =
    "p-4 text-base font-semibold rounded-xl flex justify-center items-center min-h-[56px]";
  switch (rest.kind) {
    case "primary":
      defaultClassName = defaultClassName + ` bg-primary text-white`;
      break;
    case "secondary":
      defaultClassName = defaultClassName + ` bg-secondary text-white`;
      break;
    case "ghost":
      defaultClassName =
        defaultClassName + ` bg-secondary bg-opacity-10 text-secondary`;
      break;
    default:
      break;
  }
  // Render a <Link> if href is provided, otherwise render a <button>.
  if (rest.href) {
    return (
      <Link to={rest.href} className={classNames(defaultClassName, className)}>
        {child}
      </Link>
    );
  }
  return (
    <button
      type={type}
      className={classNames(
        defaultClassName,
        isLoading ? "opacity-50" : "",
        className,
      )}
      {...rest}
    >
      {child}
    </button>
  );
};
// Define PropTypes for type checking and documentation.
Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  href: PropTypes.string,
  kind: PropTypes.oneOf(["primary", "secondary", "ghost"]),
};
export default Button;
