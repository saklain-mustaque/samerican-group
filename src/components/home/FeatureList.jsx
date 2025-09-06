import { useMemo } from "react";
import { motion } from "framer-motion";
import { useCustomInView, createAnimationVariants } from "./AnimationUtils";

// Memoized feature list component
export const FeatureList = ({ features, delay = 0 }) => {
  const [ref, isInView] = useCustomInView();
  const variants = useMemo(() => createAnimationVariants(), []);
  
  return (
    <motion.div
      ref={ref}
      variants={variants.staggerContainer}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="space-y-6"
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          variants={variants.staggerItem}
          className="flex items-center gap-4 text-left"
        >
          <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
            {feature.icon}
          </div>
          <p className="text-gray-700">{feature.text}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FeatureList;