"use client";
import clsx from "clsx";
import { Fragment, ReactNode, useState } from "react";

interface Tab {
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultIndex?: number;
}

export default function TabsSlide({ tabs, defaultIndex = 0 }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const [displayIndex, setDisplayIndex] = useState(defaultIndex);

  const [fadeState, setFadeState] = useState<"fade-in" | "fade-out">("fade-in");
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTabClick = (index: number) => {
    if (index === activeIndex || isAnimating) return;

    setIsAnimating(true);
    setFadeState("fade-out");

    setTimeout(() => {
      setDisplayIndex(index);
      setFadeState("fade-in");
      setActiveIndex(index);
    }, 300); // fade-out duration

    setTimeout(() => {
      setIsAnimating(false);
    }, 600); // total_time_duration = fade-out + fade-in
  };

  return (
    <div className="w-full mx-auto">
      {/* Header */}
      <div className="flex my-5 text-xs gap-5 items-center justify-center">
        {tabs.map((tab, index) => (
          <Fragment key={index}>
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={clsx(
                "text-center py-2 font-medium transition-all duration-200 border-none   text-gray-500 hover:text-primary-500 ",
                activeIndex === index && "border-primary-500 text-primary-600"
              )}
            >
              {tab.label}
            </button>

            <span className="last:hidden text-gray-500 flex items-center justify-center">
              |
            </span>
          </Fragment>
        ))}
      </div>

      {/* Content */}
      <div
        className={clsx(
          "transition-all duration-300 ease-in-out transform",
          fadeState === "fade-in"
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5"
        )}
      >
        <div>{tabs[displayIndex].content}</div>
      </div>
    </div>
  );
}
