const Input = () => {
  return (
    <div className="max-w-[600px] w-full px-[24px] flex items-center gap-[10px] py-[11px] rounded-full border border-[#C7C7C6] bg-white transition-colors focus-within:border-[#0c3ddf]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="18"
        viewBox="0 0 22 18"
        fill="none"
      >
        <path
          d="M20.7001 3.69995L11.7301 9.39995C11.4214 9.59338 11.0644 9.69596 10.7001 9.69596C10.3358 9.69596 9.97883 9.59338 9.6701 9.39995L0.700104 3.69995M2.7001 0.699951H18.7001C19.8047 0.699951 20.7001 1.59538 20.7001 2.69995V14.7C20.7001 15.8045 19.8047 16.7 18.7001 16.7H2.7001C1.59553 16.7 0.700104 15.8045 0.700104 14.7V2.69995C0.700104 1.59538 1.59553 0.699951 2.7001 0.699951Z"
          stroke="#1D1D1B"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <input
        type="text"
        placeholder="Enter your email"
        className="w-full font-poppins outline-none h-full text-[#7B7B78] placeholder:text-[#7B7B78]/40 placeholder:text-[17px] leading-[26px] font-medium"
      />
    </div>
  );
};

export default Input;
