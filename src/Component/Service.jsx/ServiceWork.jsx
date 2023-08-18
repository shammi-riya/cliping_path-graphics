import SectionHeading from '../../Reusable/SectionHeading';
import workImage from '../../assets/say-client-bg/work.png'

const ServiceWork = () => {


  const steps = [
    {
        icon: 'https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/list-icon.svg',
        text: 'First, the assigned graphics designer draws a line around the mannequin and cuts it out from the background.'
    },
    {
        icon: 'https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/list-icon.svg',
        text: 'Then, the neckline is marked with a clipping tool, and the rest of the body is gradually marked for cutting.'
    },
    {
        icon: 'https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/list-icon.svg',
        text: 'When the mannequin is marked correctly, it’s removed from the picture.'
    },
    {
        icon: 'https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/list-icon.svg',
        text: 'A white background is added to put more focus on the dress.'
    },
    {
        icon: 'https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/list-icon.svg',
        text: 'To fix the loss of quality due to editing, our expert designer will make the necessary resizing and retouches to the image.'
    }
];






    return (
      <div className='bg-[#f5f6fb]'>
      <div className=' my-container'>
          <div className='flex flex-wrap-reverse gap-6 justify-center md:justify-between lg:px-0 px-8  lg:justify-between items-center lg:flex-nowrap md:flex-wrap'>
              <div className='space-y-4 lg:w-1/2 md:w-full w-full px-5'>

                <SectionHeading
                Title='How We Work?'
                Subtitle='Now, let’s go through how we ensure the best ghost mannequin service.'
                >
                </SectionHeading>
           
                  {steps.map((step, index) => (
                      <div key={index} className='flex gap-2 items-start lg-pt-3 pt-2'>
                          <img src={step.icon} alt='' />
                          <h4 className='text-[#4f5864] lg:text-2xl xl'>{step.text}</h4>
                      </div>
                  ))}
              </div>

              <div>
                  <img className='h-full w-full lg:pt-0 pt-9' src={workImage} alt='Work' />
              </div>
          </div>
      </div>
  </div>
    );
};

export default ServiceWork;