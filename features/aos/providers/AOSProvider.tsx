'use client';

import Aos from 'aos';
import { ReactNode, useEffect } from 'react';
import "aos/dist/aos.css";

const AOSProvider = ({children}:{children: ReactNode}) => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return children;
};

export default AOSProvider;