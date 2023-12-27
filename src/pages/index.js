import useSite from "hooks/use-site";
import { getPaginatedPosts } from "lib/posts";
import { WebsiteJsonLd } from "lib/json-ld";

import Layout from "components/Layout";
import Header from "components/Header";
import Section from "components/Section";
import Container from "components/Container";
import PostCard from "components/PostCard";
// import Pagination from "components/Pagination";
import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { MdOutlineScreenshotMonitor } from "react-icons/md";
import Slider from "@/components/Slider";

// import styles from "styles/pages/Home.module.scss";

export default function Home({ posts, pagination }) {
  const {
    metadata: { title, description },
  } = useSite();

  return (
    <Layout>
      <WebsiteJsonLd siteTitle={title} />
      <Header>
        <Container
          fluid
          className="mt-25 selection:text-5xl min-h-screen min-w-screen relative flex justify-center items-end"
        >
          <Image
            src={
              "https://images.unsplash.com/photo-1600038734220-7e3c079bf982?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="bible with its pages flipping"
            width={1024}
            height={500}
            className="object-cover w-full h-full absolute"
          />

          <div className="h-full w-full bg-gradient-to-t from-black to-transparent absolute"></div>

          <Container
            className="mb-14 md:mb-28 flex flex-col items-center gap-10 md:gap-0 z-[1]"
            fluid
          >
            <SectionTitle className="mb5 text-slate-50">
              LATEST SERMON
            </SectionTitle>
            <p className="md:mb-20 text-slate-50 text-4xl font-semibold md:font-medium text-center font-poppins">
              {description.length > 0
                ? description
                : "The Supernatural Principal of Change"}
            </p>
            <a
              href="https://www.youtube.com/c/CRMtv/videos?app=desktop&view=0&sort=dd&shelf_id=1"
              className="h-fit w-fit"
            >
              <Button text="WATCH SERMON" className="w-56 h-14">
                <MdOutlineScreenshotMonitor size="20px" />
              </Button>
            </a>
          </Container>
        </Container>
      </Header>

      <Section
        className="bg-black my-0 h-[400px]"
        aria-label="church mission section"
      >
        <Container
          fluid
          className={"flex flex-col justify-center items-center"}
        >
          <SectionTitle className="mb5 text-slate-50">WELCOME TO</SectionTitle>

          <p className="md:mb-[30px] text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-default text-3xl md:text-5xl font-semibold md:font-medium text-center font-poppins leading-12 md:leading-none">
            {title}
          </p>

          <p className="text-2xl md:text-3xl text-center text-slate-100 font-poppins w-11/12 md:w-3/5 mt-5 md:mt-0">
            We are a revival-driven group of Christians with a God-given mandate
            to prepare men for the great harvest. Come and experience the
            Charismatic Power.
          </p>
        </Container>
      </Section>

      <Section
        aria-label="Dr Cosmas Ilechukwu about section"
        className="flex flex-col md:flex-row h-[150vh] md:h-screen gap-5 md:pr-5"
      >
        <Container
          className="flex-1 h-full w-full relative rounded md:rounded-3xl overflow-hidden"
          fluid
        >
          <Image
            alt="Dr Cosmas Ilechukwu"
            src="https://media.istockphoto.com/id/1323166406/photo/portrait-of-african-man-saying-yes-by-shaking-head.jpg?s=612x612&w=0&k=20&c=02u4GcR6C8THPHzdVg8MgHoEexl5ciuQ4TnyWpSQ9ms="
            width={400}
            height={400}
            className="w-full h-full object-cover absolute"
          />
        </Container>
        <Container
          className="flex-1 h-full w-full md:w-1/2 rounded md:rounded-3xl flex flex-col justify-start gap-[40px] md:shadow-xl shadow-stone-800 p-[10px] md:p-17 lg:p-24 box-border"
          fluid
        >
          <div className="flex flex-col items-center md:items-start md:justify-end mx-0 w-full md:w-fit gap-0">
            <SectionTitle className="text-2xl md:text-3xl text-left w-fit text-stone-800">
              Dr. Cosmas Ilechukwu
            </SectionTitle>
            <h3 className="text-xl md:text-2xl">General Overseer</h3>
          </div>

          <p className="text-center text-stone-600 md:text-left">
            Dr. Cosmas was born to the family of Late Chief P.J.O. Ilechukwu of
            Olie-Uru,Umudim Nnewi in Anambra State, on the 27th September
            1954.He is the first in the family of 10 children.He attended both
            his primary and secondary Schools at Nnewi. Before gaining admission
            into university, he served as an auxiliary teacher with National
            Secondary School, Nnewi where he taught Mathematics, Chemistry and
            Biology in 1976-1977 academic session.
          </p>

          <Link href="/">
            <Button
              text="LEARN MORE"
              className="h-12 w-44 mx-auto md:mx-0 font-semibold"
            />
          </Link>
        </Container>
      </Section>

      <Section
        aria-label="Upcoming events slider section"
        className="my-0 bg-gradient-to-b from-blue-default to-red-600 h-[700px] flex flex-col items-center"
      >
        <SectionTitle className="font-bold text-[20px] md:text-[30px] text-center text-slate-50">
          UPCOMING EVENTS
        </SectionTitle>

        <Slider />

        <Link href="/">
          <Button text="VIEW ALL EVENTS" className="h-14 w-[200px] mt-[60px]" />
        </Link>
      </Section>

      <Section
        aria-label="Pay us a visit button section"
        className="relative flex flex-col justify-center items-center h-[400px] gap-[15px] md:gap-[20px] my-0"
      >
        <SectionTitle className="font-semibold text-[18px] md:text-[20px] text-center z-[1] text-slate-50">
          SUNDAY MORNING SERVICE STARTS AT 9:30AM
        </SectionTitle>

        <p className="text-3xl md:text-5xl text-center text-slate-200 z-[1]">
          We’d love for You to join us!
        </p>

        <Button text="PAY US A VISIT" className="w-[200px] h-14 z-[1]" />

        <Image
          src="https://plus.unsplash.com/premium_photo-1669829638390-c987d157e160?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFuc2NhcGUlMjBza3l8ZW58MHx8MHx8fDA%3D"
          alt="sun, grass, mountains and stuff"
          width={1024}
          height={300}
          className="w-full h-full object-cover absolute brightness-[50%]"
        />
      </Section>

      <Section
        aria-label="Blog posts section"
        className="md:mb-[40px] min-h-fit max-h-fit"
      >
        <Container className="min-h-fit max-h-fit">
          <SectionTitle className="mb-[50px] font-bold text-[20px] md:text-[30px] text-center">
            BLOG POSTS
          </SectionTitle>

          <ul className="list-none pl-0 my-[-1rem] w-full flex flex-col items-center justify-start md:gap-[30px] min-h-fit max-h-fit">
            {posts.map((post) => {
              return (
                <li
                  key={post.slug}
                  className="my-[1em] mx-0 first:mt-0 last:mb-0"
                >
                  <PostCard post={post} />
                </li>
              );
            })}
          </ul>
          {/* {pagination && (
            <Pagination
              addCanonical={false}
              currentPage={pagination?.currentPage}
              pagesCount={pagination?.pagesCount}
              basePath={pagination?.basePath}
            />
          )} */}
        </Container>
      </Section>
    </Layout>
  );
}

export async function getStaticProps() {
  const { posts, pagination } = await getPaginatedPosts({
    queryIncludes: "archive",
  });
  return {
    props: {
      posts,
      pagination: {
        ...pagination,
        basePath: "/posts",
      },
    },
  };
}
