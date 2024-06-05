import { RouterProvider } from "react-router-dom";
import Context from "./context/context";
import RoutesComponent from "./routes/routes";


const App = ()=>{
    return(
        <Context>
            <RouterProvider router={RoutesComponent}/>
        </Context>
    )
}


export default App;