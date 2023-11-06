import ErrorComponent from 'components/common/ErrorComponent';
import PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';
import { withErrorBoundary } from 'react-error-boundary';
const DropdownContext = createContext();
/**
 * DropdownProvider is a component that uses React Context to provide state and methods for managing a dropdown menu.
 *
 * @param {object} props - The properties passed to the DropdownProvider.
 * @param {ReactNode} children - The content to be wrapped and provided with dropdown-related context.
 *
 * @returns {ReactNode} - A component that offers dropdown-related context to its children.
 */
function DropdownProvider(props) {
  const [show, setShow] = useState(false);
  // Toggles the visibility state of the dropdown.
  const toggle = () => {
    setShow(!show);
  };
  // Create a context value with relevant state and methods.
  const values = { show, setShow, toggle };
  return (
    // Provide the context to the wrapped children.
    <DropdownContext.Provider value={values}>
      {props.children}
    </DropdownContext.Provider>
  );
}
/**
 * A custom hook for accessing the dropdown-related context provided by DropdownProvider.
 *
 * @returns {object} - An object containing dropdown-related state and methods.
 * @throws {Error} - If used outside of a DropdownProvider.
 */
function useDropdown() {
  const context = useContext(DropdownContext);
  if (typeof context === 'undefined') {
    throw new Error('useDropdown must be used within DropdownProvider');
  }
  return context;
}
DropdownProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default withErrorBoundary(DropdownProvider, {
  FallbackComponent: ErrorComponent,
});
export { DropdownProvider, useDropdown };
