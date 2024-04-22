import getPostById from "@/actions/get-post-by-id";
import PostCard from "@/components/post-card";

export default async function Post({ params }: { params: { id: string } }) {
  const post = await getPostById(params.id);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      {post ? (
        <PostCard post={post} />
      ) : (
        <p>We&apos;re sorry, we cannot display this post at this time.</p>
      )}
    </main>
  );
}
