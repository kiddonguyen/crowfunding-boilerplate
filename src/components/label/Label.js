import PropTypes from 'prop-types';
import classNames from 'utils/classNames';
/**
 * A simple label component used to associate text with form elements using the "for" attribute.
 *
 * @param {object} props - The properties passed to the Label component.
 * @param {string} htmlFor - The "for" attribute, linking the label to a form element by its ID.
 * @param {string} className - Additional CSS classes for customization.
 * @param {ReactNode} children - The content to be displayed within the label.
 *
 * @returns {ReactNode} - A label element with specified properties and styling.
 */
const Label = (props) => {
  // Destructure the properties and provide default values.
  // eslint-disable-next-line align-assignments/align-assignments
  const { children, htmlFor = '', className = '' } = props;
  return (
    <label
      htmlFor={htmlFor}
      className={classNames(
        'dark:text-text-3 text-sm font-medium text-text2 cursor-pointer inline-block',
        className,
      )}
    >
      {children}
    </label>
  );
};
// Define PropTypes for type checking and documentation.
Label.propTypes = {
  children: PropTypes.node,
  htmlFor: PropTypes.string,
  className: PropTypes.string,
};
export default Label;
