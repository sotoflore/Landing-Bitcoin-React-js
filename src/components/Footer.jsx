import { useEffect, useState } from 'react';
import logoWebsite from '../assets/icons/batata.svg';

const Footer = () => {
    
    const [annioActual, setAnnioActual] = useState(new Date().getFullYear());

    useEffect(() => {
        setAnnioActual(new Date().getFullYear());
    }, []);

    return (
        <footer className="bg-orange-500">
            <div className="w-11/12 mx-auto py-10">
                <div className='flex items-center justify-between px-10 md:px-12 lg:px-64'>
                    <ul>
                        <li><a href="" className='text-white font-bold'>Linkedin</a></li>
                        <li className='my-1'><a href="" className='text-white font-bold'>Crunchbase</a></li>
                        <li><a href="" className='text-white font-bold'>Hackernews</a></li>
                    </ul>
                    <div className='flex flex-col items-center'>
                        <img src={logoWebsite} className='w-14 pb-2' alt="logo del sitio web en el footer" />
                        <p className='text-white text-sm'>&copy; Batatabit {annioActual}</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;