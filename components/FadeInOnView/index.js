import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FadeInOnView({ children, className, delay = 0, duration = 0.6 }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5, once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration, ease: "easeOut", delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
