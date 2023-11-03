import ErrorComponent from 'components/common/ErrorComponent';
import PropTypes from 'prop-types';
import { withErrorBoundary } from 'react-error-boundary';
import { useController } from 'react-hook-form';
import classNames from 'utils/classNames';
const Input = (props) => {
  const {
    control,
    name,
    type = 'text',
    error = '',
    placeholder = '',
    children,
    ...rest
  } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: '',
  });
  return (
    <div className="relative">
      <input
        id={name}
        type={type}
        // thay đổi border color sang error nếu validate lỗi
        className={classNames(
          'w-full py-4 px-6 border bg-transparent rounded-xl text-sm font-medium text-text1 placeholder:text-text4 dark:placeholder:text-text2 dark:text-white',
          error.length > 0
            ? 'border-error text-error'
            : 'border-strock dark:border-darkStrock text-text1',
          children ? 'pr-16' : '',
        )}
        placeholder={error.length <= 0 ? placeholder : ''}
        {...rest}
        {...field}
      />
      {/* Nếu validate lỗi sẽ có thông báo */}
      {error.length > 0 && (
        <span className="absolute text-sm font-medium pointer-events-none text-error top-2/4 -translate-y-2/4 left-6 error-input">
          {error}
        </span>
      )}
      {children && (
        <span className="absolute right-6 top-2/4 -translate-y-2/4 cursor-pointer select-none">
          {children}
        </span>
      )}
    </div>
  );
};
Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  control: PropTypes.any.isRequired,
  children: PropTypes.any,
};
export default withErrorBoundary(Input, {
  FallbackComponent: <ErrorComponent />,
});
