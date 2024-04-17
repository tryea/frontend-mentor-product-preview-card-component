import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-1 h-dvh flex-col items-center justify-center font-montserrat bg-cream px-4 py-7">
      <div className="flex flex-col sm:flex-row bg-white w-full rounded-[10px] sm:w-[600px] sm:h-[450px]">
        <div className="flex flex-col w-full h-full sm:w-[300px]">
          <div className="relative w-full aspect-[300/450]">
            <Image
              src={`/images/image-product-desktop.jpg`}
              fill
              alt={`product-image`}
              className="object-cover object-center rounded-t-[10px]"
            />
          </div>
        </div>
        <div className="flex p-6 flex-col sm:w-[300px] sm:p-8">
          <p className="text-aurometal_saurus font-medium text-xs leading-[14.6px] tracking-[5px]">
            PERFUME
          </p>
          <h2 className="font-bold font-fraunces text-[32px] leading-none text-gun_metal mt-3 sm:mt-5">
            Gabrielle Essence Eau De Parfum
          </h2>
          <p className="text-sm leading-[23px] font-medium text-aurometal_saurus mt-4 sm:mt-6">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="flex flex-row gap-[19px] items-center mt-6 sm:mt-8">
            <p className="text-deep_aquamarine font-bold font-fraunces text-[32px] leading-none ">
              $149.99
            </p>
            <p className="text-aurometal_saurus text-[13px] leading-[23px] font-medium line-through">
              $169.99
            </p>
          </div>

          <button
            type="button"
            className="flex mt-5 sm:mt-[30px] flex-row gap-3 h-[48px] rounded-lg items-center justify-center w-full bg-deep_aquamarine text-white text-[14px] font-bold leading-[17.1px]"
          >
            <div className="relative w-4 h-4">
              <Image src={`/images/icon-cart.svg`} alt="cart-icon" fill />
            </div>
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}
