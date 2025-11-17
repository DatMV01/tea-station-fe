"use client";

import { Container } from "@/components";
import { useScrollAnimation } from "@/hooks";
import { useRef, useState } from "react";

const Divider = () => (
  <svg
    viewBox="-1 -1 3 137"
    width="3"
    height="137"
    className="hidden md:block"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient
        id="lineGradient"
        x1="0"
        y1="0"
        x2="-5.90104e-06"
        y2="135"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" stopOpacity={0} />
        <stop offset="0.494792"  stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity={0}  />
      </linearGradient>
    </defs>
    <line
      x1="0.5"
      y1="0"
      x2="0.5"
      y2="135"
      stroke="url(#lineGradient)"
      strokeOpacity={0.3}
      fill="none"
    />
  </svg>
);

const StartCounter = ({
  targetCounter = 100,
  duration = 1000,
  oddNumber = false,
}: {
  targetCounter?: number;
  duration?: number;
  oddNumber?: boolean;
}) => {
  const [counter, setCounter] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const counterRef = useScrollAnimation<HTMLHeadingElement>({
    animationClass: "",
    onEnter: () => {
      const interval = 16; // 1 frame = 1000ms / 60 ≈ 16.666ms ~60fps
      const steps = duration / interval;
      const stepValue = targetCounter / steps;

      intervalRef.current = setInterval(() => {
        setCounter((prev) => {
          if (prev + stepValue >= targetCounter) {
            clearInterval(intervalRef.current!);
            return targetCounter;
          }
          return prev + stepValue;
        });
      }, interval);
    },

    onLeave: () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setCounter(0);
    },

    once: false,
  });

  return (
    <h1 ref={counterRef}>
      {oddNumber ? Math.floor(counter * 10) / 10 : Math.floor(counter)}+
    </h1>
  );
};

const StatsSection = () => {
  return (
    <Container as="section" id="stats">
      <div className="relative bg-fixed bg-center bg-no-repeat bg-cover  bg-[url(/assets/statsBg.jpg)]    ">
        <div className="absolute inset-0 bg-primary-950/85"></div>

        <div className="relative z-10 flex flex-col items-center justify-center px-4 py-20 lg:py-28 gap-14 lg:gap-32 md:flex-row">
          <div className="stats-item">
            <StartCounter targetCounter={120} duration={10000} />
            <h2>Hương Vị Pha Chế</h2>
          </div>

          <Divider />

          <div className="stats-item">
            <StartCounter targetCounter={500} duration={10000} />
            <h2>Sản Phẩm Bán Ra Toàn Thế Giới</h2>
          </div>

          <Divider />

          <div className="stats-item">
            <StartCounter targetCounter={4.9} oddNumber duration={10000} />
            <h2>Điểm Đánh Giá Từ Khách Hàng</h2>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default StatsSection;
