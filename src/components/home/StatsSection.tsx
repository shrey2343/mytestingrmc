import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Subject Matter Experts" },
  { value: "5k+", label: "Happy Researchers" },
  { value: "190+", label: "Countries Reached" },
  { value: "20+", label: "Years of Experience" },
];

const StatsSection = () => {
  return (
    <section className="w-full bg-foreground py-10 md:py-14">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 items-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center text-background"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h2 className="font-body text-3xl md:text-[42px] font-semibold leading-tight mb-1">
                {stat.value}
              </h2>
              <p className="font-body text-sm md:text-[15px] opacity-90">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
