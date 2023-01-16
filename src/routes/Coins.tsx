import { useEffect, useState } from 'react';
import { Helmet } from "react-helmet-async";
import { useQuery } from 'react-query';
import { Link,Outlet } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { setConstantValue } from 'typescript';
import { fetchCoins } from './api';
import { isDarkAtom } from './atoms';

const Container = styled.div`
    padding:10px 20px ;
`;

const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;

`;

const CoinsList = styled.ul``;

const Coin = styled.li`
    background-color: white;
    color: ${(props) => props.theme.textColor};
    padding: 20px;
    border-radius: 15px;
    margin-bottom: 10px;
    a {
        display: flex;
        align-items: center;

        padding: 20px;
        transition: color 0.2s ease-in;
    }
    &:hover {
        a {
            color: ${(props) => props.theme.accentColor};
        }
    }

`;


const Title  = styled.h1`
    font-size: 48px;
    color: ${(props) => props.theme.accentColor};
    
`;

const Loader = styled.span`
    text-align: center;
    display: block;
`;

const Img = styled.img`
    width: 75px;
    height: 75px;
    margin-right: 10px;
`;

const ToggleBtn = styled.button`
    border-radius: 10px;
    background-color: ${(props)=> props.theme.accentColor};
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0px;
    &:hover {
        background-color: whitesmoke;
    }
`;


interface ICoin {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string,
}


function Coins(){
    const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins)
    const serDarkAtom = useSetRecoilState(isDarkAtom);
    const toggleDarkAtom = () => {
        serDarkAtom((prev) => !prev);
    }
    
    // const [coins, setCoins] = useState<CoinInterface[]>([]);
    // const [loading , setLoading] = useState(true);

    // useEffect(() => {
    //    (async() => {
    //     const response = await fetch('https://api.coinpaprika.com/v1/coins');
    //     const json = await response.json();
    //     setCoins(json.slice(0,100));
    //     setLoading(false);
    //    })();
    // },[])
    // console.log(coins);
    return (
      <Container>
        <Helmet>
            <title>코인</title>
        </Helmet>

        <Header>
            <Title>
                코인    
                <ToggleBtn onClick={toggleDarkAtom}>Toggle Mode</ToggleBtn>
                
            </Title>  
                 
        </Header>
        {isLoading ? (<Loader>Loading...</Loader>) : <CoinsList>
            {data?.slice(0,100).map((coin) => <Coin key={coin.id}><Link to={{
                pathname: `/${coin.id}`,
            }} state={{
                name: coin.name,
            }}>
                <Img src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLocaleLowerCase()}`}/>
                {coin.name} &rarr;
                </Link></Coin>)}
                
        </CoinsList>}
      </Container>
    );
}

export default Coins;