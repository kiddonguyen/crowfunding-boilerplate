import { Button } from "components/button";
import ErrorComponent from "components/common/ErrorComponent";
import { defaultImage } from "constants/global";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import CampTitle from "./parts/CampTitle";
/**
 * CampaignPerk is a component that represents a campaign perk item. It displays details
 * about a campaign perk, such as the title, price, shipping information, and availability.
 *
 * @param {boolean} showButton - A boolean indicating whether to show a button for claiming the perk.
 *
 * @returns {JSX.Element} - A component displaying campaign perk information.
 */
const CampaignPerk     = ({ showButton = false }) => {
  return (
    <div>
      <div className="bg-white shadow-1 rounded-xl">
        <img
          src={defaultImage}
          alt="Campaign Perk"
          title="Campaign Perk"
          className="h-[232px] object-cover rounded-xl w-full"
        />
        <div className="p-5">
          <span className="inline-block text-white bg-secondary font-medium text-xs py-1 px-3 rounded-sm mb-5">
            Featured
          </span>
          <CampTitle className="text-xl mb-1 font-semibold">
            Special One Camera
          </CampTitle>
          {/* Info */}
          <div className="campaign-perk__info gap-y-4 flex flex-col">
            {/* Amount */}
            <div className="flex items-center gap-x-3">
              <span className="text-xl">
                <strong>$2,724 USD</strong>
              </span>
              <div className="text-sm font-medium text-error leading-7">
                <span className="line-through">$1,504 USD</span>{" "}
                <span>(12% OFF)</span>
              </div>
            </div>
            {/* Estimate Shipping */}
            <div className="flex flex-col justify-center">
              <p className="font-medium text-text1">Estimated Shipping</p>
              <p className="text-sm text-text2">October 2022</p>
            </div>
            {/* Claimed */}
            <div className="flex flex-col justify-center text-sm gap-y-4">
              <p className=" text-text1">
                <strong className="text-text2">05</strong> claimed
              </p>
              <p className="text-text2">Ships worldwide</p>
            </div>
          </div>
        </div>
      </div>
      {showButton && (
        <div className="mt-6">
          <Button kind="secondary">Get this perk</Button>
        </div>
      )}
    </div>
  );
};
CampaignPerk.propTypes = {
  showButton: PropTypes.bool,
};
export default withErrorBoundary(CampaignPerk, {
  FallbackComponent: ErrorComponent,
});
