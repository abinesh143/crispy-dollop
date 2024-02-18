import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {

  const router = useRouter()

  const redirectWebsite = async (secretCode) => {
    try {
      const response = await fetch(`/api/applist/?code=${secretCode}`, );
      const data = await response.json();

      console.log(data)

      if (data && data["website"]) {
        window.location.replace(data["website"]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {

    if (router.query?.id) {
      redirectWebsite(router.query?.id);
    }
  }, [router]);

  return (
    <main>
      <div className="flex justify-center items-center h-screen">
        <div className="loader"></div>
      </div>
    </main>
  );
}

// http://localhost:3000/?id=bwluxv

// https://app.freeappmaker.pro/?id=bwluxv