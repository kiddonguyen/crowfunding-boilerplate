import { Button } from 'components/button';
import DashboardFund from './DashboardFund';
import DashboardSearch from './DashboardSearch';
import { Link } from 'react-router-dom';
const DashboardTopbar = () => (
  <div className="flex items-center justify-between mb-8">
    <div className="flex items-center gap-x-10 ml-[14px]">
      <Link className="inline-block" to={'/'}>
        <img srcSet="/logo.png 2x" alt="Crowfunding" title="Crowfunding" />
      </Link>
      <div className="w-full max-w-[458px]">
        <DashboardSearch />
      </div>
    </div>
    <div className="flex items-center gap-x-10 flex-1 justify-end">
      <DashboardFund></DashboardFund>
      <Button
        className="px-7"
        type="button"
        href="/start-campaign"
        kind="secondary"
      >
        Start a campaign
      </Button>
      <img
        srcSet="/logo.png 2x"
        alt="Avatar"
        title="Avatar"
        className="rounded-full object-cover"
      />
    </div>
  </div>
);

export default DashboardTopbar;
