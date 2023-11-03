import PropTypes from 'prop-types';
import classNames from 'utils/classNames';
// Checkbox có input class hidden, type checkbox
// props checked để kiểm tra user có check hay chưa
// giá trị của checked được thay đổi dựa trên prop onClick được truyền vào
const Checkbox     = ({ name, checked = false, onClick = () => {}, children }) => (
  <div className="flex items-start justify-center gap-x-5">
    <div
      className={classNames(
        'inline-flex items-center justify-center p-1 w-5 h-5 text-white rounded border cursor-pointer',
        checked
          ? 'bg-primary border-primary'
          : 'border-strock dark:border-text3',
      )}
      onClick={onClick}
    >
      <input type="checkbox" className="hidden" name={name} />
      <span className={`${checked ? '' : 'opacity-0 invisible'}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
      </span>
    </div>
    {children && (
      <label
        className="font-medium text-text3 cursor-pointer"
        onClick={onClick}
      >
        {children}
      </label>
    )}
  </div>
);
Checkbox.propTypes = {
  name: PropTypes.string,
  checked: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.any,
};
export default Checkbox;
