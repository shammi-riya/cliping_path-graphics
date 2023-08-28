import { useEffect } from "react";


const TreamsPrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);
    return (
        <div className='bg-[#f5f6fb] py-20'>
            <div className="grid grid-cols-12 lg:max-w-7xl mx-auto w-100 px-8">


                <div className="lg:col-span-4 col-span-12">
                    <h4 className='text-[#8A94A6] hover:text-[#FF8A00] text-xl font-semibold duration-200 '>Terms And Condition</h4>
                    <div className="flex items-center pt-4 lg:pt-12  gap-3">
                        <p><hr className="w-8 h-[2px] bg-[#FF8A00] border-0 rounded dark:bg-[#FF8A00]" /></p>
                        <p className='text-[#FF8A00] text-xl'>Terms And Conditions</p>
                    </div>

                </div>


                <div className="lg:col-span-8 lg:pt-0 pt-4 col-span-12">
                    <div className="space-y-3 text-[#4F5864] ">
                        <h2 className="text-2xl lg:text-4xl font-bold  text-[#091D33]">Terms and conditions</h2>
                        <p className="text-lg py-6 tracking-wide space-y-3">The material encompassing is this site what is possessed by www.clippingpathgraphics.com barring the prominent sign. Propagation is being prohibited by the notice of copyright yet isn’t limited for the format, plans, representation and so on. All the tradesmen’s rehashed in this site aren’t ensured to the engineer perceiving on the site. Unlawful use of this site may give a case or consider as an illicit offense. This site may add connections to the others step by step for offering further data. They don’t in directIn the event that you are requesting arrangement in the interest of any association, business, singular, you ought to simply battle your accreditation to perceive this term and afterward connect such association to this term of usage.</p>

                        <span className="py-6 text-lg ">You are only at risk for the substance which you send us in blended with photographs, design and messages. Then again, duplicate correcting exertion of any content photograph or plan into your records is confined aside from you have the reasonable approval and guarantee for all important consent and also you favor CLIPPINGPATHGRAPHICS.COM to method for the sake of yours.</span>

                        <p className="text-lg ">Your usage of this site and in addition any contention of use is the most imperative subject to the laws of U.S.A.

                        </p>
                    </div>

                    <div className="py-10">
                        <h4 className="font-bold text-2xl text-[#091D33]">Copyright Notice:</h4>
                        <div className="text-lg py-6 tracking-wide space-y-3 text-[#4F5864]">
                            <p className=" py-3 ">The contents of this site are preserved by clippingpathgraphics.com. All rights preserved some contents should be banned without any notice other than the following manner.</p>
                            <p className=" py-3 ">You can download or print some contents for your individual need and non-commercial purpose only.</p>
                            <p className="  ">If you admit the site in view of the resources of the objects you can copy for some parties for their individual purpose.</p>
                        </div>
                    </div>






                    <div style={{ borderRadius: '5px 50px 5px 50px' }}

                        className="py-6 bg-[#fff] lg:p-10 p-5">
                        <h4 className="font-bold text-2xl text-[#091D33]">What We Collect</h4>

                        {[
                            'Name of the person (clients) and company.',
                            'Addresses including email, contact no, zip code, country name.',
                            'And other information’s for offering as well as survey and contact.',


                        ].map((feature, index) => (
                            <div className='flex justify-start items-center lg:px-0  px-5 gap-2 lg-pt-3 pt-2' key={index}>
                                <img
                                    src='https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/list-icon.svg'
                                    alt=''
                                />
                                <h4 className='lg:text-xl pt-3 lg'>{feature}</h4>
                            </div>
                        ))}

                    </div>



                    <div className="py-8">
                        <h4 className="font-bold text-2xl text-[#091D33]">Privacy:</h4>
                        <p className="text-lg py-6 tracking-wide space-y-3 text-[#4F5864]">CLIPPINGPATHGRAPHICS.COM’s private arrangement uses to apply of this site and uses through the proposals. For the examination of “CLIPPINGPATHGRAPHICS.COM” private approach.Before using the site you ought to know the outcomes of online communicates which are never completely secured.</p>
                    </div>

                    <div className="py-6">
                        <h4 className="font-bold text-2xl text-[#091D33]">Secure Account Password and Security:</h4>
                        <p className="text-lg py-6 tracking-wide space-y-3 text-[#4F5864]">It will rush to know most recent refresh in the event that you are enlisted by a record in our site. In any case, you need to hold your record data yourself. You are completely secured here. For any abuse of your record by another person please educate clippingpath.com.de however in the event that you don’t then clippingpathgraphics.com won’t be obligated for further feedback.</p>
                    </div>

                    <div className="py-6">
                        <h4 className="font-bold text-2xl text-[#091D33]">The method of Payment:</h4>
                        <p className="text-lg py-6 tracking-wide space-y-3 text-[#4F5864]">CLIPPINGPATHGRAPHICS.COM doesn’t propose an installment before a work is done and sent to the client. However client may be inquired as to whether it was the first. Orchestrate that client amount bigger than $50. A simple assentation frame sending by CLIPPINGPATHGRAPHICS.COM may be basic for the clients to join and it maintains all authority to dismiss unlawful propose with no notice.</p>
                    </div>

                    <div className="py-6">
                        <h4 className="font-bold text-2xl text-[#091D33]">Consumption of Your Images:</h4>
                        <p className="text-lg py-6 tracking-wide space-y-3 text-[#4F5864]">CLIPPINGPATHGRAPHICS.COM sees the benefit to utilize any free trial photo for its publicizing reason, for instance, dispersing into the site as case with no endorsement of proprietor. In case you wish you can drop or stop these by teaching us with a mail to info@clippingpathsource.com. If you give us endorsement to perform, we may ask for your approval to use your accommodating pictures into our site as our occupation case.</p>
                    </div>
                    <div className="py-6">
                        <h4 className="font-bold text-2xl text-[#091D33]">System of Applying Cookies:</h4>
                        <p className="text-lg py-3 tracking-wide space-y-3 text-[#4F5864]">Treat is a little record requesting that approval be situated on your tablet’s hard plate. Treats allow web applications to act in light of you considering as a man.</p>
                        <p className="text-lg py-3 tracking-wide space-y-3 text-[#4F5864]">We apply log movement treats to perceive the pages lived using. We just adjust it under customer’s need and use this information for both geometric examination and information investigation from the structure.</p>
                    </div>
                    <div className="py-6">
                        <h4 className="font-bold text-2xl text-[#091D33]">Disclaimer of Website:</h4>


                        <div className="text-lg  tracking-wide space-y-3 text-[#4F5864]">
                            <p className="py-3">This data controlled into this site is for basic data reasons simply just and it is given through CLIPPINGPATHSOURCE.COM. At the comparable time as we endeavor to stay up with the latest and correct however we give no guarantees of any sort dependability, precision, openness or appropriateness through adoration to the site and the data, administrations, items, relating design can be confined on the site for any expectation.</p>


                            <p className="py-3">Including without constraint, considerable or roundabout misfortune or whatever other harms happening from loss of benefits are starting out of and in addition in relationship among the usage of this site. Despite the fact that this site for which you are skilled to connection to different locales which aren’t overseen by CLIPPINGPATHGRAPHICS.COM.</p>


                            <p className="py-3">We’ve no control around the substance and also accessibility of locales of person. The expansion of any connections doesn’t include a reference or bolster the perspectives basically. In any case, CLIPPINGPATHGRAPHICS.COM takes no risk for the site being locked in for some mechanical issues far from our overseeing.</p>
                            </div>
                </div>
                </div>
                </div>
                </div>


                
        

    );
};

export default TreamsPrivacyPolicy;