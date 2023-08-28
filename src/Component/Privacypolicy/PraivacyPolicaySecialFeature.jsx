
import featureimg from '../../assets/privacy-policy/flim.jpg.webp'
import FeatureList from '../../Reusable/FeatureList';
const PraivacyPolicaySecialFeature = () => {


    const featureListItem=[
        'Ghost Mannequin Neck Joint Services',
        '3D Ghost Mannequin',
        'Product Shadow Service',
        'Color Correction and Modification',
        'Realistic and Natural Shadow',
        'Drop Shadow',
        'Reflection Shadow',
        'Manual Clipping',
        'Smooth Anchoring',
    ]

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
                        <FeatureList
                        featureListItem={featureListItem}
                        specialfeatureimg={featureimg}
                        >

                        </FeatureList>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default PraivacyPolicaySecialFeature;