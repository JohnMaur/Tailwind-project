/*
The difference between parenthesis and curly braces is parenthesis immediately return the jsx()
unlike parenthesis you have return statement to return your jsx.

The advantage of curly {} braces is you can write a function inside of it unlike parenthesis() only jsx you can write in it. 
const App = () => (

);

const App = () => {
  return (

  );
}
*/
// import Nav from "./sections/nav";
// import Hero from "./sections/Hero";
// import PopularProducts from "./sections/PopularProduct";
// import SuperQuality from "./sections/SuperQuality";
// import Services from "./sections/Services";import SpecialOffer from "./sections/SpecialOffer";
// import CustomerReviews from "./sections/CustomerReviews";
// import Subscribe from "./sections/Subscribe";
// import Footer from "./sections/Footer";

import { Hero, PopularProduct, SuperQuality, Services, SpecialOffer, CustomerReviews, Subscribe, Footer } from "./sections/index";
import Nav from "./Components/Nav";

const App = () => ( 
  <main className="relative">
    <Nav />
    <section className='xl:padding-l wide:padding-r padding-b'>
      <Hero/>
    </section>

    <section className="padding">
      <PopularProduct/>
    </section>
    <section className="padding">
      <SuperQuality/>
    </section>
    <section className="padding-x py-10">
      <Services/>
    </section>
    <section className="padding">
      <SpecialOffer/>
    </section>

    <section className="bg-pale-blue padding">
      <CustomerReviews/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe/>
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer/>
    </section>
  </main>
);

export default App;