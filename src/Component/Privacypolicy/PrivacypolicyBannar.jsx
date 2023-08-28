import privacybannar from '../../assets/privacy-policy/policy.png'

const PrivacypolicyBannar = () => {
    return (
        <div className=" py-14  bg-no-repeat "
            style={{
                backgroundImage: `url("https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/policy-bg.svg")`
            }}>
            <div className='my-container'>
                <div className='grid mb-3 py-5 lg:px-5 px-10 lg:grid-cols-2 gap-5 grid-cols-1'>


                    <div>
                        < p className='lg:text-xl text-md  font-medium'><span className=' text-lg mb-2 cursor-pointer hover:text-[#ff8a00] transition-all duration-300 ease-in-out'>Home</span>  {'>'} <span className='opacity-70'> Privacy Policy</span></p>
                        <h3 className='text-[#091d33] text-4xl lg:text-5xl font-bold pt-9'>Legal Informations</h3>


                    </div>

                    <div>
                        <img className='p-4' src={privacybannar} alt="privacybannar" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacypolicyBannar;
