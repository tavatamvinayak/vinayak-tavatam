import React from 'react';
import {motion} from 'framer-motion'
const TransitionEffect = () => {
  return (
    <>
     <motion.div className='bg-warning '
      style={{background:"#ff00b3",width:"100vw",height:"100vh",display:"fixed" ,top:"0",bottom:"0" ,right: "100%" ,zIndex: "30" ,position: "fixed"}}
      initial={{x:"100%",width:"100%"}}
      animate={{x:"0%",width:"0%"}}
      transition={{duration:0.8 , ease:"easeInOut"}}
     />
     <motion.div className=''
      style={{background:"#00ffdc" ,width:"100vw",height:"100vh",display:"fixed" ,top:"0",bottom:"0" ,right: "100%" ,zIndex: "20" ,position: "fixed"}}
      initial={{x:"100%",width:"100%"}}
      animate={{x:"0%",width:"0%"}}
      transition={{ delay:0.2 ,duration:0.8 , ease:"easeInOut"}}
     />
     <motion.div className=' bg-black'
      style={{ background:"#000000",width:"100vw",height:"100vh",display:"fixed" ,top:"0",bottom:"0" ,right: "100%" ,zIndex: "10" ,position: "fixed"}}
      initial={{x:"100%",width:"100%"}}
      animate={{x:"0%",width:"0%"}}
      transition={{delay:0.4,duration:0.8 , ease:"easeInOut"}}
     />
    </>
  );
}

export default TransitionEffect;
