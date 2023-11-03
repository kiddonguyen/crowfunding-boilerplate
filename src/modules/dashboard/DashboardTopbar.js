import { Button } from 'components/button';
import DashboardSearch from './DashboardSearch';
import DashboardFund from './DashboardFund';
const DashboardTopbar = () => (
  <div className="flex items-center justify-between mb-8">
    <div className="flex items-center gap-x-10 ml-[14px]">
      <img srcSet="/logo.png 2x" alt="Crowfunding" title="Crowfunding" />
      <div className="w-full max-w-[458px]">
        <DashboardSearch />
      </div>
    </div>
    <div className="flex items-center gap-x-10 flex-1 justify-end">
      <DashboardFund></DashboardFund>
      <Button className="bg-secondary text-white px-7" type='button'>Start a campaign</Button>
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
