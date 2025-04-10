import * as motion from "motion/react-client"
import Margins from "./Margins";
import { timeAgo } from "../util";

export default function Fragment({ thesis, children, className, createdAt }) {
  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        animate={{opacity: 0}}
        transition={{ duration: 1, delay: 0.25 }}
        className={`flex gap-8 place-content-center ${className}`}
    >
        <h1 className='text-4xl w-1/2'>{ thesis }</h1>
        
        <div className={`flex flex-col w-1/4 font-light ${ createdAt && '-mt-8'}`}>
          { createdAt && <time className='uppercase cursor-help -top-100 tracking-widest text-[0.8rem] leading-8 hover:text-neutral-500 transition-all ease-in-out'>{timeAgo(Date.parse(createdAt))}</time> }
          <Margins>
            { children }
          </Margins>
        </div>
    </motion.div>
  );
}
