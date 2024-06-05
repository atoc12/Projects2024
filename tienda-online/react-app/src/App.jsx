import { BrowserRouter, RouterProvider,  } from "react-router-dom";
import Context from "./context/context";
import { routerElement } from "./routes/routes";


const App = ()=>{
    return(
        <Context>
            <RouterProvider router={routerElement} />
        </Context>
    )
}


export default App;