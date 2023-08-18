

const SectionHeading = ({Title,Subtitle}) => {
    return (
        <div>
           <h2 className='text-[#091d33] lg:text-5xl text-3xl font-bold'>{Title}</h2> 
           <p className='text-lg font-normal pt-3 text-[#4f5864]'>{Subtitle}</p>
        </div>
    );
};

export default SectionHeading;