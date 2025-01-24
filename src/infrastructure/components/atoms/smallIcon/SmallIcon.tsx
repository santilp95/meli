"use client";

import { FC } from "react";
import Image from "next/image";

const icShipping = "/assets/ic_shipping.png";

export const SmallIcon: FC = () => {
    return (
        <Image
            src={icShipping}
            alt="Shipping Icon"
            width={12}
            height={12}
            style={{
                display: "block",
            }}
            data-testid="shipping-icon"
        />
    );
};