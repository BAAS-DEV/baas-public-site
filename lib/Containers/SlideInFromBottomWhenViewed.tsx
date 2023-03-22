"use client";

import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Box = ({ num, animation }: any) => {
  //   const control = useAnimation();
  const [entered, setEntered] = useState(false);
  const [ref, inView] = useInView({
    rootMargin: "0px 0px 0px 0px",
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      console.log("inview");
    }
    if (!inView) {
      console.log("outofview");
    }
  }, [entered, inView]);

  return (
    <div
      className=""
      ref={ref}
      //   variants={boxVariant}
      //   initial="hidden"
      //   animate={control}
    >
      <AnimatePresence>
        {inView ? (
          <motion.div
            initial={{
              y: 100,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.25,
              ease: animation,
            }}
          >
            {num}
          </motion.div>
        ) : (
          <></>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function SlideInFromBottomWhenViewed(props: {
  children: any;
  animation: string;
}) {
  return <Box num={props.children} animation={props.animation} />;
}
