
import Featurebtn from '../../Reusable/Featurebtn';
import specialfeatureimg from '../../assets/feature/ghost-manniquin.webp';

const SpecialFeature = () => {
    return (
        <div
            style={{
                backgroundImage: 'url("https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/hero-bg.svg")',
            }}
            className='bg-[#1e2b52]   bg-cover lg:h-[70vh] sm:h-[120vh] bg-no-repeat'
        >
            <div className=' top-0 left-0 h-auto w-full bg-[#1e2b52] '>
                <div className='lg:max-w-7xl mx-auto w-full lg:px-0 px-5'>
                    <div className='flex justify-center items-center'>
                        <div className='lg:flex items-center py-10 justify-between gap-6'>
                            <div className='feature-text lg:w-1/3 md:w-full text-white space-y-5'>
                                <h2 className='text-3xl lg:text-5xl'>Our Special Features</h2>
                                <p className='text-xl font-medium'>
                                    Our skilled designers will do what it takes to offer you the most professional photo editing service maintaining quality. Our adjustments include:
                                </p>
                                <Featurebtn></Featurebtn>
                            </div>
                            <div className='feature-list lg:w-1/3 md:w-full text-white'>
                                {[
                                    'Ghost Mannequin Neck Joint Services',
                                    '3D Ghost Mannequin',
                                    'Product Shadow Service',
                                    'Color Correction and Modification',
                                    'Realistic and Natural Shadow',
                                    'Drop Shadow',
                                    'Reflection Shadow',
                                    'Manual Clipping',
                                    'Smooth Anchoring',
                                ].map((feature, index) => (
                                    <div className='flex lg:px-0 px-20 gap-2 lg-pt-3 pt-2' key={index}>
                                        <img
                                            src='https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/list-icon.svg'
                                            alt=''
                                        />
                                        <h4 className='lg:text-2xl pt-3 xl'>{feature}</h4>
                                    </div>
                                ))}
                            </div>
                            <div className='lg:w-1/3 md:w-full lg:p-0 p-8'>
                                <img style={{ borderRadius: '0 30px' }} src={specialfeatureimg} alt='Special Feature' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialFeature;
