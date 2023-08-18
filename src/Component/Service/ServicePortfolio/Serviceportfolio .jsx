import ServiceImageOverlay from "./ServiceImageOverlay ";

import ServiceHoverimg1 from '../../../assets/portfolio/img1-h.jpg'
import Serviceimg1 from '../../../assets/portfolio/img1.webp'
import ServiceHoverimg2 from '../../../assets/portfolio/img2-h.webp'
import Serviceimg2 from '../../../assets/portfolio/img2.webp'

import ServiceHoverimg4 from '../../../assets/portfolio/img4-h.webp'
import Serviceimg4 from '../../../assets/portfolio/img4.jpg'
import ServiceHoverimg5 from '../../../assets/portfolio/img5-h.webp'
import Serviceimg5 from '../../../assets/portfolio/img5.webp'
import Serviceimg6 from '../../../assets/portfolio/img6.webp'
import ServiceHoverimg6 from '../../../assets/portfolio/img6-h.webp'
import ServiceHoverimg7 from '../../../assets/portfolio/img7-h.webp'
import Serviceimg7 from '../../../assets/portfolio/img7.webp'
import ServiceHoverimg8 from '../../../assets/portfolio/img9-h.webp'
import Serviceimg8 from '../../../assets/portfolio/img8.webp'

const Serviceportfolio  = () => {
    return (
       
             <>
            <div className='lg:max-w-7xl mx-auto w-full lg:px-0 px-5 py-20'>
                <div className='flex justify-between items-center flex-wrap'>
                    <h4 className='text-4xl font-semibold'>Some Of Our Portfolio</h4>
                    <button 
                    className='py-2 lg:mt-0 mt-3 px-4 rounded-xl text-md lg:py-3 lg:px-5 lg:rounded-3xl lg:text-lg font-bold border-2 border-[#ff8a00] text-black transition-all duration-300 ease-in-out hover:bg-[#ff8a00] hover:border-[#ff8a00] hover:text-white'>
                        See All Work
                    </button>
                </div>

                <div className='grid lg:grid-cols-4 py-12 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-5 mb-2'>
                    <div className='bg-[#fff] shadow-sm overflow-hidden' style={{ borderRadius: '5px 50px 5px 50px' }}>
                        <ServiceImageOverlay src={Serviceimg1} alt='Image 1' overlaySrc={ServiceHoverimg1} />
                    </div>
                    <div className='bg-[#fff] shadow-sm overflow-hidden' style={{ borderRadius: '5px 50px 5px 50px' }}>
                        <ServiceImageOverlay  src={Serviceimg2} alt='Image 2' overlaySrc={ServiceHoverimg2} />
                    </div>
                    <div className='bg-[#fff] shadow-sm overflow-hidden' style={{ borderRadius: '5px 50px 5px 50px' }}>
                        <ServiceImageOverlay src={Serviceimg5} alt='Image 1' overlaySrc={ServiceHoverimg5} />
                    </div>
                    <div className='bg-[#fff] shadow-sm overflow-hidden' style={{ borderRadius: '5px 50px 5px 50px' }}>
                        <ServiceImageOverlay  src={Serviceimg2} alt='Image 2' overlaySrc={ServiceHoverimg2} />
                    </div>
                    <div className='bg-[#fff] shadow-sm overflow-hidden' style={{ borderRadius: '5px 50px 5px 50px' }}>
                        <ServiceImageOverlay src={Serviceimg4} alt='Image 1' overlaySrc={ServiceHoverimg4} />
                    </div>
                    <div className='bg-[#fff] shadow-sm overflow-hidden' style={{ borderRadius: '5px 50px 5px 50px' }}>
                        <ServiceImageOverlay  src={Serviceimg8} alt='Image 2' overlaySrc={ServiceHoverimg8} />
                    </div>
                    <div className='bg-[#fff] shadow-sm overflow-hidden' style={{ borderRadius: '5px 50px 5px 50px' }}>
                        <ServiceImageOverlay src={Serviceimg6} alt='Image 1' overlaySrc={ServiceHoverimg6} />
                    </div>
                    <div className='bg-[#fff] shadow-sm overflow-hidden' style={{ borderRadius: '5px 50px 5px 50px' }}>
                        <ServiceImageOverlay  src={Serviceimg7} alt='Image 2' overlaySrc={ServiceHoverimg7} />
                    </div>
                    
                    
                   
                </div>
            </div>
        </>
        
    );
};

export default Serviceportfolio ;