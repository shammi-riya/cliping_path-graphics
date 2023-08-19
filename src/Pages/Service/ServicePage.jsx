import Clientsay from "../../Component/Clientsay";
import Faq from "../../Component/Faq/Faq";
import OurPricing from "../../Component/Faq/OurPricing";
import BannarSurvice from "../../Component/Service.jsx/BannarSurvice";
import InstantQuote from "../../Component/Service.jsx/InstantQuote";
import MannequinService from "../../Component/Service.jsx/MannequinService";
import ServiceOfeerd from "../../Component/Service.jsx/ServiceOfeerd";
import ServiceWork from "../../Component/Service.jsx/ServiceWork";
import SpecialFeature from "../../Component/Service.jsx/SpecialFeature";

import Serviceportfolio from "../../Component/Service/ServicePortfolio/Serviceportfolio ";
import ScrollTop from "../../Reusable/ScrollTop";


const ServicePage = () => {
    return (
        <div>
            <BannarSurvice></BannarSurvice>
            <InstantQuote></InstantQuote>  
            <div className="bg-slate-100">
            <Clientsay></Clientsay>                    
           <Serviceportfolio></Serviceportfolio>
            </div>          
            <ServiceWork></ServiceWork>
            <SpecialFeature></SpecialFeature>
           <div className="bg-slate-100">
           <MannequinService></MannequinService>           
            <ServiceOfeerd></ServiceOfeerd>
            <OurPricing></OurPricing>
            <Faq></Faq>            
           </div>
           <ScrollTop></ScrollTop>
            
        </div>
    );
};

export default ServicePage;