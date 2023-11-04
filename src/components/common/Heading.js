import PropTypes from 'prop-types';
import { withErrorBoundary } from 'react-error-boundary';
import classNames from 'utils/classNames';
const Heading     = ({ children, className = '', number = '' }) => {
  return (
    <h2
      className={classNames('text-lg font-semibold text-text1 mb-5', className)}
    >
      {children}{' '}
      {number && <span className="text-secondary">{`(${number})`}</span>}
    </h2>
  );
};
Heading.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  number: PropTypes.string,
};
export default withErrorBoundary(Heading);
