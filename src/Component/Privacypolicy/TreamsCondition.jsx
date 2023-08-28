

const TreamsCondition = () => {
    return (
        <div className='bg-[#f5f6fb] py-20'>
            <div className="grid grid-cols-12 lg:max-w-7xl mx-auto w-100 px-8">


                <div className="lg:col-span-4 col-span-12">
                    <div className="flex items-center   gap-3">
                        <p><hr className="w-8 h-[2px] bg-[#FF8A00] border-0 rounded dark:bg-[#FF8A00]" /></p>
                        <p className='text-[#FF8A00] text-xl'>Privacy Policy</p>
                    </div>
                    <h4 className='text-[#8A94A6] hover:text-[#FF8A00] text-xl font-semibold duration-200 pt-4 lg:pt-12'>Terms And Condition</h4>
                </div>


                <div className="lg:col-span-8 lg:pt-0 pt-4 col-span-12">
                    <div className="space-y-3 text-[#4F5864] ">
                        <h2 className="text-2xl lg:text-4xl font-bold  text-[#091D33]">Privacy Policy | Protection</h2>
                        <p className="text-lg py-6 tracking-wide space-y-3">Any data you give us is not thoroughly secure. It can be decoded by another person. By utilizing <span className="text-lg lg:font-bold font-semibold cursor-pointer text-[#0075ff]  hover:text-[#ff6900] hover:border-0 transition-all duration-300 ease-in-out"
                        >ClippingPathgraphics.com </span>  you can’t yet recognize this reality.</p>

                        <span className="py-6 text-lg ">  ClippingPathgraphics.com dependably secures any data which is given by our customers when you give data to us through our site.</span>

                        <p className="text-lg ">We Clipping Path Graphics are focused on our customers to secure their protection when they are utilizing their personality and need not to be abused by us by any methods and, which is finished by us, and guarantee by this protection proclamation.</p>
                    </div>

                    <div className="py-10">
                        <h4 className="font-bold text-2xl text-[#091D33]">Installment:</h4>
                        <p className="text-lg py-6 tracking-wide space-y-3 text-[#4F5864]">New Customers need to pay some sum before the work begins. An assertion shape needs to top off by clients send by clippingpathgraphics.com and CPG holds the privilege to dismiss any propose or unlawful arrangement from clients with no notice</p>
                    </div>

                    <div className="py-4">
                        <h4 className="font-bold text-2xl text-[#091D33]">Benefit quality:</h4>
                        <p className="text-lg py-6 tracking-wide space-y-3 text-[#4F5864]"><span className="text-lg lg:font-bold font-semibold cursor-pointer text-[#0075ff]  hover:text-[#ff6900] hover:border-0 transition-all duration-300 ease-in-out"
                        >ClippingPathgraphics.com </span> gives 100% administration quality. On the off chance that you are not content with our outline then we can make some rectification administration in the ways you like. In any case, we surmise that we didn’t have to chip away at your upgrade in light of the fact that CPG is the best stage for visual communication.</p>
                    </div>


                    <div className="py-6">
                        <h4 className="font-bold text-2xl text-[#091D33]">Discount:</h4>
                        <p className="text-lg py-6 tracking-wide space-y-3 text-[#4F5864]">We discount your cash following 30 days of having buy from our site on the off chance that you assert showing every single legitimate reason</p>
                    </div>


                    <div style={{ borderRadius: '5px 50px 5px 50px' }}
                    
                        className="py-6 bg-[#fff] lg:p-10 p-5">
                            <h4 className="font-bold text-2xl text-[#091D33]">Name of our customer and occupation title:</h4>

                            {[
                                    'Contact data including email address',
                                    'Statistic data, for example, postcode, inclinations and interests',
                                    'What is the motivation behind the data which we assemble',
                                    'We require all these data to give our customers most ideal administration',
                                    'How we keep the data of our customers',
                                    'It’s critical to utilize or customer’s data to give better administration',
                                    'it will be better for us and our customers to send them messages to advance our new items, utilizing their given email address.',
                                    
                                ].map((feature, index) => (
                                    <div className='flex justify-start items-center lg:px-0  px-5 gap-2 lg-pt-3 pt-2' key={index}>
                                        <img
                                            src='https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/list-icon.svg'
                                            alt=''
                                        />
                                        <h4 className='lg:text-xl pt-3 lg'>{feature}</h4>
                                    </div>
                                ))}

                                <p className="text-lg py-6 tracking-wide space-y-3 text-[#4F5864]">We may change our site to make it less demanding or agreeable, where we may get in touch with you through email, phone fax or via mail.</p>
                        </div>



                    <div className="py-6">
                        <h4 className="font-bold text-2xl text-[#091D33]">Connections to different sites:</h4>
                        <div className="text-lg  tracking-wide space-y-3 text-[#4F5864]">
                            <p className="py-3">Site we have may contain connections to other site for our own advantage. You should be educated that, we don’t have any control over the other site where you may put a connection and you ought to be watchful about doing as such.</p>
                            <p className="py-3">Controlling your own data: You may limit the gathering or utilization of your own data in the accompanying ways:</p>

                            <p className="py-3">On the off chance that you would prefer not to give the data to be given while you are rounding out the frame, kindly don’t fill it out, and in the event that you as of now have done it and you have altered your opinion, as soon you tell us through our email address- info@clippingpathgraphics.com, we will void all the undesirable data that you have given.</p>

                            <p className="py-3">It won’t occur that we will give your own data to third available to be purchased or some other purposes; we may utilize it for our very own motivations for limited time utilization as it were.</p>

                            <p className="py-3">You may ask for us for points of interest of individual data which we hold about you following the Data Protection Act 1998. On the off chance that you might want a duplicate of the data hung on you please write to us mail.</p>

                            <p className="py-3">In the event that you trust that any data we have on you is wrong, please login to your record and refresh your profile or mail to us as quickly as time permits, at our mail address. We will revise any data observed to be off base.</p>
                        </div>

                        <div className="py-6">
                            <h4 className="font-bold text-2xl text-[#091D33]">Utilization OF YOUR PHOTOS</h4>
                            <p className="text-lg py-6 tracking-wide space-y-3 text-[#4F5864]">Clippingpathgraphics.com completely shields your pictures from being utilized economically or actually. Be that as it may, clippingpathgraphics.com has the privilege to utilize free trail pictures in site to show work quality or for organization improvement issue. Be that as it may, “CPG” may request your consent to utilize your standard pictures for production. It’s dependent upon you whether you are concurred or not. CPG won’t compel you on that issue. Be that as it may, on the off chance that you see any utilization of your pictures at any site or for any reason instantly educate to clippingpathgraphics.com and it will secure your rights</p>
                        </div>


                        <div style={{ borderRadius: '5px 50px 5px 50px' }}
                    
                        className="py-6 bg-[#fff] p-5 lg:p-10">
                            <h4 className="font-bold text-2xl text-[#091D33]">Trates</h4>
                            <p className="text-lg py-3 tracking-wide space-y-3 text-[#4F5864]">A modest programming that introduces your PC with your authorization. It helps us</p>

                            {[
                                    'To perceive your PC while you visit our site',
                                    'For following you while you explore our site',
                                    'To empower any web based business offices',
                                    'To dissect the utilization of our site',
                                    'To customize the site',
                                    'Building profile of your web enduring',
                                    
                                    
                                ].map((feature, index) => (
                                    <div className='flex justify-start items-center lg:px-0  gap-2 lg-pt-3 pt-2 w-full' key={index}>
                                        <img
                                            src='https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/list-icon.svg'
                                            alt=''
                                        />
                                        <h4 className='lg:text-xl pt-3 lg'>{feature}</h4>
                                    </div>
                                ))}

                                <p className="text-lg py-6 tracking-wide space-y-3 text-[#4F5864]">Take note of that treats don’t permit us to translate on your own information. You can abstain from utilizing treats by missing a few advantages</p>
                        </div>


                        <div className="py-8">
                            <h4 className="font-bold text-2xl text-[#091D33]">Site disclaimer:</h4>
                            <p className="text-lg py-6 tracking-wide space-y-3 text-[#4F5864]">It shields ‘clippingpathgraphics.com’ from any illicit move made by any outsider. It covers all issue in the way of working of a site. All the data gave in CPG are to general utilizing as it were. On the off chance that you utilize this site you need to recognize to all terms and conditions. For any information harming issue CPG is not at risk for it unless it is finished by organization itself on the off chance that you can demonstrate.

                                CPG tries hard to be refreshed and run this site easily. In any case, CPG assumes no liability nor will be obligated of being incidentally inaccessible because of any specialized or outsider issue that are outside our ability to control.</p>
                        </div>



                    </div>
                </div>
            </div>
        </div>

    );
};

export default TreamsCondition;
