import  { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollTop = () => {
    const [showBtn, setShowBtn] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleScroll = () => {
        if (window.scrollY > window.innerHeight) {
            setShowBtn(true);
        } else {
            setShowBtn(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className={`btn bg-[#ff6900] p-3 text-2xl text-center rounded-full text-light text-white fs-6 ${showBtn ? 'd-block' : 'd-none'}`}
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                zIndex: '100',
                transition: 'opacity 0.3s',
                opacity: showBtn ? 1 : 0,
            }}
        >
            <FaArrowUp />
        </button>
    );
};

export default ScrollTop;
