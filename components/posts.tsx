"use client";
import Link from "next/link";
import { memo } from "react";
import PostCard from "./post-card";
import type { IPost } from "@/types";

interface PostsProps {
  posts: IPost[];
  page: number;
}

const Posts = memo(function Posts({ posts, page }: PostsProps) {
  return posts.length > 1 ? (
    <div data-pagination={page} className="flex flex-col gap-12 mb-12">
      {posts.map((post: any) => {
        return (
          <Link
            href={`/post/${post.id}`}
            key={post.id}
            className="w-full group"
          >
            <PostCard key={post.id} post={post} />
          </Link>
        );
      })}
    </div>
  ) : (
    <p>There are no posts at this time. Please check back later.</p>
  );
});

export default Posts;
