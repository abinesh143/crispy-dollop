"use server";

import { redirect } from "next/navigation";

export async function createPost(secretCode) {
  try {
    const response = await fetch(
      `https://app.freeappmaker.pro/api/applist?code=${secretCode}`,
      {
        method: "GET",
      }
    );
    const list = await response.json();
    return list;
  } catch (error) {
    console.error(error);
    return {};
  }
}

export default async function Profile({ searchParams }) {
  const secretCode = searchParams["id"];

  if (secretCode) {
    const data = await createPost(secretCode);
    if (data && data["website"]) {
      redirect(data["website"]);
    }
  }

  return (
    <main>
      <div className="flex justify-center items-center h-screen">
        <div className="loader"></div>
      </div>
    </main>
  );
}

// http://localhost:3000/?id=bwluxv

// http://localhost:3000/api/applist?code=${secretCode}

// https://app.freeappmaker.pro/?id=bwluxv

// https://app.freeappmaker.pro/api/applist?code=${secretCode}
