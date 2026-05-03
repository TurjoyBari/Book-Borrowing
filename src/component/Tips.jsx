"use client";

import { Card, CardBody } from "@heroui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function TipsSlider() {
  const tips = [
    { id: 1, title: "Return On Time", desc: "Return books timely." },
    { id: 2, title: "Keep Books Safe", desc: "Maintain condition." },
    { id: 3, title: "Explore More", desc: "Discover new books." },
    { id: 4, title: "Avoid Damage", desc: "Handle carefully." },
    { id: 5, title: "Read Daily", desc: "Build reading habit." },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 2500 }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {tips.map((tip) => (
          <SwiperSlide key={tip.id}>
            <Card className="border border-default-200 rounded-xl transition duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="p-6">
                <h3 className="font-semibold mb-2">{tip.title}</h3>
                <p className="text-sm text-default-500">{tip.desc}</p>
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
