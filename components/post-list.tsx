"use client";
import getPosts from "@/actions/get-posts";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Posts from "./posts";
import type { IPost } from "@/types";

interface PostListProps {
  data: { posts: IPost[]; pagination: { next_cursor: string } };
}

export default function PostList({ data }: PostListProps) {
  const [postList, setPostList] = useState<any[]>([data]);
  const [cursor, setCursor] = useState<string>(data?.pagination?.next_cursor);
  const [paginationMsg, setPaginationMsg] = useState<string>(
    "Loading More Posts..."
  );

  const loadMorePosts = async () => {
    const more = await getPosts(cursor);

    if (more.error_code) {
      return setPaginationMsg("You are up to date on all posts!");
    }

    setPostList((prev) => [...prev, more]);
    setCursor(more?.pagination?.next_cursor);
  };

  const { ref } = useInView({
    threshold: 0.2,
    onChange: loadMorePosts,
  });

  return (
    <div className="w-full">
      {postList.map((list: any, index: number) => {
        return (
          <Posts
            posts={list.posts}
            key={list.pagination.next_cursor}
            page={index}
          />
        );
      })}
      <div ref={ref} className="flex justify-center">
        <p className="italic text-gray-400">{paginationMsg}</p>
      </div>
    </div>
  );
}
