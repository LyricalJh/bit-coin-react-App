import { useQuery } from 'react-query';
import {Outlet, useLocation, useParams} from 'react-router-dom';
import { fetchCoinPrice } from './api';
import ApexChart from "react-apexcharts";
import { noWait } from 'recoil';

interface CoinPrice1 {
    time_open: number;
    time_close: number;
    open: string;
    high: string;
    low: string;
    close: string;
    volume: string;
    market_cap: number;
}

interface CoinPrice {
        id: string
        name: string,
        rank: number,
        symbol: string,
        circulating_supply: number,
        total_supply: number,
        max_supply: number,
        beta_value: number,
        first_data_at:string,
        last_updated: string,
        quotes: {
            USD: {
                price: number,
                volume_24h: number,
                volume_24h_change_24h: number,
                market_cap: number,
                market_cap_change_24h: number,
                percent_change_15m: number,
                percent_change_30m: number,
                percent_change_1h: number,
                percent_change_6h: number,
                percent_change_12h: number,
                percent_change_24h: number,
                percent_change_7d: number,
                percent_change_30d: number,
                percent_change_1: number,
                ath_price: number,
                ath_date: string,
                percent_from_price_ath: number
            }
        
    }
}




function Price(){
    const {coinId} = useParams();
    const {isLoading, data: CoinPrice} = useQuery<CoinPrice>(["priceCoin", coinId], () => fetchCoinPrice(coinId || ""));
    console.log(CoinPrice);
    return (
        <div>
            {isLoading ? "Loading.." : <ApexChart
            type="radar" height={350}
            style={{color:"black"}}
            series={[{
                name: "Sir",
                data: [CoinPrice?.circulating_supply || 0, CoinPrice?.total_supply || 0, CoinPrice?.max_supply || 0, Math.round(CoinPrice?.beta_value || 0), Math.round(CoinPrice?.quotes.USD.price || 0), Math.round( CoinPrice?.quotes.USD.ath_price || 0)  ],
            }]}
            options={{
                chart: {
                    height: 350,
                    type: 'radar',
                  },
                  title: {
                    text: CoinPrice?.name,
                  },
                  xaxis: {
                    categories: ['circulating_supply', 'total_supply', 'max_supply', 'beta_value', 'price','ath_price']
                  },
                  yaxis: {
                    show:false
                  }
            }}
        
            
            >
                </ApexChart>}
        </div>
        
    )
}

export default Price;