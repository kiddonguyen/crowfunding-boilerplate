import CampCategory from "./parts/CampCategory";
import CampDesc from "./parts/CampDesc";
import CampImage from "./parts/CampImage";
import CampMeta from "./parts/CampMeta";
import CampTitle from "./parts/CampTitle";

const CampaignFeature = () => {
  return (
    <div className="flex items-center gap-x-[30px] w-full max-w-[1048px]">
      <CampImage className="h-[266px] flex-1"></CampImage>
      <div className="flex flex-1 max-w-[435px] flex-col">
        <CampCategory text="Architecture" className="text-sm"></CampCategory>
        <CampTitle className="font-bold mb-4">
          Remake - We Make architecture exhibition
        </CampTitle>
        <CampDesc className="text-sm mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          laborum beatae est perspiciatis eum cum nihil ad nemo voluptatem
          sequi!
        </CampDesc>
        {/* Progress Bar */}
        <div className="w-full rounded-full bg-[#EFEFEF] h-[5px] mb-6">
          <div className="h-full w-2/4 rounded-full bg-primary"></div>
        </div>
        <div className="flex items-start justify-between gap-x-5">
          <CampMeta size="big"></CampMeta>
          <CampMeta size="big"></CampMeta>
          <CampMeta size="big"></CampMeta>
        </div>
      </div>
    </div>
  );
};

export default CampaignFeature;
