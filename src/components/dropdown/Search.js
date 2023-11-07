import ErrorComponent from "components/common/ErrorComponent";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import { useDropdown } from "./dropdown-context";
/**
 * Search is a component that provides a search input field within a dropdown menu.
 *
 * @param {object} props - The properties passed to the Search component.
 * @param {string} placeholder - The placeholder text displayed in the search input.
 * @param {any} ...props - Additional properties to be spread on the input field.
 *
 * @returns {ReactNode} - A component for a search input field in a dropdown menu.
 */
const Search = ({ placeholder, ...props }) => {
  const { onChange } = useDropdown();
  return (
    <div className="p-2 sticky top-0 z-10 bg-white">
      <input
        type="text"
        placeholder={placeholder}
        className="p-4 outline-none w-full border border-gray-200 rounded"
        onChange={onChange}
        {...props}
      />
    </div>
  );
};
Search.propTypes = {
  placeholder: PropTypes.string,
  props: PropTypes.any,
};
export default withErrorBoundary(Search, {
  FallbackComponent: ErrorComponent,
});
