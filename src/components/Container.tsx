import { PropsWithChildren } from "react";
import cx from "classnames";

type Props = PropsWithChildren<{
  className?: string;
  fluid?: boolean;
}>;

export default function Container({ children, className, fluid }: Props) {
  return (
    <div
      className={cx(
        {
          "container px-5 lg:px-8": !fluid,
        },
        `mx-auto ${className}`
      )}
    >
      {children}
    </div>
  );
}
