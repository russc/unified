"use client";
import { timeDifference } from "@/lib/helpers";
import clsx from "clsx";
import Image from "next/image";
import type { IPost } from "@/types";

interface PostCardProps {
  post: IPost;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="h-full w-full space-y-6 group p-6 sm:p-8 rounded-3xl bg-white border border-gray-200/50 group-hover:border-indigo-300 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
      {post.is_reported && (
        <span className="italic">This post has been reported</span>
      )}
      <div className="flex gap-4 items-center">
        {post.author?.profile_pic && (
          <Image
            src={post.author.profile_pic.uri}
            alt={`profile image of user ${post.author.display_name}`}
            width={60}
            height={60}
            className="rounded-full w-[60px] h-[60px]"
          />
        )}
        <div>
          <p>{post.author?.display_name}</p>
          {post.created_at && (
            <p className="text-xs">{timeDifference(post.created_at)}</p>
          )}
        </div>
      </div>
      {post.title && post.title.length > 1 && (
        <h1 className="text-2xl font-bold text-gray-700 dark:text-white">
          {post.title}
        </h1>
      )}
      <div className="mt-2 flex gap-4">
        <h2 className="text-xl text-gray-600 dark:text-gray-300">
          {post.description}
        </h2>
      </div>

      {post.attachments.length > 0 && (
        <div className="">
          {post.attachments.map((item: any) => {
            switch (item.resource_type) {
              case "asset":
                return (
                  <div key={item.id} className="h-64 relative m-4">
                    <Image
                      src={item.uri}
                      alt={`image of user ${post.author.display_name}`}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="rounded-s"
                    />
                  </div>
                );
              case "action":
                return (
                  <div key={item.id} className="m-4">
                    <h3 className="text-xl text-gray-600 dark:text-gray-300">
                      Action: {item.title}
                    </h3>

                    <p>{item.description}</p>
                  </div>
                );

              default:
                return (
                  <div key={item.id} className="m-4">
                    <p>{item.resource_type}</p>
                  </div>
                );
            }
          })}
        </div>
      )}
      <div className="flex justify-between">
        <span
          className={clsx(
            "block text-center text-gray-500 dark:text-gray-400",
            post.liked && "bg-red-300"
          )}
        >
          likes {post.likes}
        </span>
        <span
          className={clsx(
            "block text-center text-gray-500 dark:text-gray-400",
            post.liked && "bg-red-300"
          )}
        >
          action completers {post.action_completors}
        </span>
      </div>
    </div>
  );
}
