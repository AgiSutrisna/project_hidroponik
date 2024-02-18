import React from "react";
import Navbar from "./component/Navbar";
import Cart from "./asset/cart.png";
import Slide1 from "./img/slide_1.jpg";
import Slide2 from "./img/slide_2.jpg";
import Slide3 from "./img/slide_3.jpg";
import ProductCard from "./component/Card";

function App() {
  return (
    <div className="py-3 px-3 bg-[#F5F5F5] h-screen">
      <p className="text-lg mb-2">Sadaya Farm</p>
      <div className="mb-3 xl:w-96 relative flex items-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <input
            type="search"
            className="relative m-0 block flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            placeholder="Cari produk segar disini"
            aria-label="Search"
            aria-describedby="button-addon2"
          />
          {/* Search icon */}
          <span
            className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
            id="basic-addon2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              // fill="currentColor"
              className="h-5 w-5 mr-2"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <span className="w-5 h-5 items-center mt-2 mr-2">
            <img src={Cart} alt="cart" />
          </span>
        </div>
      </div>
      <div className="conteudo">
        <div className="carrousel">
          <div>
            <img className="card" src={Slide2} alt="slide1"/>
          </div>
          <div>
            <img className="card" src={Slide3} alt="slide2"/>
          </div>
          <div>
            <img className="card" src={Slide1} alt="slide3"/>
          </div>
        </div>
      </div>
      <ProductCard />

      <Navbar />
      
    </div>
  );
}

export default App;
