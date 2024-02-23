import { useState, useEffect } from "react";
import trendingUp from '../assets/icons/trending-up.svg';
import trendingDown from '../assets/icons/trending-down.svg';

const Table = () => {
    const [coinData, setCoinData] = useState([]);
    const [infoData, setInfoData] = useState(null);

    const readAndConvertDate = (timestamp) => {

        // Diferencia de tiempo entre el servidor y el tiempo local
        // Realizamos esta operación para ajustar la diferencia de zona horaria entre el tiempo del servidor y el tiempo local.

        const serverTime = new Date(timestamp * 1000);
        const localTime = new Date();
        const timeDiff = serverTime.getTime() - localTime.getTime();
        const date = new Date(serverTime.getTime() - timeDiff);
        const options = {
            day: "numeric",
            month: "long",
            hour: "numeric",
            minute: "numeric",
        };
        return date.toLocaleDateString("es-ES", options);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.coinlore.net/api/tickers/");
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCoinData(data.data.slice(0,4));
                setInfoData(data.info)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="flex flex-col items-center">
            <div className="relative overflow-x-auto rounded-lg">
                <table className="w-full">
                    <tbody>
                        {
                            coinData.map((coin) => (
                                <tr key={coin.id} className="bg-white">
                                    <th  className="px-6 py-4 text-gray-500 font-bold border-e-8  border-b-8 border-custom-gray">
                                        {coin.name}
                                    </th>
                                    <td className="px-6 py-4 border-b-8 border-custom-gray flex items-center justify-between">
                                        <span className="font-bold">{coin.price_usd}</span>
                                        <img src={coin.percent_change_1h > 0 ? trendingUp : trendingDown} alt="imagen trending" className="w-8 ps-3" />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className='w-60 mt-3 py-2 bg-orange-200 rounded-lg text-center'>
                {infoData &&
                    <p className="text-sm">
                        <span className='font-bold'>Actualizado: </span>
                        <span>{readAndConvertDate(infoData.time)}</span>
                    </p>
                }
            </div>
        </div>
    )
}
export default Table;