import { Button } from 'components/button';
import Heading from 'components/common/Heading';
import LayoutDashboard from 'layout/LayoutDashboard';
import CampaignFeature from 'modules/campaign/CampaignFeature';
import CampaignGrid from 'modules/campaign/CampaignGrid';

const CampaignPage = () => {
  return (
    <LayoutDashboard>
      <div className="mb-10 bg-white rounded-3xl flex items-center justify-between py-8 px-10">
        <div className="flex items-start gap-x-6">
          {/* Plus Icon */}
          <div className="w-14 rounded-full flex items-center justify-center text-white h-14 bg-secondary bg-opacity-60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
          <div className="flex-1">
            <h1 className="text-[22px] font-semibold mb-2">
              Create your campaign
            </h1>
            <p className="text-sm text-text3">
              Jump right into our editor and create your first Virtue campaign!
            </p>
            <p className="text-sm text-text3">
              Need any help?{' '}
              <a href="/" className="text-primary">
                Learn More...
              </a>
            </p>
          </div>
        </div>
        <Button
          type="button"
          kind="ghost"
          className="px-8"
          href="/start-campaign"
        >
          Create Campaign
        </Button>
      </div>
      <Heading number={4}>Your campaign</Heading>
      <CampaignGrid type="secondary">
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
      </CampaignGrid>
      <Button kind="ghost" className="mx-auto px-8">
        <div className="mt-10">
          <span>See more+</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
      </Button>
    </LayoutDashboard>
  );
};

export default CampaignPage;
