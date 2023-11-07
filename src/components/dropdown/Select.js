import ErrorComponent from "components/common/ErrorComponent";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import classNames from "utils/classNames";
import { useDropdown } from "./dropdown-context";
/**
 * Select is a component that provides a dropdown-like interface with a toggleable menu.
 *
 * @param {object} props - The properties passed to the Select component.
 * @param {string} placeholder - The text displayed as the initial selection.
 * @param {className} placeholder - The text displayed as the initial selection.
 *
 * @returns {ReactNode} - A component that allows users to toggle a dropdown-like menu.
 */
const Select = ({ placeholder = "", className = "" }) => {
  const { toggle, show } = useDropdown();
  let selectClassNames   = "flex items-center justify-between w-full py-4 px-6 border bg-white rounded-lg";
  selectClassNames       = selectClassNames +
    "text-sm text-text1 placeholder:text-text4 dark:placeholder:text-text2 dark:text-white border-strock dark:border-darkStrock";
  return (
    <div className={classNames(selectClassNames, className)} onClick={toggle}>
      <span className="capitalize">{placeholder}</span>
      <span>
        {show ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
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
            className="h-4 w-4"
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
  className: PropTypes.string,
};
export default withErrorBoundary(Select, {
  FallbackComponent: ErrorComponent,
});
