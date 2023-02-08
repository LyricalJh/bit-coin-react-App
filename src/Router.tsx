import {BrowserRouter, Route, Routes} from "react-router-dom";
import Coins from './routes/Coins';
import Coin from './routes/Coin';



interface ICoin {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string,
}


interface IRouter {
    toggleDark: () => void;
    isDark: boolean;

}

function Router(){
    
    return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
           <Route  path='/:coinId/*' element={<Coin />}>
           </Route>
           <Route  path='/' element={<Coins />}>
           </Route>
        </Routes>
    </BrowserRouter>);
   
}

export default Router;