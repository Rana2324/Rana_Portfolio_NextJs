"use client";

import * as React from "react";
import {
  motion as framerMotion,
  AnimatePresence as FramerAnimatePresence,
  useScroll as framerUseScroll,
  useTransform as framerUseTransform,
  useSpring as framerUseSpring,
  useInView as framerUseInView,
} from "framer-motion";
import type { Variants as FramerVariants } from "framer-motion";

// Create wrapper components
const MotionDiv = framerMotion.div;
const MotionPath = framerMotion.path;
const MotionUl = framerMotion.ul;
const MotionLi = framerMotion.li;
const MotionSpan = framerMotion.span;
const MotionImg = framerMotion.img;
const MotionSection = framerMotion.section;
const MotionA = framerMotion.a;
const MotionP = framerMotion.p;
const MotionH1 = framerMotion.h1;
const MotionH2 = framerMotion.h2;
const MotionH3 = framerMotion.h3;
const MotionH4 = framerMotion.h4;
const MotionSvg = framerMotion.svg;

// Export the wrapper components
export {
  MotionDiv,
  MotionPath,
  MotionUl,
  MotionLi,
  MotionSpan,
  MotionImg,
  MotionSection,
  MotionA,
  MotionP,
  MotionH1,
  MotionH2,
  MotionH3,
  MotionH4,
  MotionSvg,
  FramerAnimatePresence as AnimatePresence,
  framerUseScroll as useScroll,
  framerUseTransform as useTransform,
  framerUseSpring as useSpring,
  framerUseInView as useInView,
};

export type Variants = FramerVariants;

// Legacy support
export const motion = framerMotion;
