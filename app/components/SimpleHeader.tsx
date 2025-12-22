import Image from "next/image";
import logo from "@/public/LogoV2.svg";
import Link from "next/link";

const SimpleHeader = () => {
  return (
    <section className="mx-auto max-w-[1512px] px-[16px] md:px-[24px] lg:px-[86px] xl:px-[126px] pt-4 lg:pt-10">
      <div className="flex flex-col items-center justify-center gap-4 py-[21px]">
        {/* Mobile: Logo centriran, Go back ispod */}
        <div className="flex flex-col items-center gap-4 w-full md:hidden">
          <Link href="/">
            <Image
              src={logo}
              alt="HumanBacked logo"
              width={206}
              height={30}
              className="md:w-[330px] md:h-[44px] xl:h-[27px] xl:w-[257px]"
            />
          </Link>
          <Link
            href="/"
            className="flex items-center gap-[8px] hover:opacity-80 hover:-translate-x-1 transition-all duration-200 ease-in-out"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#1d1d1b]"
            >
              <path
                d="M4 10H16M4 10L8 6M4 10L8 14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-medium text-[16px] leading-[24px] text-[#1d1d1b]">Go back</span>
          </Link>
        </div>

        {/* Desktop: Grid layout sa Go back lijevo, logo centriran */}
        <div className="hidden md:grid md:grid-cols-3 md:justify-items-center w-full">
          <div className="justify-self-start">
            <Link
              href="/"
              className="flex items-center gap-[8px] hover:opacity-80 hover:-translate-x-1 transition-all duration-200 ease-in-out"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#1d1d1b]"
              >
                <path
                  d="M4 10H16M4 10L8 6M4 10L8 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-medium text-[16px] leading-[28px] text-[#1d1d1b]">Go back</span>
            </Link>
          </div>

          <div className="justify-self-center">
            <Link href="/">
              <Image
                src={logo}
                alt="HumanBacked logo"
                width={206}
                height={30}
                className="md:w-[330px] md:h-[44px] xl:h-[27px] xl:w-[257px]"
              />
            </Link>
          </div>

          {/* Empty div for grid balance */}
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default SimpleHeader;
