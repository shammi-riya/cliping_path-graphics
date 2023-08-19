import SectionHeading from "../Reusable/SectionHeading";
import ClienSayLogo from '../assets/say-client-bg/trustpilotlogo.png'

const Clientsay = () => {
    return (
        <div className="w-full lg:h-[80vh] sm:h-[120vh] bg-no-repeat bg-center " style={{ backgroundImage: 'url(https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/map.svg' }}>

       
            <div className="my-container ">
                <div className="text-center">
                    <SectionHeading
                        Title='What Our Clients Have to Say About Us'
                        Subtitle='We take our customer reviews seriously and always look for areas of growth. See what our clients said about our service.'
                    ></SectionHeading>

                    <div className="flex justify-center items-center py-3">
                        <img src={ClienSayLogo} alt="" />
                        <h2 className="text-xl"><span>TrustScore 4.8 |</span>Review</h2>
                    </div>
                </div>





            <div className="grid lg:px-0 md:px-10 lg:grid-cols-3 pt-5 grid-cols-1 gap-8  text-[#4f5864]">
                <div style={{borderRadius:'30px 0'}}
                className="bg-[#fff] shadow-sm lg:p-10 p-5 space-y-4">
                    <img src="https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/rating.svg" alt="" />

                    <h4 className="text-lg">“Ghost mannequin editing is pretty difficult. I’ve already had a bad experience with another company. So I wasn’t sure whether Clipping Path Graphics could do a good job or not. But, they turned out to be true to their words and impressed me with amazing ghost mannequin editing service.”</h4>
                    <h5 className="font-semibold text-xl">Barbara T Moore</h5>
                </div>
                <div style={{borderRadius:'30px 0'}}
                className="bg-[#fff] shadow-sm lg:p-10 p-5 space-y-4">
                    <img src="https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/rating.svg" alt="" />

                    <h4 className="text-lg">“Ghost mannequin editing is pretty difficult. I’ve already had a bad experience with another company. So I wasn’t sure whether Clipping Path Graphics could do a good job or not. But, they turned out to be true to their words and impressed me with amazing ghost mannequin editing service.”</h4>
                    <h5 className="font-semibold text-xl">Barbara T Moore</h5>
                </div>
                <div style={{borderRadius:'30px 0'}}
                className="bg-[#fff] shadow-sm lg:p-10 p-5 space-y-4">
                    <img src="https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/rating.svg" alt="" />

                    <h4 className="text-lg">“Ghost mannequin editing is pretty difficult. I’ve already had a bad experience with another company. So I wasn’t sure whether Clipping Path Graphics could do a good job or not. But, they turned out to be true to their words and impressed me with amazing ghost mannequin editing service.”</h4>
                    <h5 className="font-semibold text-xl">Barbara T Moore</h5>
                </div>
            </div>
              </div>
            </div>
            
       
    );
};

export default Clientsay;