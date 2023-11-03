import PropTypes from 'prop-types';
const Label = (props) => {
  // eslint-disable-next-line align-assignments/align-assignments
  const { children, htmlFor = '', className = '' } = props;
  return (
    <label
      htmlFor={htmlFor}
      className={`dark:text-text-3 text-sm font-medium text-text2 cursor-pointer inline-block ${className}`}
    >
      {children}
    </label>
  );
};
Label.propTypes = {
  children: PropTypes.node,
  htmlFor: PropTypes.string,
  className: PropTypes.string,
};
export default Label;
