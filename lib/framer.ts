'use client';

import { 
  motion as motionComponent,
  AnimatePresence as AnimatePresenceComponent,
  useScroll as useScrollHook,
  useTransform as useTransformHook,
  useSpring as useSpringHook,
  useInView as useInViewHook,
  type Variants as VariantsType
} from 'framer-motion';

// Re-export with explicit names
export const motion = motionComponent;
export const AnimatePresence = AnimatePresenceComponent;
export const useScroll = useScrollHook;
export const useTransform = useTransformHook;
export const useSpring = useSpringHook;
export const useInView = useInViewHook;
export type Variants = VariantsType;
