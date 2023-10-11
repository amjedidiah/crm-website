import ClassName from "models/classname";

import styles from "./Title.module.scss";
import NextImage from "next/image";

const Title = ({ className, title, thumbnail }) => {
  const titleClassName = new ClassName(styles.title);

  titleClassName.addIf(className, className);

  return (
    <div className={titleClassName.toString()}>
      {thumbnail && (
        <NextImage
          width={25}
          height={25}
          src={thumbnail.url}
          alt=""
          aria-hidden="true"
        />
      )}
      <span>{title}</span>
    </div>
  );
};

export default Title;
