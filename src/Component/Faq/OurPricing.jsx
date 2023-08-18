
import prcicing from '../../assets/phiricing/price-img.png'; // Make sure the image path is correct

const OurPricing = () => {
    return (
        <div className="">
            <div className=" w-full lg:max-w-7xl my-10 mx-auto bg-no-repeat  relative bg-white py-20 px-10 rounded-2xl" style={{
                backgroundImage: `url("https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/hero-bg.svg")`,
            }}>

                <div className="h-full w-full flex flex-wrap lg:flex-nowrap justify-between items-center">
                    <div className="flex flex-wrap lg:flex-nowrap items-center gap-5 w-100 lg:w-[65%]">
                        <div>
                            <img src={prcicing} alt="Pricing" />
                        </div>
                        <div>
                            <h2 className="lg:text-4xl text-2xl font-bold">Our Pricing</h2>
                            <p className="text-xl pt-3">Our service comes with the best deals at an affordable price. See our pricing to place an order!</p>
                        </div>
                    </div>
                   <div>
                   <div className=" w-[170px] z-40 bg-white rounded-xl lg:mt-0 mt-5 p-5 shadow-lg">
                        <span className="block text-gray-800 text-lg text-left mb-2">Starting At</span>
                        <span className="block font-bold text-yellow-500 text-center text-3xl">50 <span className="text-2xl">¢</span></span>
                        <span className="block text-right text-gray-800 text-lg">Per Image</span>
                    </div>
                   </div>
                </div>

            </div>
        </div>
    );
};

export default OurPricing;
