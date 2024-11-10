import Image from "next/image";
import Header from "./components/Header";
import Button from "./components/Button";
import Dashboard from "./components/Dashboard";

export default function Home() {
  return (
    <div className="font-inter ">
      <div className="section1 w-full bg-[#CFA6A61C] ">
        <Header />
        <div className="heroSection max-w-5xl  lg:m-[156px_179px_0px_231px] m-[60px_20px_0px_20px] sm:m-[156px_50px_0px_40px] 2xl:mx-auto pb-[111px] flex lg:flex-row flex-col lg:justify-between justify-center lg:items-center lg:gap-5 xl:gap-28 2xl:gap-52 ">
          <div className="basis-[80%]">
            <h1 className=" font-heebo font-black text-[36px] leading-10 xl:text-[48px] xl:leading-[61px] mb-[2px] 2xl:tracking-[2px] text-[#21243D]">
              Hi, I am John, <br />
              Creative Technologist
            </h1>
            <p className="  text-[16px] leading-[23.5px] font-heebo mt-[29px] mb-[36px]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
            <Button />
          </div>
          <Image
            src="/images/hero-image.png"
            alt="hero-image"
            width={298}
            height={308}
            className="min-w-[298px] min-h-[308px] mt-8 "
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="w-full  bg-[#F4E2E2]  pb-[68px]">
        <div className="max-w-5xl lg:m-[0px_195px_0px_237px] m-[0px_20px_0px_20px] sm:m-[0px_50px_0px_40px]   pt-[28px] 2xl:mx-auto ">
        <div className="  flex justify-between mb-[21px] ">
          <h1 className="text-[22px] leading-[32.3px] font-heebo font-medium">Recent Posts</h1>
          <p className="text-[#F98585] text-[22px] leading-[32.3px] font-heebo font-medium">View All</p>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
        <div className="bg-white xl:p-[38px_57px_32px_35px] p-3 sm:p-[38px_57px_32px_35px] lg:p-[35px_45px_28px_30px]   ">
                <h1 className="font-heebo lg:max-w-[383.56px] xl:h-[107.53px] font-bold text-[20px] xl:text-[26px] leading-[38px] tracking-[0.05em]">Making a design system from scratch</h1>
                <p className= "font-heebo  text-[14px] xl:text-[18px] leading-[38px] tracking-[0.05em] mb-[24px] lg:max-w-[301.28px] lg:h-[41.12px] text-[#000000B2] ">12 Feb 2020&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;Design , Pattern </p>
                <p className="lg:max-w-[391px] lg:h-[129.7px] text-[14px] xl:text-[16px] font-heebo leading-[23.5px] text-[#21243D]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
            <div className="bg-white xl:p-[38px_57px_32px_35px]  p-3 sm:p-[38px_57px_32px_35px] lg:p-[35px_45px_28px_30px]   ">
                <h1 className="font-heebo lg:max-w-[383.56px] xl:h-[107.53px] font-bold text-[20px] xl:text-[26px] leading-[38px] tracking-[0.05em]">Making a design system from scratch</h1>
                <p className= "font-heebo  text-[14px] xl:text-[18px] leading-[38px] tracking-[0.05em] mb-[24px] lg:max-w-[301.28px] lg:h-[41.12px] text-[#000000B2] ">12 Feb 2020&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;Design , Pattern </p>
                <p className="lg:max-w-[391px] lg:h-[129.7px] text-[14px] xl:text-[16px] font-heebo leading-[23.5px] text-[#21243D]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
        </div>
        </div>
        
      </div>

      {/* section 3 */}

      <div className="bg-[#CFA6A61C] ">
        <div className="max-w-[919px] lg:m-[0px_284px_0px_237px] m-[0px_20px_0px_20px] sm:m-[0px_50px_0px_40px] pt-[30px] lg:pt-[79px] pb-[58.8px] 2xl:mx-auto">
        <h1 className="w-[153px] h-[32px] font-heebo text-[22px] leading-[32.31px] mb-[32px] font-medium">Featured works</h1>
        <div className="grid xl:grid-cols-[30%_auto] grid-cols-1 gap-[29.54px] place-items-start">
  <Image src="/images/img1.png" alt="hero-image" width={248} height={180} className="" />
  <Dashboard />
</div>

<div className="grid xl:grid-cols-[30%_auto] grid-cols-1 gap-[29.54px] place-items-start mt-[50px] md:mt-[111px]">
  <Image src="/images/img2.png" alt="hero-image" width={248} height={180} className="" />
  <Dashboard />
</div>

        </div>

      </div>

    </div>
  );
}
