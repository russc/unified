import getPosts from "@/actions/get-posts";
import PostList from "@/components/post-list";

export default async function Home() {
  const data = await getPosts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 gap-12">
      <PostList data={data} />
    </main>
  );
}
