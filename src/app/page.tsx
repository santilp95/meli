'use client';
import { useState } from "react";
import { SearchBar } from "@/infrastructure/components";

import styles from "./page.module.css";

export default function Home() {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", search);
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <SearchBar
        placeholder="Nunca dejes de buscar"
        value={search}
        onInputChange={setSearch}
        onSearch={handleSearch}
      />
      </main>
    </div>
  );
}
