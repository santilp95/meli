"use client";

import { useBreadContext } from "@/adapters/shared/context/breadCrumb";
import { useEffect, useRef } from "react";

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