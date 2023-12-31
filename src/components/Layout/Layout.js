import { useRouter } from "next/router";
import { Helmet } from "react-helmet";

import useSite from "hooks/use-site";
import { helmetSettingsFromMetadata } from "lib/site";

import Nav from "components/Nav";
import Main from "components/Main";
import Footer from "components/Footer";
import { Fragment } from "react";

const Layout = ({ children }) => {
  const { asPath } = useRouter();
  const { homepage, metadata = {} } = useSite();

  if (!metadata.og) metadata.og = {};
  metadata.og.url = `${homepage}${asPath}`;

  const helmetSettings = {
    defaultTitle: metadata.title,
    titleTemplate:
      process.env.WORDPRESS_PLUGIN_SEO === true
        ? "%s"
        : `%s - ${metadata.title}`,
    ...helmetSettingsFromMetadata(metadata, {
      setTitle: false,
      link: [
        {
          rel: "alternate",
          type: "application/rss+xml",
          href: "/feed.xml",
        },

        // Favicon sizes and manifest generated via https://favicon.io/

        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "manifest",
          href: "/site.webmanifest",
        },
      ],
    }),
  };

  return (
    <Fragment>
      <Helmet {...helmetSettings} />
      <Nav />

      <Main>{children}</Main>

      <Footer />
    </Fragment>
  );
};

export default Layout;
