type NavButtonProps = {
  className: string;
  children?: React.ReactNode;
  onClick: any;
};

export default function SliderNavButton({
  children,
  className,
  onClick,
}: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${className} top-0 z-[1] px-[20px] h-full absolute hover:bg-slate-500/30 ease-in duration-[.2s] sm:hidden md:hidden group-hover:block`}
    >
      {children && children}
    </button>
  );
}
