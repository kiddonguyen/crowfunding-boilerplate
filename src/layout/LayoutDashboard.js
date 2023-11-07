import { Button } from "components/button";
import Overlay from "components/common/Overlay";
import { IconClose } from "components/icons";
import CampaignPerk from "modules/campaign/CampaignPerk";
import DashboardSidebar from "modules/dashboard/DashboardSidebar";
import DashboardTopbar from "modules/dashboard/DashboardTopbar";
import PropTypes from "prop-types";
import ReactModal from "react-modal";
import { Outlet } from "react-router-dom";
const LayoutDashboard     = () => {
  return (
    <div className="p-10 bg-lite min-h-screen">
      <ReactModal
        isOpen={false}
        overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center"
        className="scroll-hidden max-h-[90vh] overflow-y-auto modal-content w-full max-w-[521px] bg-white rounded-2xl outline-none p-10 relative"
      >
        {/* Close modal */}
        <button className="absolute w-11 h-11 flex justify-center items-center z-10 right-[10px] top-[10px] text-text1 cursor-pointer">
          <IconClose></IconClose>
        </button>
        <div className="flex flex-col items-center gap-y-16 w-full">
          <div className="w-full">
            <h2 className="font-bold text-[25px] mb-10 text-center">
              Back this project
            </h2>
            <p className="text-sm font-medium text-text2">
              Enter the contribute amount
            </p>
            <div className="flex flex-col gap-y-5">
              <input
                name="amount"
                type="text"
                className="w-full px-5 py-3 text-left border border-strock rounded-md placeholder:text-text4"
                placeholder="$10"
              />
              <p className="text-sm text-text3">
                Contribution are not associatied with perks
              </p>
              <Button kind="primary" className="max-w-[162px] capitalize">
                continue
              </Button>
            </div>
          </div>
          <div className="w-full">
            <CampaignPerk showButton></CampaignPerk>
          </div>
        </div>
      </ReactModal>
      <Overlay></Overlay>
      <DashboardTopbar />
      <div className="flex gap-x-10 items-start">
        <DashboardSidebar />
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};
LayoutDashboard.propTypes = {
  children: PropTypes.any,
};
export default LayoutDashboard;
