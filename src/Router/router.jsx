

import Main from "../Layout/Main";
import Privacypolicy from "../Pages/Privacypolicy/Privacypolicy";
import ServicePage from "../Pages/Service/ServicePage";
import { createBrowserRouter} from "react-router-dom";
import TreamsAndCondition from "../Pages/TreamsAndCondition/TreamsAndCondition";





const router = createBrowserRouter([


    
    {
        path: "/",
        element: <Main></Main>,
        children:[

            {
                path: "/",
                element: <ServicePage></ServicePage>,
        
            },
            {
                path: "/privacypolicy",
                element: <Privacypolicy></Privacypolicy>,
        
            },
            {
                path: "/treamsCondition",
                element: <TreamsAndCondition></TreamsAndCondition>
        
            },
        ]

    },
   
]);

export default router;