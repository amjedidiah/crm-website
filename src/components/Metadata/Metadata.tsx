import Link from "next/link";

// import { categoryPathBySlug } from "lib/categories";
import { authorPathByName } from "lib/users";
import { formatDate } from "lib/datetime";
import ClassName from "models/classname";
import styles from "./Metadata.module.scss";
import NextImage from "next/image";
import { PostMetaData } from "@/lib/definitions";

const DEFAULT_METADATA_OPTIONS = {
  compactCategories: true,
};

const Metadata = ({
  className,
  author,
  date,
  categories,
}: //options = DEFAULT_METADATA_OPTIONS,
//isSticky = false,
PostMetaData) => {
  const metadataClassName = new ClassName(styles.metadata);

  metadataClassName.addIf(className, className);

  // const { compactCategories } = options;

  return (
    <ul className="flex flex-col md:flex-row gap-[10px] justify-between text-sm mt-[5px] mr-[10px]">
      {author && (
        <li>
          <address className="flex gap-[5px]">
            {author.avatar && (
              <NextImage
                width={25}
                height={25}
                src={author.avatar.url}
                alt="Author Avatar"
                className="rounded-[50%]"
              />
            )}
            By{" "}
            <Link href={authorPathByName(author.name)} rel="author">
              {author.name}
            </Link>
          </address>
        </li>
      )}
      {date && (
        <li>
          <time dateTime={date}>{formatDate(date)}</time>
        </li>
      )}
      {/* {Array.isArray(categories) && categories[0] && (
        <li className={styles.metadataCategories}>
          {compactCategories && (
            <p title={categories.map(({ name }) => name).join(", ")}>
              <Link href={categoryPathBySlug(categories[0].slug)}>
                {categories[0].name}
              </Link>
              {categories.length > 1 && " and more"}
            </p>
          )}
          {!compactCategories && (
            <ul>
              {categories.map((category) => {
                return (
                  <li key={category.slug}>
                    <Link href={categoryPathBySlug(category.slug)}>
                      {category.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </li>
      )} */}
      {/* {isSticky && (
        <li className={styles.metadataSticky}>
          <FaMapPin aria-label="Sticky Post" />
        </li>
      )} */}
    </ul>
  );
};

export default Metadata;
