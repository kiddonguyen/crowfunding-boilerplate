import { defaultImage } from "constants/global";
import { useState } from "react";

const DashboardSearch = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="relative z-50">
      <div
        className="w-full bg-white rounded-full
        shadow-[10px_10px_20px_0px_rgba(218,_213,_213,_0.15)] p-2 flex items-center"
      >
        <div className="flex-1 px-5">
          <input
            type="text"
            placeholder="Do fund rise now"
            className="w-full bg-transparent text-sm placeholder:text-text4 text-text1"
          />
        </div>
        <button className="w-[72px] rounded-full bg-primary text-white h-10 flex items-center justify-center flex-shrink-0">
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
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      {/* Search results bar */}
      {showSearch && (
        <div className="search-results w-full lg:w-[483px] bg-white top-full left-0 absolute z-50 translate-y-5 pb-6 rounded-3xl">
          <div className="flex items-center justify-between p-3 bg-whiteSoft rounded-3xl">
            <h4 className="text-text1 font-medium text-sm pl-4 underline">
              See all 10,123 fundraisers
            </h4>
            {/* Close search results button */}
            <button className="flex items-center justify-center w-[72px] h-[50px] rounded-xl bg-error bg-opacity-20 text-error">
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="p-6 pb-0">
            <div className="flex flex-col gap-y-5 mb-6">
              <SearchItem></SearchItem>
              <SearchItem></SearchItem>
              <SearchItem></SearchItem>
            </div>
            <h3 className="text-sm font-semibold mb-4">Related Search</h3>
            <div className="flex flex-col gap-y-3 text-sm text-text2">
              <p>
                <strong>education</strong> fund
              </p>
              <p>scholarship fund</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
const SearchItem = () => {
  return (
    <div className="flex items-center gap-x-5">
      <img
        src={defaultImage}
        alt="Default title"
        title="Default title"
        className="w-[50px] h-[50px] rounded-lg object-cover"
      />
      <div className="flex-1 text-sm">
        <h3 className="mb-1">
          <strong>Education</strong> fund for Durgham Family
        </h3>
        <p className="text-text3">By Durgham Family</p>
      </div>
    </div>
  );
};
export default DashboardSearch;
