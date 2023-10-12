import Link from "next/link";

type Props = {
  className?: string;
  breadcrumbs: {
    id: string;
    title: string;
    uri?: string;
  }[];
};

export default function Breadcrumbs({ className, breadcrumbs }: Props) {
  return (
    <ul className={`flex list-none pl-0 mt-0 mx-0 mb-8 ${className}`}>
      {breadcrumbs.map(({ id, title, uri }) => {
        return (
          <li
            className="mr-2 after:content-['/'] after:ml-2 last:after:content-none"
            key={id}
          >
            {!uri && title}
            {uri && <Link href={uri}>{title}</Link>}
          </li>
        );
      })}
    </ul>
  );
}
