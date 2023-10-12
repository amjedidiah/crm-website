import Link from "next/link";

export type ListItem = {
  id: string;
  path?: string;
  children: ListItem[];
  target?: string;
  title: string;
  label: string;
};

export type Props = {
  className?: string;
  item: ListItem;
};

const NavListItem = ({ className, item }: Props) => {
  return (
    <li key={item.id} className={className}>
      {/* 
        Before rendering the Link component, we first check if `item.path` exists
        and if it does not include 'http'. This prevents a TypeError when `item.path` is null.
      */}
      {item.path && !item.path.includes("http") && !item.target && (
        <Link href={item.path} title={item.title}>
          {item.label}
        </Link>
      )}
      {/* 
        Before rendering the `a` tag, we first check if `item.path` exists
        and if it includes 'http'. This prevents a TypeError when `item.path` is null.
      */}
      {item.path && item.path.includes("http") && (
        <a href={item.path} title={item.title} target={item.target}>
          {item.label}
        </a>
      )}
    </li>
  );
};

export default NavListItem;
