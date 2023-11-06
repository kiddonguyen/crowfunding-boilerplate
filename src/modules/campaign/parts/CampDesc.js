import ErrorComponent from "components/common/ErrorComponent";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import classNames from "utils/classNames";
/**
 * CampDesc Component
 *
 * A reusable component for displaying campaign descriptions with optional custom class names.
 *
 * @param {string} className - Custom class names to apply to the component.
 * @param {ReactNode} children - Content to be displayed within the component.
 *
 * @returns {JSX.Element} - A paragraph element with the provided content and specified class names.
 */
const CampDesc     = ({ children, className = "text-xs mb-4" }) => {
  return (
    <p className={classNames("text-sm mb-4 text-text3 font-normal", className)}>
      {children}
    </p>
  );
};
CampDesc.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};
export default withErrorBoundary(CampDesc, {
  FallbackComponent: ErrorComponent,
});
