"use client";

import { CardProduct } from "@/infrastructure/components";
import styles from "./page.module.css";

export default function Home() {
  const imgProduct =
    "https://lamanzanamordida.net/app/uploads-lamanzanamordida.net/2024/09/iPhone-16-pro-1.jpg?x=480&y=375&quality=80";

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <CardProduct
          city="Bogotá"
          detail="Producto de prueba"
          image={imgProduct}
          price={1000}
          hasShippingIcon={true}
        />
      </main>
    </div>
  );
}
