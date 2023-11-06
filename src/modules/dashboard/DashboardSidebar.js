import {
  IconCampaign,
  IconDarkmode,
  IconDashboard,
  IconPayment,
  IconProfile,
  IconWithdraw,
} from 'components/icons';
import IconLogout from 'components/icons/IconLogout';
import { NavLink } from 'react-router-dom';
const sidebarLinks     = [
  {
    icon: <IconDashboard></IconDashboard>,
    title: 'Dashboard',
    url: '/',
  },
  {
    icon: <IconCampaign></IconCampaign>,
    title: 'Campaign',
    url: '/campaign',
  },
  {
    icon: <IconPayment></IconPayment>,
    title: 'Payment',
    url: '/payment',
  },
  {
    icon: <IconWithdraw></IconWithdraw>,
    title: 'Withdraw',
    url: '/withdraw',
  },
  {
    icon: <IconProfile></IconProfile>,
    title: 'Profile',
    url: '/profile',
  },
  {
    icon: <IconLogout></IconLogout>,
    title: 'Logout',
    url: '/logout',
    onClick: () => {},
  },
  {
    icon: <IconDarkmode></IconDarkmode>,
    title: 'Light/Dark',
    url: '/light',
    onClick: () => {},
  },
];
const DashboardSidebar = () => {
  const navLinkClass =
    'flex items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-lg md:mb-8 last:mt-auto last:bg-white last:shadow-sdprimary';
  return (
    <div className="md:min-h-[653px] px-[14px] py-10 w-full md:w-[76px] bg-white rounded-3xl shadow-sdprimary flex flex-col flex-shrink-0">
      {sidebarLinks.map((link) => (
        <NavLink
          key={link.title}
          to={link.url}
          className={({ isActive }) =>
            isActive
              ? `${navLinkClass} text-primary bg-primary bg-opacity-20`
              : navLinkClass
          }
        >
          <span className="">{link.icon}</span>
          <span className="md:hidden">{link.title}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default DashboardSidebar;
