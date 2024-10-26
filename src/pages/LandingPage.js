import Frame from "../components/Frame";
import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent5 from "../components/FrameComponent5";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="w-full relative [background:linear-gradient(180deg,_#fbf7f2_83.53%,_#fff)] overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[206px] box-border gap-[125px] leading-[normal] tracking-[normal] mq750:gap-[62px] mq450:gap-[31px]">
      <Frame />
      <main className="self-stretch flex flex-col items-start justify-start pt-0 pb-[67.1px] pl-[67px] pr-[7px] box-border gap-[41.9px] max-w-full mq750:gap-[21px] mq750:pl-[33px] mq750:box-border mq1275:pb-5 mq1275:box-border">
        <FrameComponent />
        <FrameComponent1 />
        <FrameComponent2 />
        <FrameComponent3 />
        <FrameComponent4 />
        <FrameComponent5 />
        <img
          className="ml-[-74px] w-[1440px] relative max-h-full max-w-[106%]"
          alt=""
          src="/sectionmaskgroup.svg"
        />
      </main>
      <img
        className="w-[119.4px] h-[132.9px] absolute !m-[0] top-[709px] left-[-27.9px] object-contain z-[6]"
        alt=""
        src="/frame-2@2x.png"
      />
      <img
        className="w-[182px] h-[101px] absolute !m-[0] top-[191px] left-[-91px] object-contain z-[6]"
        alt=""
        src="/group-1@2x.png"
      />
      <img
        className="w-[1034px] h-[444px] absolute !m-[0] top-[619px] left-[202px] rounded-[23px] object-cover z-[6] block mq450:hidden"
        alt=""
        src="/placeholder@2x.png"
      />
      <Footer />
    </div>
  );
};

export default LandingPage;
