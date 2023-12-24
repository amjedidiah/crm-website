import Link from "next/link";
import Container from "@/components/Container";
import useSite from "hooks/use-site";
import { findMenuByLocation } from "lib/menus";
import NavListItem, { ListItem } from "@/components/NavListItem";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const socialmedialinks = [
  {
    name: "instagram",
    Icon: FaInstagram,
    href: "https://www.instagram.com/crmhqworld/",
  },
  {
    name: "youtube",
    Icon: FaYoutube,
    href: "https://www.youtube.com/@charismaticrenewalministries/",
  },
  {
    name: "facebook",
    Icon: FaFacebook,
    href: "https://www.facebook.com/charismaticrenewalministries",
  },
];

const Nav = () => {
  const { menus } = useSite();
  const navigation = findMenuByLocation(
    menus,
    process.env.WORDPRESS_MENU_LOCATION_NAVIGATION
  );

  return (
    <header className="fixed w-full bg-orange-default z-[2]">
      <Container className="lg:container" fluid>
        <nav className="w-full flex flex-col lg:flex-row items-center justify-between pt-3 px-3 lg:p-3 gap-1">
          <Link href="/">
            <Image
              src="/images/logo-text-white.png"
              alt="logo"
              width={145}
              height={35}
            />
          </Link>
          <ul className="max-w-full overflow-x-scroll lg:scrollbar lg:overflow-hidden no-scrollbar inline-flex items-center gap-x-5 list-none p-0 m-0 [&_li]:z-[1] [&_li]:min-w-fit [&_li_ul]:shadow-lg [&_li_ul]:hidden [&_li:hover_ul]:flex [&_li_a]:block [&_li_a]:text-lg [&_li_a]:no-underline [&_li_a]:text-slate-300 [&_li_a]:py-2 [&_li:hover>a]:text-white-default">
            {navigation?.map((listItem: ListItem) => {
              return <NavListItem key={listItem.id} item={listItem} />;
            })}
          </ul>
          <ul className="hidden lg:inline-flex list-none items-center gap-x-5">
            {socialmedialinks.map(({ name, href, Icon }) => (
              <li key={name}>
                <a
                  href={href}
                  className="[&_svg_path]:fill-white-default [&_svg]:scale-[1.35]"
                >
                  <span className="hidden">{name}</span>
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Nav;
