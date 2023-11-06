import { Button } from "components/button";
import { Fragment } from "react";
import CampaignPerk from "./CampaignPerk";
import CampaignSupport from "./CampaignSupport";
import CampCategory from "./parts/CampCategory";
import CampDesc from "./parts/CampDesc";
import CampImage from "./parts/CampImage";
import CampMeta from "./parts/CampMeta";
import CampTitle from "./parts/CampTitle";
import CampViewAuthor from "./parts/CampViewAuthor";
import CampaignGrid from "./CampaignGrid";
import CampaignItem from "./CampaignItem";
const CampaignView = () => {
  return (
    <Fragment>
      <div
        className="mb-10 text-[40px] font-bold h-[140px] rounded-3xl bg-cover bg-no-repeat bg-opacity-40 flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(179deg, rgba(32, 18, 63, 0) -7.14%, rgba(0, 0, 0, 0.4) 87.01%),
          url(/banner.png)`,
        }}
      >
        <h1>Education</h1>
      </div>
      <div className="flex items-start gap-x-10 w-full max-w-[1066px]">
        <div className="flex-1">
          <CampImage className="h-[398px] mb-8"></CampImage>
          <div className="flex justify-center gap-x-5">
            {Array(4)
              .fill(0)
              .map((item, index) => (
                <img
                  src="https://source.unsplash.com/random"
                  alt=""
                  className="w-[89px] h-[89px] rounded-lg object-cover"
                  key={index}
                />
              ))}
          </div>
        </div>
        <div className="flex flex-1 max-w-[443px] flex-col">
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
          <CampViewAuthor></CampViewAuthor>
          <div className="flex items-start justify-between gap-x-5 mb-4">
            <CampMeta size="big"></CampMeta>
            <CampMeta size="big"></CampMeta>
            <CampMeta size="big"></CampMeta>
          </div>
          <Button className="w-full text-white bg-primary">
            Back this project
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between mt-[100px] bg-white p-5 border-b border-b-slate-100 mb-6">
        <div className="flex items-center gap-x-14 text-sm font-medium text-text3">
          <span className="cursor-pointer">Campaign</span>
        </div>
        <Button kind="primary">Back this project</Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:gap-x-[124px] mb-[70px]">
        <div className="w-[605px]">1.5fr</div>
        <div className="w-[441px] gap-y-16 flex flex-col">
          <CampaignSupport></CampaignSupport>
          <div className="flex flex-col gap-y-8">
            {Array(3)
              .fill(0)
              .map((item, index) => (
                <CampaignPerk key={index}></CampaignPerk>
              ))}
          </div>
        </div>
      </div>
      <h2 className="mb-10 text-xl font-semibold">
        You also may interested in
      </h2>
      <CampaignGrid>
        {Array(4)
          .fill(0)
          .map((item, index) => (
            <CampaignItem key={index}></CampaignItem>
          ))}
      </CampaignGrid>
    </Fragment>
  );
};

export default CampaignView;
