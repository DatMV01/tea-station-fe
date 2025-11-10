"use client";

import AnimatedBox from "./AnimatedBox";

export default function DemoAOS() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-10 bg-gray-100 p-10">
      <AnimatedBox animation="fade-up" easing="ease-out-cubic" once={false}>
        <h2 className="text-xl font-bold text-gray-800">Fade Up 🚀</h2>
      </AnimatedBox>

      <AnimatedBox animation="flip-left" anchorPlacement="center-center">
        <h2 className="text-xl font-bold text-blue-800">Flip Left 💫</h2>
      </AnimatedBox>

      <AnimatedBox animation="zoom-out-up" duration={1200} delay={300}>
        <h2 className="text-xl font-bold text-green-800">Zoom Out Up 🌟</h2>
      </AnimatedBox>

      <AnimatedBox animation="slide-right" easing="ease-in-quart">
        <h2 className="text-xl font-bold text-purple-800">Slide Right 💨</h2>
      </AnimatedBox>
    </div>
  );
}
