import PropTypes from 'prop-types';
import classNames from 'utils/classNames';
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
      className={classNames(
        'text-white p-4 text-base font-semibold rounded-xl flex justify-center items-center min-h-[56px]',
        isLoading ? 'opacity-50' : '',
        className,
      )}
      {...rest}
    >
      {child}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
};
export default Button;
