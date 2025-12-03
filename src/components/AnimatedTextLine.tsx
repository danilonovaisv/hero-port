import { motion } from 'framer-motion';

interface AnimatedTextLineProps {
  text: string;
  className?: string;
  delay?: number;
  colorClass?: string;
}

export default function AnimatedTextLine({
  text,
  className = '',
  delay = 0,
  colorClass = 'text-black'
}: AnimatedTextLineProps) {
  const letters = text.split('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: delay,
      },
    },
  };

  const letterVariants = {
    hidden: {
      y: '100%',
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  const mobileVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: delay,
      },
    },
  };

  return (
    <>
      <motion.div
        className={`hidden md:block overflow-hidden ${className}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className={`inline-block ${colorClass}`}
            style={{ whiteSpace: letter === ' ' ? 'pre' : 'normal' }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>

      <motion.div
        className={`md:hidden ${className} ${colorClass}`}
        variants={mobileVariants}
        initial="hidden"
        animate="visible"
      >
        {text}
      </motion.div>
    </>
  );
}
