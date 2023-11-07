import PropTypes from "prop-types";
const FormGroup     = ({ children }) => (
  <div className="flex flex-col gap-y-2 lg:gap-y-3 mb-4 lg:mb-6 items-start w-full">
    {children}
  </div>
);
FormGroup.propTypes = {
  children: PropTypes.node,
};
export default FormGroup;
