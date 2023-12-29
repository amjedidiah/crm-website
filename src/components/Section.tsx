import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  className?: string;
}> &
  JSX.IntrinsicElements["section"];

export default function Section({ children, className, ...rest }: Props) {
  return (
    <section className={`py-8 ${className}`} {...rest}>
      {children}
    </section>
  );
}
