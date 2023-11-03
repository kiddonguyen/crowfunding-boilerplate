import classNames from 'utils/classNames';

const CampDesc = ({ children, className = 'text-sm mb-4' }) => {
  return (
    <p className={classNames('text-sm mb-4 text-text3 font-normal', className)}>
      {children}
    </p>
  );
};

export default CampDesc;
