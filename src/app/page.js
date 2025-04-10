import Welcome from '@/app/content/000.mdx';
import FragmentScroller from './components/FragmentScroller';
import * as motion from 'motion/react-client';

export default function Home() {
  return (
    <>
      <div className='no-scrollbar flex flex-col'>
        <Welcome className='sticky top-32'/>
        <div id='margins'
          style={
            { 
              backgroundColor: '#f8f8f8BF',
              backgroundImage: "url('/noise.svg'), url('/paper.jpg')",
              backgroundBlendMode: 'overlay',
              backgroundSize: 'cover',
              backgroundAttachment: 'fixed'
            }
          }
          className='z-40 shadow-[0px_-24px_32px_-40px_#1a1a1a80] mt-32 py-2'>    
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 6, 0] }}
              transition={{ 
              repeat: Infinity, 
              duration: 2, 
              ease: "easeInOut"
            }}
            className="mt-8 text-sm text-gray-400 text-center font-light"
          >
            ↓ the margins continue
          </motion.div>
          <FragmentScroller/>
        </div>
      </div>
    </>
  );
}
