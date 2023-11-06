import ErrorComponent from "components/common/ErrorComponent";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import classNames from "utils/classNames";
/**
 * CampMeta Component
 *
 * A reusable component for displaying campaign metadata such as the amount raised and related text.
 *
 * @param {string} amount - The amount to display (e.g., '$2,000').
 * @param {string} text - Text to display alongside the amount (e.g., 'Raised of $1,900').
 * @param {string} size - Size of the component ('small' or 'large').
 *
 * @returns {JSX.Element} - A component displaying the amount and related text with specified size.
 */
const CampMeta     = ({
  amount = "$2.000",
  text = "Raised of $1.900",
  size = "small",
}) => {
  return (
    <div className="flex flex-col gap-y-1">
      <h4
        className={classNames(
          "text-text2 font-semibold",
          size === "small" ? "text-sm" : "text-xl",
        )}
      >
        {amount}
      </h4>
      <span
        className={classNames(
          "text-text4 text-xs",
          size === "small" ? "text-xs" : "",
        )}
      >
        {text}
      </span>
    </div>
  );
};
CampMeta.propTypes = {
  amount: PropTypes.string,
  text: PropTypes.string,
  size: PropTypes.string,
};
export default withErrorBoundary(CampMeta, {
  FallbackComponent: ErrorComponent,
});
