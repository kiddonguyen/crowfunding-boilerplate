import ErrorComponent from "components/common/ErrorComponent";
import { defaultImage } from "constants/global";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
/**
 * CampAuthor Component
 *
 * A reusable component for displaying the campaign author's information, including an image and name.
 *
 * @param {string} image - The URL of the author's image.
 * @param {string} author - The name of the author.
 *
 * @returns {JSX.Element} - A component displaying the author's image and name.
 */
const CampAuthor     = ({ image = defaultImage, author = "Mahfulzul Nabil" }) => {
  return (
    <div className="flex items-center mb-2 gap-x-3">
      <img
        src={image}
        alt={author}
        title={author}
        className="h-8 w-8 object-cover rounded-full"
      />
      <p className="text-xs text-text3">
        By <span className="text-text2 font-semibold">{author}</span>
      </p>
    </div>
  );
};
CampAuthor.propTypes = {
  image: PropTypes.string,
  author: PropTypes.string,
};
export default withErrorBoundary(CampAuthor, {
  fallback: ErrorComponent,
});
