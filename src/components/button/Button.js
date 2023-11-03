import PropTypes from 'prop-types';
const Button = ({
  type = 'button',
  children,
  className = '',
  isLoading = false,
  ...rest
}) => {
  const child = isLoading ? (
    <div className="w-10 h-10 rounded-full border-4 border-white border-t-transparent border-b-transparent animate-spin" />
  ) : (
    children
  );
  return (
    <button
      type={type}
      className={`${className} ${
        isLoading ? 'opacity-50' : ''
      } text-white p-4 text-base font-semibold
       rounded-xl flex justify-center items-center min-h-[56px]`}
      {...rest}
    >
      {child}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
};
export default Button;
