"use client";
import { useGaPageview } from "./(lib)/ga";

export default function GaProvider() {
    useGaPageview(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID);
    return null;
}