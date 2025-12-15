import { motion } from 'framer-motion';

const animations = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  slideUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 30 }
  },
  slideDown: {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 }
  },
  slideLeft: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 30 }
  },
  slideRight: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 }
  },
  scale: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 }
  }
};

function AnimatedSection({ 
  children, 
  animation = 'slideUp',
  delay = 0,
  duration = 0.5,
  stagger = false,
  staggerDelay = 0.1,
  className = ''
}) {
  const selectedAnimation = animations[animation] || animations.slideUp;

  if (stagger) {
    return (
      <motion.div
        initial="initial"
        whileInView="animate"
        exit="exit"
        viewport={{ once: true, margin: '-50px' }}
        variants={{
          initial: {},
          animate: {
            transition: {
              staggerChildren: staggerDelay
            }
          }
        }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={selectedAnimation.initial}
      whileInView={selectedAnimation.animate}
      exit={selectedAnimation.exit}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: [0.4, 0, 0.2, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedItem({ 
  children, 
  animation = 'slideUp',
  className = '' 
}) {
  const selectedAnimation = animations[animation] || animations.slideUp;

  return (
    <motion.div
      variants={selectedAnimation}
      transition={{
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedSection;





