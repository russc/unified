import { getSession } from "@/actions/sessions";

export default async function getPostById(id: string) {
  const session = await getSession();

  try {
    const res = await (
      await fetch(`${session.apiPath}/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      })
    ).json();

    return res;
  } catch (e) {
    console.log(e);
    throw new Error(`An error ocurred: ${e}`);
  }
}
