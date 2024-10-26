import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <section
      className={`w-[1311px] flex flex-row items-start justify-start pt-0 pb-[14.1px] pl-0 pr-5 box-border max-w-full text-left text-xl font-inter ${className}`}
    >
      <div className="flex-1 rounded-33xl [background:linear-gradient(100.01deg,_#fff_50.5%,_#edfff5_68.33%,_#e9fdff_93.47%)] flex flex-row items-end justify-start pt-[42px] pb-[42.2px] pl-[99px] pr-[75px] box-border gap-[155px] max-w-full mq750:gap-[39px] mq750:pl-6 mq750:pt-[27px] mq750:pb-[27px] mq750:box-border mq450:gap-[19px] mq1275:gap-[77px] mq1275:flex-wrap mq1275:pl-[49px] mq1275:pr-[37px] mq1275:box-border">
        <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[2.8px] box-border min-w-[419px] max-w-full mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-3.5 max-w-full">
            <div className="w-[601px] relative tracking-[-0.86px] leading-[37px] text-transparent !bg-clip-text [background:linear-gradient(102.41deg,_#c25438,_#ff623c_55.61%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center max-w-full mq450:text-base mq450:leading-[30px]">{`We understand the specific challenges construction companies face when managing multiple projects. `}</div>
            <h1 className="m-0 relative text-22xl tracking-[-0.86px] leading-[53.8px] font-normal font-plus-jakarta-sans text-transparent !bg-clip-text [background:linear-gradient(107.07deg,_#143637_8.63%,_#399a9d)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq750:text-14xl mq750:leading-[43px] mq450:text-6xl mq450:leading-[32px]">
              Our lead management platform is designed with the unique needs of
              the construction industry in mind, ensuring your team can track
              client leads from inquiry to completion seamlessly.
            </h1>
          </div>
        </div>
        <div className="w-[316.6px] flex flex-col items-start justify-start py-2.5 px-[3px] box-border gap-[19px] mq1275:flex-1">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-1.5 pr-[7px]">
            <img
              className="h-[119.2px] flex-1 relative rounded-xl-2 max-w-full overflow-hidden object-cover"
              loading="lazy"
              alt=""
              src="/1000006924-2@2x.png"
            />
          </div>
          <img
            className="self-stretch flex-1 relative rounded-3xl max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt=""
            src="/1000006910-2@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
