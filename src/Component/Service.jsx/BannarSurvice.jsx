
import Featurebtn from '../../Reusable/Featurebtn';
import bannarimg from '../../assets/feature/Ghost-Mannequin-before-1-1.webp'
const BannarSurvice = () => {
    return (
        <div className='lg:py-8 py-16 bg-slate-100 '>
            <div className="w-full bg-no-repeat bg-center" style={{ height: '52rem', backgroundImage: 'url(https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/hero-bg.svg' }}>
                <div className=" flex px-10 items-center justify-center h-full w-full bg-opacity-50">
                    <div className='lg:flex-nowrap flex-wrap  flex justify-between px-5 items-center my-container'>
                    <div className='lg:space-y-7 md:space-y-5 space-y-3 w-100 lg:w-1/2'>
                                    < p className='text-xl font-medium'><span className=' text-lg mb-2 cursor-pointer hover:text-yellow-500 transition-all duration-300 ease-in-out'>Home</span>  {'>'} <span> Ghost Mannequin Service</span></p>

                                    <h3 className='lg:text-5xl lg:font-bold text-3xl font-semibold'>Flaunt Your Brand with Our Ghost Mannequin Service</h3>
                                    <h5 className='text-xl'>If you run an eCommerce store primarily dedicated to fashion, you must know how important it is to present your dresses properly. The only thing the customer can see is the photo of the dress. So, you have to make sure that you’re focusing on the best angles to flaunt the dress. This is where Clipping Path Graphics can help with the most advanced and dedicated ghost mannequin effect service. </h5>

                                    <div className='my-5'>
                                        <span ><Featurebtn></Featurebtn></span>
                                    </div>
                                </div>
                    <div >
                        <img className='w-full h-full' src={bannarimg} alt="" />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannarSurvice;
