import { IconFolder } from 'components/icons';
import { Link } from 'react-router-dom';

const CampCategory = ({ text = 'Education' }) => {
  return (
    <Link
      to="/"
      className="flex items-end gap-x-3 text-xs font-medium text-text3 mb-4"
    >
      <IconFolder></IconFolder>
      <span>{text}</span>
    </Link>
  );
};

export default CampCategory;
