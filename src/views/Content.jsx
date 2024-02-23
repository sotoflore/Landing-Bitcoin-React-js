import  imageBitcoin from '../assets/icons/bitcoin.svg'
import Table from '../components/Table';
const Content = () => {
  return (
    <section className="w-11/12 mx-auto flex flex-col items-center mt-24 mb-20">
        <img src={imageBitcoin} className='md:w-1/4 mb-10' alt="imagen bitcoin" />
        <h2 className='text-xl font-extrabold text-center md:text-3xl'>Visibilizamos todas las tasas de cambio.</h2>
        <p className='text-gray-600 font-bold py-5 text-sm text-center md:text-base'>
            Traemos información en tiempo real de las casas de cambio y las monedas más importantes del mundo.
        </p>
        <h3 className='text-orange-500 text-3xl font-extrabold my-5'>Monedas</h3>
        <Table/>
    </section>
  )
}
export default Content;