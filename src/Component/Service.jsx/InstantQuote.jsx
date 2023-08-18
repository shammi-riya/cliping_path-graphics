
import quiteImage from '../../assets/feature/lastly-2.webp'
const InstantQuote = () => {
    return (
        <div className=" py-14  bg-no-repeat "
            style={{
                backgroundImage: `url("https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/shape-bg.jpg")`
            }}>
            <div className='my-container'>
                <div className='grid mb-3 lg:grid-cols-2 gap-5 grid-cols-1'>

                    <div>
                        <img className='p-4' src={quiteImage} alt="" />
                    </div>
                    <div>
                        <div>
                            <h3 className='lg:text-4xl text-[#091d33] lg:font-bold font-semibold text-3xl'>Avail A Free Ghost Mannequin Service by Becoming Our Client</h3>
                            <h6 className='text-lg pt-3'>By becoming our client, you’re availing of a free ghost mannequin effect <span className='text-blue-500 text-lg mb-2 cursor-pointer hover:text-yellow-500 transition-all duration-300 ease-in-out'>photo editing</span> to assess our work. See if our free trial meets your requirements, and then place the order. We’re always available to provide a top-notch service meeting your needs.</h6>
                        </div>

                        <div className='py-8'>
                            <h4 className='lg:text-3xl text-[#091d33] lg:font-bold font-semibold text-2xl'>Get an Instant Quote</h4>
                            <h5 className='text-lg pt-3'>So, What Are You Waiting For? Dial our number or reach out to us through live chat now to get an  <span className='text-blue-500 text-lg mb-2 cursor-pointer hover:text-yellow-500 transition-all duration-300 ease-in-out'>instant quote!</span>  Our 300+ editing experts are always available to provide you with an excellent photo editing service. If you want to test our service first, avail the service for free and see if it pleases you.</h5>
                            <div className='mt-5'>
                                <button className='text-white my-4 transition-all duration-300 ease-in-out text-xl font-bold bg-[#ff8a00] hover:bg-[#ff8800c0] rounded-full py-4 px-14 '>
                                    Get started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstantQuote;