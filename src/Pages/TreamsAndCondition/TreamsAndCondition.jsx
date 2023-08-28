import TreamsAndConditionBannar from "../../Component/TreamsAndCondition/TreamsAndConditionBannar";
import TreamsConditionFeature from "../../Component/TreamsAndCondition/TreamsConditionFeature";
import TreamsPrivacyPolicy from "../../Component/TreamsAndCondition/TreamsPrivacyPolicy";


const TreamsAndCondition = () => {
    return (
        <div>
           <TreamsAndConditionBannar></TreamsAndConditionBannar>
           <TreamsPrivacyPolicy></TreamsPrivacyPolicy>
           <TreamsConditionFeature></TreamsConditionFeature>
        </div>
    );
};

export default TreamsAndCondition;