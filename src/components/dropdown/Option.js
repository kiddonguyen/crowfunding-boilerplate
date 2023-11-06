import ErrorComponent from "components/common/ErrorComponent";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import { useDropdown } from "./dropdown-context";
/**
 * Option is a component representing a selectable item within a dropdown menu.
 *
 * @param {object} props - The properties passed to the Option component.
 * @param {function} onClick - A callback function to be executed when the option is clicked.
 * @param {ReactNode} children - The content to be displayed within the option.
 *
 * @returns {ReactNode} - A component for a selectable item with click behavior in a dropdown menu.
 */
const Option = (props) => {
  const { onClick, children } = props;
  const { setShow }           = useDropdown();
  const handleClick           = () => {
    if (onClick) {
      onClick();
    }
    setShow(false);
  };
  return (
    <div
      className="py-[15px] px-[25px] cursor-pointer flex items-center justify-between hover:text-primary transition-all"
      onClick={handleClick}
    >
      {children}
    </div>
  );
};
Option.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.any,
};
export default withErrorBoundary(Option, {
  FallbackComponent: ErrorComponent,
});
