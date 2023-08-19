

const ServiceOfeerd = () => {
    return (
        <div className="bg-slate-100 py-10 sticky ">
            <div className='my-container py-10 relative bg-cover lg:h-[70vh] md:h-[100vh] sm:h-[100vh] bg-no-repeat'
                style={{
                    backgroundImage: 'url("https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/offer-bg.svg")',
                }}>

                <div className="py-10">
                    <div className="text-center space-y-3  ">
                        <h2 className="lg:text-4xl text-[#091d33] text-2xl font-semibold lg:font-bold">We Offer More Than Just Ghost <span className="lg:block inline"> Mannequin Photoshop Service</span></h2>
                        <p className="text-xl text-[#4f5864]">We offer the most cost-effective and custom editing service catering to your needs!</p>
                    </div>

                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:px-0 md:px-20 py-10">

                        {[
                            'Clipping Path Image Editing Service for Amazon',
                            '3D Ghost Mannequin',
                            'Image Cutout Service',
                            'Ghost Mannequin T-shirt',
                            'Jewelry Mannequin Editing',
                            'Jewelry Clipping Path Service',
                            'Photo Adjustments and Editing',
                            'Online Retailers’ Clipping Path Service',
                            'Closed Vector Path and Shape Editing',
                            'Multiple Clipping Path Service',
                            'Bulk Image Clipping Service',
                            'Removing Specific Item from Background',
                            'Product Clipping Path',
                            'Background Editing for Ecommerce and Fashion Industry',
                        ].map((feature, index) => (
                            <div className='flex gap-3 lg-pt-3 pt-2 ' key={index}>
                                <p className="text-md"><img
                                    src='https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/list-icon.svg'
                                    alt=''
                                /></p>
                                <h4 className='lg:text-2xl text-xl text-[#4f5864]'>{feature}</h4>
                            </div>
                        ))}



                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServiceOfeerd;