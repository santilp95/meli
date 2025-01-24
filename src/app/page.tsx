"use client";

import { CardProducts } from "@/infrastructure/components";
import { sampleProducts } from "@/utils";
import { IProduct } from "@/domain";

import styles from "./page.module.css";

export default function Home() {
  const products: IProduct[] = sampleProducts;

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <CardProducts products={products} />
      </main>
    </div>
  );
}
