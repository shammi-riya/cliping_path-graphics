import Featurebtn from "./Featurebtn";


const FeatureList = ({featureListItem,specialfeatureimg}) => {
    return (
        <>
        <div className='feature-text lg:w-1/3 md:w-full text-white space-y-5 pt-10'>
                                <h2 className='text-3xl lg:text-5xl'>Our Special Features</h2>
                                <p className='text-xl font-medium'>
                                    Our skilled designers will do what it takes to offer you the most professional photo editing service maintaining quality. Our adjustments include:
                                </p>
                                <Featurebtn></Featurebtn>
                            </div>
                            <div className='feature-list lg:w-1/3 md:w-full text-white'>
                                {
                                    featureListItem.map((feature, index) => (
                                        <div className='flex lg:px-0 px-20 gap-2 lg-pt-3 pt-2' key={index}>
                                            <img
                                                src='https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/list-icon.svg'
                                                alt=''
                                            />
                                            <h4 className='lg:text-2xl pt-3 xl'>{feature}</h4>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='lg:w-1/3 md:w-full lg:p-0 p-8'>
                                <img style={{ borderRadius: '0 30px' }} src={specialfeatureimg} alt='Special Feature' />
                            </div></>
    );
};

export default FeatureList;