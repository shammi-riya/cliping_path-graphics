
import SectionHeading from '../../Reusable/SectionHeading';
import logo from '../../assets/say-client-bg/trustpilotlogo.png';

const SayClient = () => {
    return (
        <div>
            <div className="lg:h-[90vh] h-full relative bg-slate-50 p-12 z-50">
                <div
                    className="bg-cover bg-no-repeat p-12 h-full"
                    style={{
                        backgroundImage: `url("https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/map.svg")`,
                        padding: '130px 0'
                    }}
                >
                    <div className="absolute bottom-0 left-0  right-0 top-0 h-full w-full">
                        <div className='my-container lg:px:0 px-5 '>
                            <div className='text-center space-y-3'>
                                <SectionHeading
                                    Title='What Our Clients Have to Say About Us'
                                    Subtitle='We take our customer reviews seriously and always look for areas of growth. See what our clients said about our service.'
                                />
                                
                            </div>

                       
                        <div className='flex justify-center gap-3 items-center py-5'>
                            <img src={logo} alt="" />
                            <a className='text-xl' href="https://www.trustpilot.com/review/clippingpathgraphics.com" target='_blank' rel='noopener noreferrer'>
                                <span className='cursor-pointer text-[#00b67a] hover:text-yellow-500 transition-all duration-300 ease-in-out'>Trascore 4.8 |</span> Review
                            </a>
                        </div>



                        <div className='grid gap-7 mb-10 lg:grid-cols-3 grid-cols-1  px-10'>
                            <div className='bg-[#fff] shadow-sm space-y-5'
                                style={{ padding: "30px 10px 31px 30px", borderRadius: '0 30px' }}
                            ><img src="https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/rating.svg" alt="" />
                                <h4 className='text-lg font-medium text-[#4f5864]'>“Ghost mannequin editing is pretty difficult. I’ve already had a bad experience with another company. So I wasn’t sure whether Clipping Path Graphics could do a good job or not. But, they turned out to be true to their words and impressed me with amazing ghost mannequin editing service.”</h4>

                                <h2 className='py-5 font-semibold text-xl text-[#091d33]'>Barbara T Moore</h2>


                            </div>
                            <div className='bg-[#fff] lg:my-0 my-5  shadow-sm space-y-5'
                                style={{ padding: "30px 10px 31px 30px", borderRadius: '0 30px' }}
                            ><img src="https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/rating.svg" alt="" />
                                <h4 className='text-lg font-medium text-[#4f5864]'>“Clipping Path Graphics has the best designers who know ghost mannequin photo editing better than others. My online fashion store has more customers than ever after I edited my photos by Clipping Path Graphics. The ghost mannequin photography service they provided made the dresses look more fashionable than ever!”</h4>

                                <h2 className='py-5 font-semibold text-xl text-[#091d33]'>Robert M Betz</h2>


                            </div>
                            <div className='bg-[#fff] shadow-sm space-y-5'
                                style={{ padding: "30px 10px 31px 30px", borderRadius: '0 30px' }}
                            ><img src="https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/rating.svg" alt="" />
                                <h4 className='text-lg font-medium text-[#4f5864]'>“I own an online fashion store and was looking for a good company for ghost mannequin photo editing service. My business was booming recently, and I had to upload around 2000-2500 images per day. So, I had to outsource ghost mannequin image editing services to Clipping Path Graphics. They are quite efficient in on-time deliveries and maintaining quality in their work. Looking forward to a long-term business!”</h4>

                                <h2 className='py-5 font-semibold text-xl text-[#091d33]'>Rosa F Peters</h2>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
        </div>
    );
};

export default SayClient;
