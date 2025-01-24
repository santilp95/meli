'use client';


import { SearchBar } from "@/infrastructure/components";

import styles from "./page.module.css";

export default function Home() {
  const handleSearch = (value: string) => {
    console.log(value);
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <SearchBar
          placeholder="Nunca dejes de buscar"
          onSearch={handleSearch}
        />
      </header>
      <main className={styles.main}>
        <h1>Hello world</h1>
      </main>
    </div>
  );
}
