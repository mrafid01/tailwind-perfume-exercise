import productDesktop from "./assets/images/image-product-desktop.jpg";
import productMobile from "./assets/images/image-product-mobile.jpg";
import cart from "./assets/images/icon-cart.svg";

function App() {
  return (
    <>
      <main className="flex h-screen w-screen items-center justify-center bg-cream px-6 py-8 font-montserrat text-regular text-darkGrayishBlue">
        <div className="grid w-fit max-w-sm overflow-hidden rounded-xl bg-white sm:max-w-xl sm:auto-rows-max sm:grid-cols-2">
          <div>
            <picture>
              <source media="(max-width: 640px)" srcSet={productMobile} />
              <img
                src={productDesktop}
                alt="Perfume bottle on top of a table surronding with leafes"
                className="h-full w-full object-cover"
              />
            </picture>
          </div>
          <div className="p-7">
            <p className="mb-5 uppercase tracking-[0.5em]">Perfume</p>
            <h1 className="mb-7 font-fraunces text-4xl font-bold text-veryDarkBlue">
              Gabrielle Essence Eau De Parfum
            </h1>
            <p className="mb-5">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creaator for the House of CHANEL.
            </p>
            <div className="flex items-center gap-5">
              <span className="font-fraunces text-3xl font-bold text-darkCyan">
                $149.99
              </span>
              <span className="line-through">$169.99</span>
            </div>
            <button className="flex w-full justify-center gap-4 rounded-lg bg-darkCyan p-4 text-white">
              <img src={cart} alt="Cart icon" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
