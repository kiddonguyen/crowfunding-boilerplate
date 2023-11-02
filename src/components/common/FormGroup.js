import PropTypes from 'prop-types';
const FormGroup     = ({ children }) => (
  <div className="flex flex-col gap-y-3 mb-5">{children}</div>
);
FormGroup.propTypes = {
  children: PropTypes.node,
};
export default FormGroup;
