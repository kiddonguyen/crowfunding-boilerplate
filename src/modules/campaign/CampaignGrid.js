import ErrorComponent from "components/common/ErrorComponent";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
const CampaignGrid = ({ children, type = "default" }) => {
  if (type !== "default") {
    return <div className="grid grid-col-1 gap-y-10">{children}</div>;
  }
  return <div className="grid grid-cols-4 gap-x-7">{children}</div>;
};

CampaignGrid.propTypes = {
  type: PropTypes.string,
  children: PropTypes.any,
};
export default withErrorBoundary(CampaignGrid, {
  FallbackComponent: ErrorComponent,
});
