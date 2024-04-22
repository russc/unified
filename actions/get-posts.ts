import { getSession } from "@/actions/sessions";

export default async function getPosts(cursor: string | null = null) {
  const session = await getSession();
  let url = `${session.apiPath}/feed?limit=10`;

  if (cursor) {
    url += `&cursor=${cursor}`;
  }

  try {
    const res = await (
      await fetch(url, {
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
