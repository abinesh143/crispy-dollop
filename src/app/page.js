"use client";

import Loading from "@/componets/Loading";
import { Suspense } from "react";

export default function Profile() {

  function SearchBarFallback() {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <main>
      <Suspense fallback={<SearchBarFallback />}>
        <Loading />
      </Suspense>
    </main>
  );
}

// http://localhost:3000/?id=bwluxv

// http://localhost:3000/api/applist?code=${secretCode}

// https://app.freeappmaker.pro/?id=bwluxv

// https://app.freeappmaker.pro/api/applist?code=${secretCode}
