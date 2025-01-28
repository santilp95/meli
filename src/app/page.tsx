"use client";
import { useEffect, useRef } from "react";

import { useBreadContext } from "@/adapters/shared/context/breadCrumb";

export default function Home() {
  const { setCategories } = useBreadContext();
  const hasSetCategories = useRef(false);

  useEffect(() => {
    if (!hasSetCategories.current) {
      setCategories([]);
      hasSetCategories.current = true;
    }
  }, [setCategories]);

  return (
    <div className="page">
      <main className="main">
      </main>
    </div>
  );
}