"use client";

import clsx from "clsx";
import { ReactNode } from "react";

const FeatureCardContent = () => {
  return (
    <div>
      <h3>Proident est adipisicing</h3>
      <p>
        Eiusmod aute fugiat sit mollit qui ex pariatur dolore consequat
        consectetur consectetur laborum. Ad proident enim elit veniam
        consectetur magna veniam incididunt sint excepteur.
      </p>
    </div>
  );
};

const FeatureCard = ({
  bgUrl,
  children = <FeatureCardContent />,
  className = "",
}: {
  bgUrl?: string;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      id="featureCard"
      data-aos="zoom-in"
      className={clsx(
        "group relative",
        `h-full aspect-square`,
        "[clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]",
        "transition-all duration-500 bg-cover bg-center bg-no-repeat",
        className
      )}
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <div className="flex flex-col items-center justify-center w-full h-full  text-2xl text-white">
        <div className="absolute inset-0 transition-all duration-500 opacity-50 bg-primary-700 group-hover:bg-primary-900 group-hover:opacity-80 -z-10"></div>
        {children}
      </div>
    </div>
  );
};

export default FeatureCard;
