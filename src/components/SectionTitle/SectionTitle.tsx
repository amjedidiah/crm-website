import { ReactNode } from "react";

const SectionTitle = ({
  children,
  className,
}: {
  children: ReactNode;
  className: String;
}) => {
  return (
    <h2 className={`md:leading-9 font-medium text-center ${className}`}>
      {children}
    </h2>
  );
};

export default SectionTitle;
