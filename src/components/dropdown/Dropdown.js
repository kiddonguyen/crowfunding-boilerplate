import ErrorComponent from 'components/common/ErrorComponent';
import PropTypes from 'prop-types';
import { withErrorBoundary } from 'react-error-boundary';
import { DropdownProvider } from './dropdown-context';
/**
 * A higher-order component (HOC) that wraps its children within a DropdownProvider,
 * allowing them to access dropdown-related context and functionality.
 *
 * @param {object} props - The properties passed to the Dropdown component.
 * @param {ReactNode} children - The content to be rendered within the dropdown component.
 * @param {object} ...props - Additional properties that are spread into DropdownProvider.
 *
 * @returns {ReactNode} - A component that provides dropdown context to its children.
 */
const Dropdown     = ({ children, ...props }) => (
  <DropdownProvider {...props}>
    <div className="relative inline-block w-full">{children}</div>
  </DropdownProvider>
);
Dropdown.propTypes = {
  children: PropTypes.any,
  props: PropTypes.any,
};
export default withErrorBoundary(Dropdown, {
  FallbackComponent: ErrorComponent,
});
