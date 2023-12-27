"use client";

import Link from "next/link";
import { postPathBySlug, sanitizeExcerpt } from "lib/posts";

import Metadata from "components/Metadata";
import Container from "../Container";
import Image from "../Image";
import Button from "../Button";
import { PostCardProps, Post, PostMetaData } from "@/lib/definitions";

const PostCard = ({ post, options = {} }: PostCardProps) => {
  const {
    title,
    excerpt,
    slug,
    date,
    author,
    categories,
  }: // isSticky = false,
  Post = post;
  const { excludeMetadata = [] } = options;

  const metadata: PostMetaData = {};

  if (!excludeMetadata.includes("author")) {
    metadata.author = author;
  }

  if (!excludeMetadata.includes("date")) {
    metadata.date = date;
  }

  if (!excludeMetadata.includes("categories")) {
    metadata.categories = categories;
  }

  return (
    <div className="h-[250px] md:h-[230px] lg:h-[280px] w-[300px] md:w-[720px] lg:w-[920px] flex flex-col md:flex-row gap-[10px] md:gap-[45px]">
      <Image
        width={500}
        height={700}
        alt="blog post depiction"
        className="hidden md:block w-[50%] h-full object-cover rounded-[20px] overflow-hidden"
        src="https://coza.org.ng/wp-content/uploads/2021/06/Webp.net-compress-image-36-1536x1024.jpg"
      />

      <Container className="w-full md:w-[50%] h-full md:h-full flex flex-col justify-start md:justify-end items-start gap-[20px] py-[20px]">
        <Container fluid className="w-full">
          <h2 className="text-[27px] font-bold tracking-tighter text-orange-800">
            {title}
          </h2>
          <div className="w-[70px] h-[1px] bg-orange-default"></div>
          <Metadata
            date={metadata.date}
            author={metadata.author}
            categories={metadata.categories}
          />
        </Container>

        {excerpt && (
          <div
            className="text-[15px] min-h-[30%] max-h-[50%] md:min-h-[50%] w-[100%]"
            dangerouslySetInnerHTML={{
              __html: sanitizeExcerpt(excerpt),
            }}
          />
        )}

        <Link href={postPathBySlug(slug)}>
          <Button className="h-[30px] w-[150px]" text="Read More" />
        </Link>
      </Container>
    </div>
  );
};

export default PostCard;
