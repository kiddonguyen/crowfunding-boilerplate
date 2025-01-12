import Gap from "components/common/Gap";
import Heading from "components/common/Heading";
import useAxiosPrivate from "hooks/useAxiosPrivate";
import CampaignFeature from "modules/campaign/CampaignFeature";
import CampaignGrid from "modules/campaign/CampaignGrid";
import CampaignItem from "modules/campaign/CampaignItem";
import { Fragment, useEffect } from "react";
import { v4 } from "uuid";
const DashboardPage = () => {
  const axiosPrivate = useAxiosPrivate();
  useEffect(() => {
    async function fetchCampaigns() {
      const response = await axiosPrivate.get("/api/campaigns");
    }
    fetchCampaigns();
  }, [axiosPrivate]);

  return (
    <Fragment>
      <Heading number={4}>Your campaign</Heading>
      <CampaignFeature></CampaignFeature>
      <Gap></Gap>
      <Heading>Popular campaign</Heading>
      <CampaignGrid>
        {Array(4)
          .fill(0)
          // eslint-disable-next-line no-unused-vars
          .map((item) => {
            return <CampaignItem key={v4()}></CampaignItem>;
          })}
      </CampaignGrid>
      <Gap></Gap>
      <Heading>Recent campaign</Heading>
      <CampaignGrid>
        {Array(4)
          .fill(0)
          // eslint-disable-next-line no-unused-vars
          .map((item) => {
            return <CampaignItem key={v4()}></CampaignItem>;
          })}
      </CampaignGrid>
    </Fragment>
  );
};

export default DashboardPage;
