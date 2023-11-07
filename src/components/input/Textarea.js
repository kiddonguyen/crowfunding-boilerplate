import ErrorComponent from "components/common/ErrorComponent";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import { useController } from "react-hook-form";
import classNames from "utils/classNames";
const Textarea = (props) => {
  let textareaClassNames =
    "w-full py-4 px-6 border bg-transparent rounded-xl text-sm font-medium text-text1";
  textareaClassNames     = textareaClassNames +
    " placeholder:text-text4 dark:placeholder:text-text2 dark:text-white resize-none min-h-[140px] outline-none";
  const {
    control,
    name,
    error = "",
    children,
    placeholder = "",
    ...rest
  } = props;
  const { field }        = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <div className="relative w-full">
      <textarea
        className={classNames(
          textareaClassNames,
          error.length > 0
            ? "border-error text-error"
            : "border-strock dark:border-darkStrock text-text1",
          children ? "pr-16" : "",
        )}
        placeholder={error.length <= 0 ? placeholder : ""}
        {...rest}
        {...field}
      />
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
Textarea.propTypes = {
  name: PropTypes.string,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  control: PropTypes.any.isRequired,
  children: PropTypes.any,
};
export default withErrorBoundary(Textarea, {
  FallbackComponent: ErrorComponent,
});
