import { Button } from "@mui/material";
import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch flex flex-row items-start justify-start py-0 pl-[65px] pr-[72px] box-border max-w-full text-left text-base text-black font-plus-jakarta-sans mq750:pl-8 mq750:pr-9 mq750:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-end justify-start gap-[60px] max-w-full mq750:gap-[30px]">
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 mq1275:flex-wrap">
          <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
            <div className="flex flex-col items-start justify-start gap-4">
              <div className="flex flex-row items-start justify-start relative">
                <img
                  className="h-[34px] w-[34px] relative"
                  alt=""
                  src="/group-2.svg"
                />
                <img
                  className="h-full w-full absolute !m-[0] top-[-6px] left-[-7px] object-cover z-[1]"
                  alt=""
                  src="/image-61-1@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-4">
                <div className="flex flex-row items-start justify-start gap-2">
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <img
                      className="w-6 h-6 relative overflow-hidden shrink-0"
                      alt=""
                      src="/frame-3.svg"
                    />
                  </div>
                  <div className="relative leading-[26px] capitalize font-semibold">
                    eo@nakhsha.in
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-2">
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <img
                      className="w-6 h-6 relative overflow-hidden shrink-0"
                      alt=""
                      src="/frame-4.svg"
                    />
                  </div>
                  <div className="relative leading-[26px] capitalize font-semibold inline-block min-w-[109px]">
                    +9606966266
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-28 max-w-full mq750:gap-14 mq750:flex-wrap mq450:gap-7">
            <div className="flex flex-col items-start justify-start gap-4">
              <h1 className="m-0 w-20 relative text-13xl leading-[42px] capitalize font-semibold font-inherit text-center inline-block mq750:text-7xl mq750:leading-[34px] mq450:text-lgi mq450:leading-[25px]">
                links
              </h1>
              <div className="flex flex-row items-start justify-start py-0 pl-px pr-0">
                <div className="relative leading-[26px] capitalize font-semibold">
                  home
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 pl-px pr-0">
                <div className="relative leading-[26px] capitalize font-semibold">
                  Our company
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 pl-px pr-0">
                <div className="relative leading-[26px] capitalize font-semibold inline-block min-w-[88px]">
                  Contact us
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-4">
              <h1 className="m-0 relative text-13xl leading-[42px] capitalize font-semibold font-inherit inline-block min-w-[86px] mq750:text-7xl mq750:leading-[34px] mq450:text-lgi mq450:leading-[25px]">
                legal
              </h1>
              <div className="relative leading-[26px] capitalize font-semibold inline-block min-w-[103px]">
                terms of use
              </div>
              <a className="[text-decoration:none] relative leading-[26px] capitalize font-semibold text-[inherit] inline-block min-w-[108px]">
                privacy policy
              </a>
              <div className="relative leading-[26px] capitalize font-semibold">
                cookie policy
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-4">
              <h1 className="m-0 relative text-13xl leading-[42px] capitalize font-semibold font-inherit mq750:text-7xl mq750:leading-[34px] mq450:text-lgi mq450:leading-[25px]">
                product
              </h1>
              <div className="relative leading-[26px] capitalize font-semibold inline-block min-w-[73px]">
                take tour
              </div>
              <div className="relative leading-[26px] capitalize font-semibold inline-block min-w-[73px]">
                live chat
              </div>
              <div className="relative leading-[26px] capitalize font-semibold">
                reveiws
              </div>
            </div>
          </div>
          <div className="w-[360px] flex flex-col items-start justify-start gap-4 max-w-full text-13xl">
            <div className="flex flex-row items-start justify-start py-0 pl-[5px] pr-1">
              <h1 className="m-0 relative text-inherit leading-[42px] capitalize font-semibold font-inherit mq750:text-7xl mq750:leading-[34px] mq450:text-lgi mq450:leading-[25px]">
                Newsletter
              </h1>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[26px] max-w-full text-base">
              <div className="flex flex-row items-start justify-start py-0 pl-[5px] pr-1">
                <div className="relative leading-[26px] capitalize font-semibold inline-block min-w-[122px]">
                  Stay up to date
                </div>
              </div>
              <div className="self-stretch rounded-4xs bg-white border-gainsboro-100 border-[2px] border-solid box-border flex flex-row items-start justify-between pt-0.5 pb-[3px] pl-[30px] pr-[7px] min-h-[60px] max-w-full gap-5 text-darkgray mq450:flex-wrap">
                <div className="h-[60px] w-[360px] relative rounded-4xs bg-white border-gainsboro-100 border-[2px] border-solid box-border hidden max-w-full" />
                <div className="flex flex-col items-start justify-start pt-[11.6px] px-0 pb-0">
                  <div className="relative leading-[26px] font-semibold inline-block min-w-[84.6px] z-[1]">{`Your email `}</div>
                </div>
                <Button
                  className="h-[49px] w-[151px] shadow-[0px_10px_16px_-10px_rgba(255,_255,_255,_0.06)_inset,_0px_8px_8px_rgba(0,_31,_31,_0.06),_0px_4px_4px_rgba(0,_31,_31,_0.06),_0px_2px_2px_rgba(0,_31,_31,_0.06),_0px_0px_1px_rgba(0,_31,_31,_0.32),_0px_-2px_1px_rgba(0,_31,_31,_0.24)_inset,_0px_1px_1px_rgba(205,_250,_206,_0.08)_inset] z-[2]"
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "18",
                    background: "linear-gradient(180deg, #ff5229, #ff6541)",
                    borderRadius: "10.8px",
                    "&:hover": {
                      background: "linear-gradient(180deg, #ff5229, #ff6541)",
                    },
                    width: 151,
                    height: 49,
                  }}
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-end py-0 px-[101px] box-border max-w-full mq750:pl-[25px] mq750:pr-[25px] mq750:box-border mq1275:pl-[50px] mq1275:pr-[50px] mq1275:box-border">
          <div className="border-gainsboro-200 border-t-[1px] border-solid box-border overflow-hidden flex flex-row items-start justify-start pt-[37px] pb-[39px] pl-[369px] pr-[368px] max-w-full mq750:pl-[92px] mq750:pr-[92px] mq750:box-border mq1100:pl-[184px] mq1100:pr-[184px] mq1100:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="relative leading-[26px] capitalize font-semibold">
              Copyright 2022 Frybix inc. all rights reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
