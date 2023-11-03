import ErrorComponent from 'components/common/ErrorComponent';
import PropTypes from 'prop-types';
import { withErrorBoundary } from 'react-error-boundary';
const ButtonGoogle     = ({ text = 'Sign up with Google', onClick = () => {} }) => (
  <button
    onClick={onClick}
    className="dark:border-darkStrock flex items-center gap-x-3 w-full justify-center py-4 border border-strock rounded-xl mb-5 dark:text-white"
  >
    <img srcSet="/icon-google.png 2x" alt="Google" title="Google" />
    <span className="text-text2 text-base font-semibold dark:text-white">
      {text}
    </span>
  </button>
);
ButtonGoogle.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};
export default withErrorBoundary(ButtonGoogle, {
  FallbackComponent: <ErrorComponent />,
});
