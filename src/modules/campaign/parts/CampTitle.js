import ErrorComponent from 'components/common/ErrorComponent';
import PropTypes from 'prop-types';
import { withErrorBoundary } from 'react-error-boundary';
import classNames from 'utils/classNames';
/**
 * CampTitle Component
 *
 * A reusable component for displaying a campaign title or heading with optional custom class names.
 *
 * @param {string} className - Custom class names to apply to the component.
 * @param {ReactNode} children - The content to be displayed within the title.
 *
 * @returns {JSX.Element} - A heading element with the provided content and specified class names.
 */
const CampTitle     = ({ children, className = 'mb-1 font-semibold' }) => {
  return (
    <h3 className={classNames('text-text1 mb-1', className)}>{children}</h3>
  );
};
CampTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};
export default withErrorBoundary(CampTitle, {
  FallbackComponent: ErrorComponent,
});
