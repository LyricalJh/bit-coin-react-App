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
    const {isLoading, data: coinHistory} = useQuery<IHistorical[]>(["ohlcv", coinId], ()=> fetchCoinHistory(coinId ? coinId : ""),{refetchInterval: 10000})
    console.log(coinHistory ? coinHistory[0].time_close : 0)
       return (
        <div>
          {isLoading ? (
            "Loading chart..."
          ) : (
            <ApexChart
              type="candlestick"
              height={350}
              width={1000}
              style={{color:"black"}}
              series={[{
                data: [
                  {
                    x: new Date(coinHistory ? coinHistory[0].time_open : 0),
                    y: [coinHistory ? coinHistory[0].open : 0,coinHistory ? coinHistory[0].high : 0, coinHistory ? coinHistory[0].low : 0,coinHistory?  coinHistory[0].close : 0  ]
                  },
                  {
                    x: new Date(coinHistory ? coinHistory[1].time_open : 0),
                    y: [coinHistory ? coinHistory[1].open : 0,coinHistory ? coinHistory[1].high : 0, coinHistory ? coinHistory[1].low : 0,coinHistory?  coinHistory[1].close : 0  ]
                  },
                  {
                    x: new Date(coinHistory ? coinHistory[2].time_open : 0),
                    y:[coinHistory ? coinHistory[2].open : 0,coinHistory ? coinHistory[2].high : 0, coinHistory ? coinHistory[2].low : 0,coinHistory?  coinHistory[2].close : 0  ]
                  },
                  {
                    x: new Date(coinHistory ? coinHistory[3].time_open : 0),
                    y:[coinHistory ? coinHistory[3].open : 0,coinHistory ? coinHistory[3].high : 0, coinHistory ? coinHistory[3].low : 0,coinHistory?  coinHistory[3].close : 0  ]
                  },
                  {
                    x: new Date(coinHistory ? coinHistory[4].time_open : 0),
                    y: [coinHistory ? coinHistory[4].open : 0,coinHistory ? coinHistory[4].high : 0, coinHistory ? coinHistory[4].low : 0,coinHistory?  coinHistory[4].close : 0  ]
                  },
                  {
                    x: new Date(coinHistory ? coinHistory[5].time_open : 0),
                    y: [coinHistory ? coinHistory[5].open : 0,coinHistory ? coinHistory[5].high : 0, coinHistory ? coinHistory[5].low : 0,coinHistory?  coinHistory[5].close : 0  ]
                  },
                  {
                    x: new Date(coinHistory ? coinHistory[6].time_open : 0),
                    y:[coinHistory ? coinHistory[6].open : 0,coinHistory ? coinHistory[6].high : 0, coinHistory ? coinHistory[6].low : 0,coinHistory?  coinHistory[6].close : 0  ]
                  },
                  {
                    x: new Date(coinHistory ? coinHistory[7].time_open : 0),
                    y: [coinHistory ? coinHistory[7].open : 0,coinHistory ? coinHistory[7].high : 0, coinHistory ? coinHistory[7].low : 0,coinHistory?  coinHistory[7].close : 0  ]
                  },
                  {
                    x: new Date(coinHistory ? coinHistory[8].time_open : 0),
                    y:[coinHistory ? coinHistory[8].open : 0,coinHistory ? coinHistory[8].high : 0, coinHistory ? coinHistory[8].low : 0,coinHistory?  coinHistory[8].close : 0  ]
                  },
                  {
                    x: new Date(coinHistory ? coinHistory[9].time_open : 0),
                    y: [coinHistory ? coinHistory[9].open : 0,coinHistory ? coinHistory[9].high : 0, coinHistory ? coinHistory[9].low : 0,coinHistory?  coinHistory[9].close : 0  ]
                  },
                  {
                    x: new Date(coinHistory ? coinHistory[10].time_open : 0),
                    y: [coinHistory ? coinHistory[10].open : 0,coinHistory ? coinHistory[10].high : 0, coinHistory ? coinHistory[10].low : 0,coinHistory?  coinHistory[10].close : 0  ]
                  },
                  {
                    x: new Date(coinHistory ? coinHistory[11].time_open : 0),
                    y: [coinHistory ? coinHistory[11].open : 0,coinHistory ? coinHistory[11].high : 0, coinHistory ? coinHistory[11].low : 0,coinHistory?  coinHistory[11].close : 0  ]
                  },
                  {
                    x: new Date(coinHistory ? coinHistory[12].time_open : 0),
                    y: [coinHistory ? coinHistory[12].open : 0,coinHistory ? coinHistory[12].high : 0, coinHistory ? coinHistory[12].low : 0,coinHistory?  coinHistory[12].close : 0  ]
                  },
                  {
                    x: new Date(coinHistory ? coinHistory[13].time_open : 0),
                    y: [coinHistory ? coinHistory[13].open : 0,coinHistory ? coinHistory[13].high : 0, coinHistory ? coinHistory[13].low : 0,coinHistory?  coinHistory[13].close : 0  ]
                  },
                  {
                    x: new Date(coinHistory ? coinHistory[14].time_open : 0),
                    y: [coinHistory ? coinHistory[14].open : 0,coinHistory ? coinHistory[14].high : 0, coinHistory ? coinHistory[14].low : 0,coinHistory?  coinHistory[14].close : 0  ]
                  },
                  {
                    x: new Date(coinHistory ? coinHistory[15].time_open : 0),
                    y: [coinHistory ? coinHistory[15].open : 0,coinHistory ? coinHistory[15].high : 0, coinHistory ? coinHistory[15].low : 0,coinHistory?  coinHistory[15].close : 0  ]
                  },
                  {
                    x: new Date(coinHistory ? coinHistory[16].time_open : 0),
                    y: [coinHistory ? coinHistory[16].open : 0,coinHistory ? coinHistory[16].high : 0, coinHistory ? coinHistory[16].low : 0,coinHistory?  coinHistory[16].close : 0  ]
                  },
                  {
                    x: new Date(coinHistory ? coinHistory[17].time_open : 0),
                    y: [coinHistory ? coinHistory[17].open : 0,coinHistory ? coinHistory[17].high : 0, coinHistory ? coinHistory[17].low : 0,coinHistory?  coinHistory[17].close : 0  ]
                  },
                  {
                    x: new Date(coinHistory ? coinHistory[18].time_open : 0),
                    y: [coinHistory ? coinHistory[18].open : 0,coinHistory ? coinHistory[18].high : 0, coinHistory ? coinHistory[18].low : 0,coinHistory?  coinHistory[18].close : 0  ]
                  },
                  {
                    x: new Date(coinHistory ? coinHistory[19].time_open : 0),
                    y: [coinHistory ? coinHistory[19].open : 0,coinHistory ? coinHistory[19].high : 0, coinHistory ? coinHistory[19].low : 0,coinHistory?  coinHistory[19].close : 0  ]
                  },
                ]
              }]}
              options={{
                chart: {
                  type: 'candlestick',
                  height: 350
                },
                title: {
                  text: 'CandleStick Chart',
                  align: 'left'
                },
                xaxis: {
                  type: 'datetime'
                },
                yaxis: {
                  tooltip: {
                    enabled: true
                  }
                }
              }}
       
            />
          )}
        </div>
      );
    }
       


export default Chart;