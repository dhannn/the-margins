import * as motion from "motion/react-client"

export default function Margins({ time, children }) {
  return (
    <>
    <motion.div
      className="font-light"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      >
      <div className="space-y-8 text-lg leading-8 text-justify">
        {children}
      </div>
    </motion.div>
      </>
  );
}
