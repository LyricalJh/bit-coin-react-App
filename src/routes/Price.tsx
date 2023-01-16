import { useQuery } from 'react-query';
import {Outlet, useLocation, useParams} from 'react-router-dom';
import { fetchCoinPrice } from './api';
import ApexChart from "react-apexcharts";

interface CoinPrice {
    time_open: number;
    time_close: number;
    open: string;
    high: string;
    low: string;
    close: string;
    volume: string;
    market_cap: number;
}


function Price(){
    const {coinId} = useParams();
    const {isLoading, data} = useQuery<CoinPrice>(["priceCoin", coinId], () => fetchCoinPrice(coinId? coinId: ""));

    return (
        <div>
            {isLoading ? "Loading.." : <ApexChart
            type='line'
            >
                
                </ApexChart>}
        </div>
        
    )
}

export default Price;