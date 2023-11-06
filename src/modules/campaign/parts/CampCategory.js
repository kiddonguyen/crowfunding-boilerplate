import ErrorComponent from "components/common/ErrorComponent";
import { IconFolder } from "components/icons";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import { Link } from "react-router-dom";
import classNames from "utils/classNames";
/**
 * CampCategory Component
 *
 * A reusable component for displaying a category with an optional link and custom class names.
 *
 * @param {string} text - The category text to display. Defaults to 'Education' if not provided.
 * @param {string} className - Custom class names to apply to the component.
 *
 * @returns {JSX.Element} - A link to the category with an icon and the specified class names.
 */
const CampCategory     = ({ text = "Education", className = "text-xs" }) => {
  return (
    <Link
      to="/"
      className={classNames(
        "flex items-end gap-x-3 font-medium text-text3 mb-4",
        className,
      )}
    >
      <IconFolder></IconFolder>
      <span>{text}</span>
    </Link>
  );
};
CampCategory.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};
export default withErrorBoundary(CampCategory, {
  FallbackComponent: ErrorComponent,
});
