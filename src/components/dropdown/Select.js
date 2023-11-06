import ErrorComponent from 'components/common/ErrorComponent';
import PropTypes from 'prop-types';
import { withErrorBoundary } from 'react-error-boundary';
import { useDropdown } from './dropdown-context';
/**
 * Select is a component that provides a dropdown-like interface with a toggleable menu.
 *
 * @param {object} props - The properties passed to the Select component.
 * @param {string} placeholder - The text displayed as the initial selection.
 *
 * @returns {ReactNode} - A component that allows users to toggle a dropdown-like menu.
 */
const Select = ({ placeholder = '' }) => {
  const { toggle, show } = useDropdown();
  return (
    <div
      className="flex items-center justify-between p-5 bg-[#E7ECF3] rounded cursor-pointer font-medium"
      onClick={toggle}
    >
      <span>{placeholder}</span>
      <span>
        {show ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </span>
    </div>
  );
};
Select.propTypes = {
  placeholder: PropTypes.string,
};
export default withErrorBoundary(Select, {
  FallbackComponent: ErrorComponent,
});
