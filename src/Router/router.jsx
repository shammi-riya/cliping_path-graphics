
import Main from "../Layout/Main";
import Privacypolicy from "../Pages/Privacypolicy/Privacypolicy";
import ServicePage from "../Pages/Service/ServicePage";
import { createBrowserRouter} from "react-router-dom";





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
        ]

    },
   
]);

export default router;