import banner1 from "@/public/assets/banners/banner1.jpg";
import banner2 from "@/public/assets/banners/banner2.jpg";
import banner3 from "@/public/assets/banners/banner3.jpg";
import banner4 from "@/public/assets/banners/banner4.jpg";
import hero_img from "@/public/assets/hero_img.png";

import logo from "@/public/assets/logo.png";
import rightArrow from "@/public/assets/right-arrow.svg";

const images = {
  banner1,
  banner2,
  banner3,
  banner4,
  hero_img,
};

const icons = {
  logo,
  rightArrow,
};

export const partnerLogoBasePath = "/assets/partner-logos/";
export const partnerLogos = [
  { src: partnerLogoBasePath + "costco.png", alt: "Costco Logo" },
  { src: partnerLogoBasePath + "kroger.png", alt: "Kroger Logo" },
  { src: partnerLogoBasePath + "meijer.png", alt: "Meijer Logo" },
  { src: partnerLogoBasePath + "publix.png", alt: "Publix Logo" },
  { src: partnerLogoBasePath + "safeway.png", alt: "Safeway Logo" },
  { src: partnerLogoBasePath + "target.png", alt: "Target Logo" },
  { src: partnerLogoBasePath + "walmart.png", alt: "Walmart Logo" },
  { src: partnerLogoBasePath + "wegmans.png", alt: "Wegmans Logo" },
  {
    src: partnerLogoBasePath + "whole-foods.png",
    alt: "Whole Foods Logo",
  },
];
 
const assets = { images, icons, partnerLogos };

export default assets;
