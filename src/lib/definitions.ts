export interface Avatar {
  url: string;
}

export interface Author {
  name: string;
  avatar: Avatar;
}

interface Options {
  excludeMetadata?: string[];
}

export interface PostMetaData {
  className?: string;
  author?: Author;
  date?: string;
  categories?: string[];
  options?: Options;
}

export interface Post {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  author: Author;
  categories: string[];
  isSticky?: boolean;
}

export interface PostCardProps {
  post: Post;
  options?: Options;
}
