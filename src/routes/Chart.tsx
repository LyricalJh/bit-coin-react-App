import { useQuery } from 'react-query';
import {Outlet, useParams, useOutletContext} from 'react-router-dom';
import { fetchCoinHistory } from './api';
import ApexChart from "react-apexcharts";
import {useRecoilValue} from 'recoil';
import {isDarkAtom} from './atoms'

interface IHistorical {
    time_open: number;
    time_close: number;
    open: string;
    high: string;
    low: string;
    close: string;
    volume: string;
    market_cap: number;
}



//위 인터페이스가 [] 이 되어야 하는 이유는 이것은 그저 하루치의 데이터 이고 우리는 20개의 객채의 데이터를 배열에 담아 가져오니까 ~ 배열로 설정해줘야한다,

function Chart(){
    const {coinId} = useParams();
    const isDark = useRecoilValue(isDarkAtom);
    const {isLoading, data} = useQuery<IHistorical[]>(["ohlcv", coinId], ()=> fetchCoinHistory(coinId ? coinId: ""),{refetchInterval: 10000})
       return (
        <div>
          {isLoading ? (
            "Loading chart..."
          ) : (
            <ApexChart
              type="line"
              series={[
                {
                  name: "Price",
                  data: data?.map((price) => parseFloat(price.close)) ?? [],
                },
              ]}
              options={{
                theme: {
                  mode: isDark ? 'dark' : "light"
                },
                chart: {
                  height: 300,
                  width: 500,
                  toolbar: {
                    show: false,
                  },
                  background: "transparent",
                },
                grid: { show: false },
                stroke: {
                  curve: "smooth",
                  width: 4,
                },
                yaxis: {
                  show: false,
                },
                xaxis: {
                  axisBorder: { show: false },
                  axisTicks: { show: false },
                  labels: { show: false },
                  type: "datetime",
                  categories: data?.map((price) => price.time_close),
                  
                },
                fill: {
                  type: "gradient",
                  gradient: { gradientToColors: ["#0be881"], stops: [0, 100] },
                },
                colors: ["#0fbcf9"],
                tooltip: {
                  y: {
                    formatter: (value) => `$${value.toFixed(2)}`,
                  },
                },
              }}
            />
          )}
        </div>
      );
    }
       


export default Chart;