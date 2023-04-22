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
    delay: 0,
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
      className="container"
      ref={ref}
      //   variants={boxVariant}
      //   initial="hidden"
      //   animate={control}
    >
      <AnimatePresence>
        {inView ? (
          <motion.div
            initial={{
              x: -100,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            exit={{
              x: -100,
              opacity: 0,
            }}
            transition={{
              duration: 1,
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

export default function SlideInFromLeftWhenViewed(props: {
  children: any;
  animation: string;
}) {
  return <Box num={props.children} animation={props.animation} />;
}
