"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import RotatingTitle from "./RotatingTitle";

type Item = {
    src: string;
    caption?: string
};

export default function SuccessHeroSlider({
    items, height = 540, autoplayMs = 5000, className = ""
}: {
    items: Item[];
    height?: number;
    autoplayMs?: number;
    className?: string
}) {
    const pool = useMemo(() => {
        const s = new Set<string>();
        return items.filter(x => !s.has(x.src) && s.add(x.src))
    }, [items]);

    useEffect(() => {
        pool.forEach(i => {
            const im = new window.Image();
            im.decoding = "async";
            im.loading = "eager";
            im.src = i.src;
        });
    }, [pool]);

    const [idx, setIdx] = useState(0);
    
    if (!pool.length) return null;

    return (
        <section className={`mx-auto mt-6 w-full max-w-[720px] ${className}`}>
            <div className="rounded-2xl border border-gray-200 bg-white p-3 shadow-lg items-center text-center">
                <RotatingTitle title={pool[idx]?.caption ?? ""} />
                <div className="relative mt-3 w-full" style={{ aspectRatio: "16/9", maxHeight: height }}>
                    <Swiper
                        modules={[Autoplay, EffectFade]}
                        effect="fade"
                        fadeEffect={{ crossFade: true }}
                        slidesPerView={1}
                        loop
                        autoplay={{ delay: autoplayMs, disableOnInteraction: false }}
                        onSlideChange={(sw) => setIdx(sw.realIndex)}
                        className="!h-full !w-full"
                    >
                        {pool.map((it, i) => (
                            <SwiperSlide key={i}>
                                <div className="relative h-full w-full overflow-hidden rounded-xl">
                                    <Image src={it.src} alt={it.caption ?? ""} fill className="object-cover" sizes="(max-width:768px) 100vw, 720px" priority={i < 2} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
