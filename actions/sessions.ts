"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function createSession(email: string, accessToken: string) {
  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

  const session = JSON.stringify({
    email,
    accessToken,
    apiPath: process.env.API_PATH,
  });

  cookies().set({
    name: "session",
    value: session,
    httpOnly: true,
    secure: true,
    expires,
    path: "/",
  });

  redirect("/");
}

export async function deleteSession() {
  cookies().delete("session");
  redirect("/login");
}

export async function getSession() {
  const session = cookies().get("session");

  if (!session || session.value.length === 0) {
    redirect("/login");
  }

  return JSON.parse(session.value);
}
