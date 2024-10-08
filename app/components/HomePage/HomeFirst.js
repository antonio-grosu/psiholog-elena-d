import Image from "next/image";
import Link from "next/link";
const HomeFirst = () => {
  return (
    <div className="pt-36 pb-12 md:pb-0 md:pt-12 min-h-screen w-full px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96 bg-gray-50 flex items-center justify-between">
      {/* div imagine pc */}
      <div className="w-5/12 hidden md:flex justify-start items-center">
        <Image
          priority
          width={800}
          height={800}
          src="/hero-img.png"
          alt="Poza Elena Dordea"
          className="w-8/12 slide-left"
        />
      </div>
      {/* div content */}
      <div className="md:w-6/12">
        <h1 className="text-2xl md:text-3xl font-semibold slide-in">
          Ghidează-ți emoțiile prin creativitate
        </h1>
        <Image
          priority
          width={800}
          height={800}
          src="/hero-img.png"
          alt="Poza Elena Dordea"
          className="md:hidden my-8 w-10/12 mx-auto slide-in"
        />
        <p className="md:mt-8 md:mb-12 mt-4 mb-6 slide-in">
          Explorează acest spațiu sigur și confidențial, unde creațiile tale
          devin un instrument eficient de explorare. În ședințele de terapie,
          vei descoperi cum exprimarea artistică te ajută să îți înțelegi și să
          îți gestionezi emoțiile, să reduci stresul și să îți îmbunătățești
          starea de bine.
        </p>
        <div className="flex slide-in ">
          <Link
            href="/despre"
            className="px-8  py-2 mt-8 md:w-auto text-center w-full text-white bg-teal-600 rounded-md hover:rounded-2xl transition-all ease-in-out"
          >
            Află Mai Mult
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeFirst;
