import Footer from "./components/Footer";
import Content from "./views/Content";
import Hero from "./views/Hero";

const App = () => {
  return (
    <>
        <header>
            <Hero/>
        </header>
        <main>
            <Content/>
        </main>
        <Footer/>
    </>
  )
}
export default App;