

const ServiceImageOverlay  = ({ src, alt, overlaySrc }) => {
    return (
        <div className='relative group'>
        <img className='hover:opacity-0 h-full w-full transition-opacity duration-300' src={src} alt={alt} />
        <img
            className='absolute group-hover:opacity-100 inset-0 h-full w-full object-cover transition-opacity duration-300 opacity-0'
            src={overlaySrc}
            alt={`${alt} Overlay`}
        />
    </div>
    );
};

export default ServiceImageOverlay ;