import ErrorComponent from "components/common/ErrorComponent";
import { defaultImage } from "constants/global";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
/**
 * CampImage Component
 *
 * A reusable component for displaying campaign images with optional custom class names.
 *
 * @param {string} image - The image URL to display. Defaults to a default image if not provided.
 * @param {string} className - Custom class names to apply to the component.
 *
 * @returns {JSX.Element} - A container for the campaign image with the specified class names.
 */
const CampImage     = ({ image = defaultImage, className = "h-[158px]" }) => {
  return (
    <div className={className}>
      <img
        src={image}
        alt="Campaign Item"
        title="Campaign Item"
        className="h-full w-full object-cover rounded-2xl"
      />
    </div>
  );
};
CampImage.propTypes = {
  image: PropTypes.string,
  className: PropTypes.string,
};
export default withErrorBoundary(CampImage, {
  FallbackComponent: ErrorComponent,
});
