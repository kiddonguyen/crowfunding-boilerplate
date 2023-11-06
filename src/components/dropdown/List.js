import ErrorComponent from 'components/common/ErrorComponent';
import PropTypes from 'prop-types';
import { withErrorBoundary } from 'react-error-boundary';
import { useDropdown } from './dropdown-context';
/**
 * List is a component that conditionally renders a list of items when the dropdown is visible.
 *
 * @param {object} props - The properties passed to the List component.
 * @param {ReactNode} children - The content to be displayed when the dropdown is shown.
 *
 * @returns {ReactNode} - A component for rendering items within the dropdown menu when it is visible.
 */
const List = ({ children }) => {
  const { show } = useDropdown();
  return (
    <>
      {show && (
        <div className="absolute top-full left-0 w-full bg-white shadow-sm">
          {children}
        </div>
      )}
    </>
  );
};
List.propTypes = {
  children: PropTypes.any,
};
export default withErrorBoundary(List, {
  FallbackComponent: ErrorComponent,
});
