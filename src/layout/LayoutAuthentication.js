// Layout cho các phần tử được sử dụng trong những trang Authentication (Sign In, Sign Up)
import ErrorComponent from "components/common/ErrorComponent";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { withErrorBoundary } from "react-error-boundary";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
const LayoutAuthentication = (props) => {
  // eslint-disable-next-line align-assignments/align-assignments
  const { children, heading = "" } = props;
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    // check if user is already logged in, navigate them to homepage
    if (user && user.email) {
      navigate("/");
    }
  }, [user]);
  if (user && user.email) {
    return null;
  }
  return (
    <div className="w-full min-h-screen bg-lite dark:bg-darkbg p-10 relative isolate">
      <img
        src="/ellipse.png"
        alt="Background Image"
        title="Background Image"
        className="hidden lg:block absolute pointer-events-none bottom-0 right-0 left-0 z-[-1]"
      />
      <Link to="/" className="inline-block mb-5 lg:mb-16">
        {/* srcSet để tạo ảnh rõ nét hơn */}
        <img
          srcSet="/logo.png 2x"
          alt="Crowfunding App"
          title="Crowfunding App"
        />
      </Link>
      <div className="w-full max-w-[556px] bg-white dark:bg-darkSecondary rounded-xl px-5 py-8 lg:px-16 lg:py-12 mx-auto">
        <h1 className="font-semibold text-lg lg:text-xl mb-1 lg:mb-3 text-text1 text-center dark:text-white">
          {heading}
        </h1>
        {children}
      </div>
    </div>
  );
};
LayoutAuthentication.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node,
};
export default withErrorBoundary(LayoutAuthentication, {
  FallbackComponent: ErrorComponent,
});
