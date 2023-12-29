import NextImage from "next/image";
import ClassName from "models/classname";
import React from "react";
import styles from "./Image.module.scss";

type ImageProps = {
  children?: React.ReactNode;
  className: string;
  width?: number;
  height?: number;
  src: string;
  alt: string;
  // srcSet?: string;
  sizes?: string | undefined;
  dangerouslySetInnerHTML?: string | TrustedHTML;
};

const Image = ({
  children,
  className,
  width,
  height,
  src,
  alt,
  // srcSet,
  sizes,
  dangerouslySetInnerHTML,
}: ImageProps) => {
  const imageClassName = new ClassName(styles.image);

  imageClassName.addIf(className, className);

  return (
    <figure className={imageClassName.toString()}>
      <div className={styles.featuredImageImg}>
        <NextImage
          width={width}
          height={height}
          src={src}
          alt={alt || ""}
          // srcSet={srcSet}
          sizes={sizes}
        />
      </div>
      {children && <figcaption>{children}</figcaption>}
      {dangerouslySetInnerHTML && (
        <figcaption
          dangerouslySetInnerHTML={{
            __html: dangerouslySetInnerHTML,
          }}
        />
      )}
    </figure>
  );
};

export default Image;
