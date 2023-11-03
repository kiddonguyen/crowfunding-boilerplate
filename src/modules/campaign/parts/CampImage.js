import { defaultImage } from 'constants/global';

const CampImage = ({image = defaultImage, className = 'h-[158px]'}) => {
  return (
    <div className={className}>
      <img
        src={image}
        alt="Campaign Item"
        title="Campaign Item"
        className="h-full w-full object-cover rounded-2xl"
      />
    </div>
  );
};

export default CampImage;
