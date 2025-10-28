"use client";

import { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

type Review = {
  name: string;
  stars: number;
  text: string;
  ago: string;
};

const DATA: Review[] = [
  {
    name: "Hugo King",
    stars: 5,
    text: "This is honestly one of the best reselling groups. I got a 1 on 1 call with a great advisor, and everything is played out super well. I've already made $800 profit!",
    ago: "15 Days After Joining"
  },
  {
    name: "Mira D.",
    stars: 5,
    text: "$0.01 Dysons. Paid for itself day one.",
    ago: "2 Hours After Joining"
  },
  {
    name: "ShinBoi",
    stars: 5,
    text: "Look it's the truth I've joined eMoney 2 days ago and I've already found a lead on a discount item at Home Depot. So I'm looking forward with more in the future but enough said the support team fire they were super helpful",
    ago: "2 Days After Joining"
  },
  {
    name: "dabexx",
    stars: 5,
    text: "Trust eMoney definitely worth it, i got a membership with my last money, after a few days i already covered it and made profit by just chilling at home. easiest money in my life, i feel bad i did not start this before.",
    ago: "28 Days After Joining"
  }
];

const star = (n: number) => "★★★★★☆☆☆☆☆".slice(5 - Math.round(n), 10 - Math.round(n));

export default function ReviewsTicker() {
  const items = useMemo(() => DATA.map((r, i) => ({
    ...r,
    avatar: `https://api.dicebear.com/7.x/thumbs/svg?seed=${encodeURIComponent(r.name)}&radius=50`
  })), []);
  return (
    <section className="mx-auto mt-6 w-full max-w-[720px]">
      <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-lg">
        <div className="mb-4 text-center">
          <div className="text-xl font-bold text-gray-900 font-heading mb-2">What Our Members Say</div>
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="flex text-yellow-500 text-lg">★★★★★</div>
            <span className="text-gray-600 font-body font-semibold">4.9/5 from 1,000+ reviews</span>
          </div>
          <p className="text-sm text-gray-600 font-body">Real success stories from real members</p>
        </div>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          slidesPerView={1}
          loop
          className="!w-full"
        >
          {items.map((r, i) => (
            <SwiperSlide key={i}>
              <div className="flex items-start gap-3">
                <img src={r.avatar} alt="" className="h-10 w-10 rounded-full ring-1 ring-gray-200" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-gray-900 font-body">{r.name}</div>
                    <div className="text-[11px] text-gray-500 font-body">{r.ago}</div>
                  </div>
                  <div className="text-yellow-500 text-xs">{star(r.stars)}</div>
                  <p className="mt-1 text-sm text-gray-700 font-body">{r.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
