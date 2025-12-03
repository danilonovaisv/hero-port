import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import AnimatedTextLine from './AnimatedTextLine';
import HeroGlassCanvas from './HeroGlassCanvas';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full bg-gray-100"
      style={{ height: '450vh' }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <HeroGlassCanvas scrollYProgress={scrollYProgress} />

        <motion.div
          className="relative z-10 h-full w-full"
          style={{ opacity: contentOpacity }}
        >
          <div className="container mx-auto h-full px-6 md:px-12 flex flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4 md:space-y-6">
                <AnimatedTextLine
                  text="Design,"
                  className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none"
                  colorClass="text-[#0057FF]"
                  delay={0.2}
                />
                <AnimatedTextLine
                  text="não é só"
                  className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none"
                  colorClass="text-[#111111]"
                  delay={0.4}
                />
                <AnimatedTextLine
                  text="estética."
                  className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none"
                  colorClass="text-[#111111]"
                  delay={0.6}
                />

                <motion.p
                  className="text-[#0057FF] text-lg md:text-xl mt-8 font-light"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  [ É intenção, é estratégia, é experiência. ]
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                >
                  <button className="mt-8 group relative px-8 py-4 bg-[#0057FF] text-white rounded-full font-medium text-lg flex items-center gap-2 hover:bg-[#0046CC] transition-all duration-300 hover:scale-105">
                    get to know me better
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </button>
                </motion.div>
              </div>

              <div className="hidden md:block"></div>
            </div>
          </div>

          <motion.div
            className="absolute top-8 right-8 text-[#0057FF] text-sm font-medium tracking-wider"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            [ BRAND AWARENESS ]
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
