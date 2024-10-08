// import React from 'react';
// import { motion } from 'framer-motion';
// import bg from '../../../assets/bg.jpg';

// const Hero = () => {
//   return (
//     <div className="relative h-screen overflow-hidden">
//       {/* Blurred background */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center blur-sm"
//         style={{backgroundImage: `url(${bg})`}}
//       ></div>
      
//       {/* Overlay to adjust brightness if needed */}
//       <div className="absolute inset-0 bg-black opacity-30"></div>
      
//       {/* Content */}
//       <div className="relative h-full flex items-center justify-center">
//         <motion.div 
//           className="text-center text-white z-10"
//           initial={{ opacity: 0, y: 50 }} 
//           animate={{ opacity: 1, y: 0 }} 
//           transition={{ duration: 1.5, ease: "easeOut" }}
//         >
//           <motion.h1 
//             className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
//             initial={{ opacity: 0, scale: 0.8 }} 
//             animate={{ opacity: 1, scale: 1 }} 
//             transition={{ duration: 1.2, delay: 0.3 }}
//           >
//             Software development company
//           </motion.h1>
//           <motion.p 
//             className="text-xl md:text-2xl mb-8"
//             initial={{ opacity: 0, y: 50 }} 
//             animate={{ opacity: 1, y: 0 }} 
//             transition={{ duration: 1.2, delay: 0.6 }}
//           >
//             Proven experts and proficient Technology partner
//           </motion.p>
//           <motion.button 
//             className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
//             whileHover={{ scale: 1.05 }} 
//             whileTap={{ scale: 0.95 }}
//             initial={{ opacity: 0, y: 50 }} 
//             animate={{ opacity: 1, y: 0 }} 
//             transition={{ duration: 1.2, delay: 0.9 }}
//           >
//             Discuss my project
//           </motion.button>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


import React from 'react';
import bg from '../../../assets/bg.jpg';
import bg2 from '../../../assets/bg2.jpg';

const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Blurred background */}
      <div 
        className="absolute inset-0 bg-cover bg-center blur-sm"
        style={{backgroundImage: `url(${bg})`}}
      ></div>
      
      {/* Overlay to adjust brightness if needed */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      
      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Software development company
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Proven experts and proficient Technology partner
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            Discuss my project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;