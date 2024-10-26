import { useMemo } from "react";
import PropTypes from "prop-types";

const FeaturesList = ({
  className = "",
  featuresListWidth,
  featuresListAlignSelf,
  centralizedClientInformation,
  realTimeUpdatesAlwaysKnowWhic,
  taskAutomationAndProgressTracki,
}) => {
  const featuresListStyle = useMemo(() => {
    return {
      width: featuresListWidth,
      alignSelf: featuresListAlignSelf,
    };
  }, [featuresListWidth, featuresListAlignSelf]);

  return (
    <div
      className={`w-[353px] flex flex-col items-start justify-start gap-[5px] max-w-full text-left text-sm text-lightgoldenrodyellow-100 font-plus-jakarta-sans ${className}`}
      style={featuresListStyle}
    >
      <div className="relative leading-[26px] font-semibold">
        <ul className="m-0 font-inherit text-inherit pl-[19px]">
          <li>{centralizedClientInformation}</li>
        </ul>
      </div>
      <div className="relative leading-[26px] font-semibold">
        <ul className="m-0 font-inherit text-inherit pl-[19px]">
          <li>{realTimeUpdatesAlwaysKnowWhic}</li>
        </ul>
      </div>
      <div className="relative leading-[26px] font-semibold">
        <ul className="m-0 font-inherit text-inherit pl-[19px]">
          <li>{taskAutomationAndProgressTracki}</li>
        </ul>
      </div>
    </div>
  );
};

FeaturesList.propTypes = {
  className: PropTypes.string,
  centralizedClientInformation: PropTypes.string,
  realTimeUpdatesAlwaysKnowWhic: PropTypes.string,
  taskAutomationAndProgressTracki: PropTypes.string,

  /** Style props */
  featuresListWidth: PropTypes.string,
  featuresListAlignSelf: PropTypes.string,
};

export default FeaturesList;
