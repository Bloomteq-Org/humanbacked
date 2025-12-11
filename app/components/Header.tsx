import Image from "next/image";
import logo from "@/public/logo.svg";
import Countdown from "./Countdown";

const Header = () => {
  return (
    <div className="mx-auto max-w-[1064px] px-[16px] md:px-[24px] lg:px-[126px]">
      <div className="flex flex-col items-center justify-center gap-4 py-[21px]">
        <Image src={logo} alt="logo" width={206} height={30} />
        <Countdown targetDate={new Date("2025-12-11T23:59:59Z")} />
      </div>
    </div>
  );
};

export default Header;

