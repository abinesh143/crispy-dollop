import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Loading() {
  const params = useSearchParams();

  const redirectWebsite = async (secretCode) => {
    try {
      const response = await fetch(`/api/applist?code=${secretCode}`, {
        method: "GET",
      });
      const data = await response.json();

      if (data && data["website"]) {
        window.location.replace(data["website"]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const secretCode = params.get("id");

    if (secretCode) {
      redirectWebsite(secretCode);
    }
  }, [params]);

  return (
    <main>
      <div className="flex justify-center items-center h-screen">
        <div className="loader"></div>
      </div>
    </main>
  );
}
