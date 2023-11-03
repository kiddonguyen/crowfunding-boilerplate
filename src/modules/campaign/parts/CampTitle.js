import classNames from 'utils/classNames';

const CampTitle = ({ children, className = 'mb-1 font-semibold' }) => {
  return (
    <h3 className={classNames('text-text1 mb-1', className)}>
      {children}
    </h3>
  );
};

export default CampTitle;
