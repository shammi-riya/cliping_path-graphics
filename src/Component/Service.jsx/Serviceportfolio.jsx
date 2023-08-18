
import img1 from '../../assets/img1.webp';
import img1h from '../../assets/img1-h.jpg';
import img2 from '../../assets/img2.webp';
import img2h from '../../assets/img2-h.webp';
import img3 from '../../assets/img3.webp';
import img3h from '../../assets/img3-h.webp';
import img4 from '../../assets/img4.jpg';
import img4h from '../../assets/img4-h.webp';
import img5 from '../../assets/img5.webp';
import img5h from '../../assets/img5-h.webp';
import img6 from '../../assets/img6.webp';
import img6h from '../../assets/img6-h.webp';
import img7 from '../../assets/img7.webp';
import img7h from '../../assets/img7-h.webp';
import img8 from '../../assets/img8.webp'
import img8h from '../../assets/img9-h.webp'

const Serviceportfolio = () => {
    return (
        <div className='bg-[#f5f6fb] '>
            <div className='lg:max-w-7xl mx-auto w-full lg:px-0 px-5 py-20 '>
                <div className='flex justify-between items-center flex-wrap'>
                    <h4 className='text-4xl font-semibold'>Some Of Our Portfolio</h4>
                    <button className='py-2 lg:mt-0 mt-3 px-4 rounded-xl text-md lg:py-3 lg:px-5 lg:rounded-3xl lg:text-lg font-bold border-2 border-[#ff8a00] text-black transition-all duration-300 ease-in-out hover:bg-[#ff8a00] hover:border-[#ff8a00] hover:text-white'>
                        See All Work
                    </button>

                </div>


                <div className='grid lg:grid-cols-4 py-12 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-5 mb-2'>

            
                <div style={{ borderRadius: '5px 50px 5px 50px' }}
                    className='bg-[#fff] shadow-sm overflow-hidden'>
                    <div style={{ borderRadius: '5px 50px 5px 50px' }}
                        className='relative group'>
                        <img className='hover:opacity-0 h-full w-full transition-opacity duration-300' src={img1} alt="" />
                        <img className='absolute group-hover:opacity-100 object-cover inset-0  opacity-0 w-full h-full transition-opacity duration-300' src={img1h} alt="" />
                    </div>

                </div>
                <div style={{ borderRadius: '5px 50px 5px 50px' }}
                    className='bg-[#fff] shadow-sm overflow-hidden'>
                    <div style={{ borderRadius: '5px 50px 5px 50px' }}
                        className='relative group'>
                        <img className='hover:opacity-0 h-full w-full transition-opacity duration-300' src={img2} alt="" />
                        <img className='absolute group-hover:opacity-100 object-cover inset-0  opacity-0 w-full h-full transition-opacity duration-300' src={img2h} alt="" />
                    </div>

                </div>


                <div style={{ borderRadius: "5px 50px 5px 50px" }}
                    className='bg-[#fff] shadow-sm overflow-hidden'
                >

                    <div style={{ borderRadius: "5px 50px 5px 50px" }} className='relative group'>
                        <img className='hover:opacity-0 h-full w-full duration-500 transition-opacity' src={img3} alt="" />
                        <img className='absolute group-hover:opacity-100 inset-0 object-cover  h-full w-full duration-500 transition-opacity opacity-0' src={img3h} alt="" />
                    </div>

                </div>

                <div className='bg-[#fff] shadow-sm  overflow-hidden' style={{ borderRadius: '5px 50px 5px 50px' }}>
                    <div className='relative group' style={{ borderRadius: '5px 50px 5px 50px', overflow: 'hidden' }}>
                        <img className='hover:opacity-0 h-full w-full transition-opacity duration-300' src={img4} alt="" />
                        <img className='opacity-0 absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-100' src={img4h} alt="" />
                    </div>
                </div>
                <div className='bg-[#fff] shadow-sm  overflow-hidden' style={{ borderRadius: '5px 50px 5px 50px' }}>
                    <div className='relative group' style={{ borderRadius: '5px 50px 5px 50px', overflow: 'hidden' }}>
                        <img className='hover:opacity-0 h-full w-full transition-opacity duration-300' src={img5} alt="" />
                        <img className='opacity-0 absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-100' src={img5h} alt="" />
                    </div>
                </div>
                <div className='bg-[#fff] shadow-sm  overflow-hidden' style={{ borderRadius: '5px 50px 5px 50px' }}>
                    <div className='relative group' style={{ borderRadius: '5px 50px 5px 50px', overflow: 'hidden' }}>
                        <img className='hover:opacity-0 h-full w-full transition-opacity duration-300' src={img6} alt="" />
                        <img className='opacity-0 absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-100' src={img6h} alt="" />
                    </div>
                </div>
                <div className='bg-[#fff] shadow-sm  overflow-hidden' style={{ borderRadius: '5px 50px 5px 50px' }}>
                    <div className='relative group' style={{ borderRadius: '5px 50px 5px 50px', overflow: 'hidden' }}>
                        <img className='hover:opacity-0 h-full w-full transition-opacity duration-300' src={img7} alt="" />
                        <img className='opacity-0 absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-100' src={img7h} alt="" />
                    </div>
                </div>
                <div className='bg-[#fff] shadow-sm  overflow-hidden' style={{ borderRadius: '5px 50px 5px 50px' }}>
                    <div className='relative group' style={{ borderRadius: '5px 50px 5px 50px', overflow: 'hidden' }}>
                        <img className='hover:opacity-0 h-full w-full transition-opacity duration-300' src={img8} alt="" />
                        <img className='opacity-0 absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-100' src={img8h} alt="" />
                    </div>
                </div>

            </div>
        </div>
        </div>

    );
};

export default Serviceportfolio;
