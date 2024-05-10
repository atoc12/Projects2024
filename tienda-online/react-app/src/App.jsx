import Context from "./context/context";
import RoutesComponent from "./routes/routes";


const App = ()=>{
    return(
        <Context>
            <RoutesComponent/>
        </Context>
    )
}


export default App;