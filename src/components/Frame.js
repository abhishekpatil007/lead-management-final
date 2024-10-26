import { Button } from "@mui/material";
import PropTypes from "prop-types";

const Frame = ({ className = "" }) => {
  return (
    <div
      className={`ml-[-1px] self-stretch bg-mediumturquoise flex flex-col items-end justify-start pt-[55px] pb-[468px] pl-[30px] pr-40 box-border relative gap-[89px] max-w-full text-center text-base text-white font-plus-jakarta-sans mq750:gap-11 mq750:pt-[23px] mq750:pr-20 mq750:pb-[198px] mq750:box-border mq1100:pt-9 mq1100:pb-[304px] mq1100:box-border mq450:gap-[22px] mq450:pr-5 mq450:box-border ${className}`}
    >
      <img
        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover mix-blend-soft-light z-[4]"
        alt=""
        src="/image@2x.png"
      />
      <div className="w-[1440px] h-[1353px] absolute !m-[0] right-[-1px] bottom-[-329px]">
        <img
          className="absolute top-[278.8px] left-[103.4px] w-[1219.5px] h-[1000.7px] object-contain"
          alt=""
          src="/vector.svg"
        />
        <img
          className="absolute top-[-99px] left-[-194px] w-[1290px] h-[1452px] object-contain z-[1]"
          alt=""
          src="/vector-1.svg"
        />
        <img
          className="absolute top-[652.7px] left-[832px] w-[784.7px] h-[496.5px] object-contain z-[2]"
          alt=""
          src="/vector-2.svg"
        />
        <img
          className="absolute top-[845px] left-[897px] w-[650.9px] h-[357.2px] object-contain z-[3]"
          alt=""
          src="/vector-3.svg"
        />
        <div className="absolute top-[855px] left-[1347px] w-[184px] h-[101px] z-[6]">
          <div className="absolute top-[0px] left-[calc(50%_-_90px)] rounded-2xl border-white border-[2.5px] border-solid box-border w-[75px] h-[27px]" />
          <div className="absolute top-[25px] left-[calc(50%_-_55px)] rounded-2xl border-white border-[2.5px] border-solid box-border w-[75px] h-[27px] z-[1]" />
          <div className="absolute top-[49px] left-[calc(50%_-_92px)] rounded-2xl border-gray-100 border-[2.5px] border-solid box-border w-[75px] h-[27px] z-[2]" />
          <div className="absolute top-[25px] left-[calc(50%_+_17px)] rounded-2xl border-white border-[2.5px] border-solid box-border w-[75px] h-[27px] z-[2]" />
          <div className="absolute top-[49px] left-[calc(50%_-_20px)] rounded-2xl border-white border-[2.5px] border-solid box-border w-[75px] h-[27px] z-[3]" />
          <div className="absolute top-[74px] left-[calc(50%_-_57px)] rounded-2xl border-gray-100 border-[2.5px] border-solid box-border w-[75px] h-[27px] z-[4]" />
        </div>
        <img
          className="absolute top-[445px] left-[1078px] w-28 h-28 overflow-hidden z-[6]"
          loading="lazy"
          alt=""
          src="/frame.svg"
        />
        <img
          className="absolute top-[188px] left-[390px] w-[34.9px] h-[37px] object-contain z-[6]"
          loading="lazy"
          alt=""
          src="/group@2x.png"
        />
        <img
          className="absolute top-[377px] left-[212px] w-[423px] h-9 z-[6]"
          alt=""
          src="/frame-1.svg"
        />
      </div>
      <header className="self-stretch flex flex-row items-start justify-between top-[0] z-[99] sticky max-w-full gap-5 text-left text-mid text-white font-manrope">
        <div className="w-[597px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border max-w-full">
          <div className="self-stretch flex-1 flex flex-row items-end justify-between max-w-full gap-5">
            <div className="self-stretch flex flex-row items-start justify-start">
              <img
                className="h-[38px] w-[46px] relative object-cover z-[6]"
                loading="lazy"
                alt=""
                src="/image-61@2x.png"
              />
              <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                <b className="relative text-transparent !bg-clip-text [background:linear-gradient(180deg,_#007dcf_32.29%,_#082c44)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[7]">
                  Vin Tech
                </b>
              </div>
            </div>
            <nav className="m-0 w-[343px] flex flex-col items-start justify-end pt-0 px-0 pb-1 box-border max-w-full mq1100:hidden mq450:w-0">
              <nav className="m-0 self-stretch flex flex-row items-start justify-start gap-6 text-left text-lg text-white font-plus-jakarta-sans mq450:hidden">
                <a className="[text-decoration:none] relative leading-[28px] capitalize font-extrabold text-tomato z-[6]">
                  home
                </a>
                <a className="[text-decoration:none] flex-1 relative leading-[28px] capitalize font-semibold text-[inherit] inline-block min-w-[81px] z-[6]">
                  about us
                </a>
                <a className="[text-decoration:none] relative leading-[28px] capitalize font-semibold text-[inherit] inline-block min-w-[62px] z-[6]">
                  pricing
                </a>
                <a className="[text-decoration:none] flex-1 relative leading-[28px] capitalize font-semibold text-[inherit] inline-block min-w-[78px] z-[6]">
                  features
                </a>
              </nav>
            </nav>
          </div>
        </div>
        <div className="w-[237px] flex flex-row items-start justify-start gap-[39px] text-lg font-plus-jakarta-sans">
          <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
            <a className="[text-decoration:none] relative leading-[28px] capitalize font-semibold text-[inherit] inline-block min-w-[68px] z-[6]">
              sign up
            </a>
          </div>
          <Button
            className="h-[51px] flex-1 shadow-[0px_10px_16px_-10px_rgba(255,_255,_255,_0.06)_inset,_0px_8px_8px_rgba(0,_31,_31,_0.06),_0px_4px_4px_rgba(0,_31,_31,_0.06),_0px_2px_2px_rgba(0,_31,_31,_0.06),_0px_0px_1px_rgba(0,_31,_31,_0.32),_0px_-2px_1px_rgba(0,_31,_31,_0.24)_inset,_0px_1px_1px_rgba(205,_250,_206,_0.08)_inset] z-[5]"
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
              height: 51,
            }}
          >
            Login
          </Button>
        </div>
      </header>
      <div className="w-[1121px] flex flex-row items-start justify-end py-0 px-[27px] box-border max-w-full">
        <div className="flex-1 flex flex-col items-end justify-start gap-8 max-w-full mq750:gap-4">
          <div className="self-stretch flex flex-col items-start justify-start gap-2.5">
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-[388px] mq750:pl-[97px] mq750:pr-[97px] mq750:box-border mq1100:pl-[194px] mq1100:pr-[194px] mq1100:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="flex-1 flex flex-row items-start justify-start pt-1 pb-[5px] pl-3 pr-[7px] relative z-[6]">
                <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-64xl bg-deeppink" />
                <div className="flex-1 relative leading-[20px] capitalize z-[1]">
                  Sales teams from good to great 👋
                </div>
              </div>
            </div>
            <h1 className="m-0 relative text-61xl tracking-[-0.02em] leading-[90px] capitalize font-extrabold font-inherit z-[7] mq750:text-21xl mq750:leading-[54px] mq450:text-5xl mq450:leading-[36px]">
              Everything your team needs to achieve their goals.
            </h1>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[21px] pr-5 box-border max-w-full text-xl">
            <div className="flex flex-col items-start justify-start gap-[29px] max-w-full">
              <div className="self-stretch relative leading-[30px] capitalize z-[6] mq450:text-base mq450:leading-[24px]">
                make online payments and keep track of all your transactions.
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[203px] pr-[204px] mq750:pl-[101px] mq750:pr-[102px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
                <Button
                  className="h-[51px] flex-1 shadow-[0px_10px_16px_-10px_rgba(255,_255,_255,_0.06)_inset,_0px_8px_8px_rgba(0,_31,_31,_0.06),_0px_4px_4px_rgba(0,_31,_31,_0.06),_0px_2px_2px_rgba(0,_31,_31,_0.06),_0px_0px_1px_rgba(0,_31,_31,_0.32),_0px_-2px_1px_rgba(0,_31,_31,_0.24)_inset,_0px_1px_1px_rgba(205,_250,_206,_0.08)_inset] z-[5]"
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
                    height: 51,
                  }}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Frame.propTypes = {
  className: PropTypes.string,
};

export default Frame;
