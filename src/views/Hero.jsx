import logoWebsite from '../assets/icons/batata.svg';
import downArrow from '../assets/icons/down-arrow.svg';

const Hero = () => {
    return (
        <section className="relative flex flex-col items-center bg-custom">
            <div className='flex flex-col items-center pt-16 text-center px-7 md:pt-24 lg:px-0'>
                <a href="#" className='flex'>
                    <img src={logoWebsite} alt="logo del sitio web" />
                    <span className='text-2xl font-extrabold text-orange-400 ps-3 md:text-3xl lg:text-4xl'>Batatabit</span>
                </a>
                <h1 className='text-xl text-gray-100 font-extrabold py-10 md:text-3xl lg:text-4xl lg:py-5'>La próxima revolución en el intercambio de criptomonedas.</h1>
                <p className='text-sm font-medium text-gray-100 pb-20 md:text-xl lg:text-2xl'>
                    Batatabit te ayuda a navegar entre los diferentes precios precios y tendencias
                </p>
            </div>
            <div className='absolute bottom-0 translate-y-1/2'>
                <button className='flex items-center justify-center bg-gray-100 px-10 py-5 rounded-md shadow-xl border border-gray-50'>
                    <span className='font-bold'>Conoce Nuestros Planes</span>
                    <img src={downArrow} className='pt-1 ps-2' alt="imagen down arrow" />
                </button>
            </div>
        </section>
    )
}
export default Hero;