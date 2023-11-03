import classNames from "utils/classNames";

const CampMeta = ({ amount = '$2.000', text = 'Raised of $1.900', size="small" }) => {
  return (
    <div className="flex flex-col gap-y-1">
      <h4
        className={classNames(
          'text-text2 font-semibold',
          size === 'small' ? 'text-sm' : 'text-xl',
        )}
      >
        {amount}
      </h4>
      <span
        className={classNames(
          'text-text4 text-xs',
          size === 'small' ? 'text-xs' : '',
        )}
      >
        {text}
      </span>
    </div>
  );
};

export default CampMeta;
