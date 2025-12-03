import { motion } from 'framer-motion';
import { Gem } from 'lucide-react';

export default function Header() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <nav className="container mx-auto flex items-center justify-between">
        <motion.div
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Gem className="w-8 h-8 text-[#0057FF]" />
          <span className="text-[#0057FF] text-2xl font-bold">Danilo</span>
        </motion.div>

        <ul className="hidden md:flex items-center gap-8 text-[#0057FF] font-medium">
          <li>
            <motion.a
              href="#home"
              className="hover:opacity-70 transition-opacity"
              whileHover={{ y: -2 }}
            >
              home
            </motion.a>
          </li>
          <li>
            <motion.a
              href="#sobre"
              className="hover:opacity-70 transition-opacity"
              whileHover={{ y: -2 }}
            >
              sobre
            </motion.a>
          </li>
          <li>
            <motion.a
              href="#portfolio"
              className="hover:opacity-70 transition-opacity"
              whileHover={{ y: -2 }}
            >
              portfolio showcase
            </motion.a>
          </li>
          <li>
            <motion.a
              href="#contato"
              className="hover:opacity-70 transition-opacity"
              whileHover={{ y: -2 }}
            >
              contato
            </motion.a>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}
