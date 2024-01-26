import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import global from "./assets/global.svg"
import play from "./assets/play-cricle.svg"
import paisagem1 from "./assets/paisagem1.jpg"
import paisagem2 from "./assets/paisagem2.jpg"
import paisagem3 from "./assets/paisagem3.jpg"
import group9 from "./assets/group9.svg"
import group10 from "./assets/group10.svg"
import group11 from "./assets/group11.svg"
import group12 from "./assets/group12.svg"
import group13 from "./assets/group13.svg"
import group14 from "./assets/group14.svg"
import map from "./assets/map.svg"
import arrow from "./assets/arrow-square.svg"
import route from "./assets/route-square.svg"
import arrowRight from "./assets/arrow-right.svg"
import arrowLeft from "./assets/arrow-left.svg"
import rectangle20 from "./assets/Rectangle20.png"
import rectangle21 from "./assets/Rectangle21.png"
import rectangle22 from "./assets/Rectangle22.png"
import group20 from "./assets/Group20.svg"
import turismo2 from "./assets/turismo2.jpg"
import airplane from "./assets/airplane.svg"
import location1 from "./assets/location1.svg"
import useradd from "./assets/user-add.svg"



export function App() {

  return (
    <>
      <Header />
      <main>
        {/*Sobre a seção*/}
        <section id="about">
          <div className="container m-auto px-4">
            <div className="flex flex-col 2xl:flex-row items-center justify-center pt-20 pb-[3rem] gap-20">
              {/*Lado esquerdo da seção  */}
              <div className="w-2/4">
                <div className="flex items-center gap-2 p-6">
                  <span className="text-[#00487B] text-sm font-bold">
                    Explore the world!</span>
                  <img className="w-6 h-6	shrink-0" src={global} alt="Global Icon" />
                </div>
                <h1 className="text-black text-[69px] font-bold leading-[79px] pb-6	">Travel <span className="text-[#00A3CB]">top destination</span> of the world</h1>
                <p className="text-[#8C8B92] text-lg font-normal leading-[30px] pb-10">Immerse yourself in a world of wanderlust with our curated travel experiences. From breathtaking landscapes to cultural gems, embark on unforgettable adventures.</p>
                {/*Botões de ação */}
                <div className="flex items-center gap-6">
                  <button className="	bg-[#00A3CB] hover:bg-[#33B5D6] rounded-[100px] py-[15px] px-[28px] text-[#E0F2FF] text-[14px] font-bold">Get Started</button>
                  <div className="flex justify-center items-center gap-2">
                    <img className="" src={play} alt="icone de globo" />
                    <button className="rounded-[100px] border border-solid border-[#E0F2FF] py-[15px] px-[28px] text-black text-[14px] font-bold">Watch Demo</button>
                  </div>
                </div>
              </div>
              {/*Lado direito da seção - Galeria de fotos */}
              <div className=" relative lg:h-[632px] w-2/4 flex gap-8 lg:flex-row flex-col ">
                <div className=" w-2/4 h-full flex flex-col gap-8" >
                  <div className="relative h-[300px] w-[258px] rounded-[32px] overflow-hidden">
                    <img className="w-full h-full" src={paisagem1} alt="icone de globo" />
                  </div>
                  <div className="lg:flex hidden absolute bottom-0 left-0 mb-[19.5rem] ml-[-1.5rem] h-[60px] w-[60px] rounded-full bg-[#00487B]"><img src={airplane} alt="Ícone" className="w-full h-full object-contain" />
                  </div>
                  <div className="h-[300px] w-[258px] rounded-[32px] overflow-hidden">
                    <img className="w-full h-full" src={paisagem2} alt="Landscape2" />
                  </div>
                </div>
                <div className="lg:w-2/4 h-full flex justify-center items-center relative ">
                  <div className=" h-[400px] w-[258px] rounded-[32px] overflow-hidden">
                    <img className="w-full h-full" src={paisagem3} alt="Landscape3" />
                  </div>
                  <div className="absolute bottom-[176px] right-[-94px] lg:flex items-center justify-center gap-2 w-[160px] h-[60px] bg-white rounded-full hidden">
                    <img className="" src={location1} alt="Landscape3" />
                    <p className="text-[#53525C] text-base font-bold">Top Places</p>
                  </div>
                  <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 lg:flex flex-col items-center justify-center w-[60px] h-[60px] rounded-full border bg-[#FFF0EC] hidden" >
                    <img src={useradd} alt="User Icon" />
                  </div>
                </div>
              </div>
            </div>
            {/*Seção de icones */}
            <div className="iconSection">
              <div className="flex items-center md:justify-between md:flex-nowrap md:gap-0 gap-8 flex-wrap  lg:h-[100px] my-14">
                <img className="w-[89px]" src={group9} alt="Coconut Tree Icon" />
                <img className="w-[89px]" src={group10} alt="Ballon Icon" />
                <img className="w-[89px]" src={group11} alt="Sunset Icon" />
                <img className="w-[89px]" src={group12} alt="Tent Icon" />
                <img className="w-[89px]" src={group13} alt="Drink Icon" />
                <img className="w-[89px]" src={group14} alt="Mountain Icon" />
              </div>
            </div>
            {/*Seção de serviços */}
            <div className="services lg:flex w-full items-center justify-center">
              <div className=" flex pt-16 flex-col w-[40%]">
                <span className="text-[#00A3CB] text-lg font-medium tracking-[3.6px] uppercase">Services</span>
                <h2 className="text-black text-3xl	font-bold">Tailored Journeys for Comprehensive Travel Experience</h2>
              </div>
              <div className="cards w-full pt-16 flex gap-8">
                <div className="cardOne flex items-center justify-center flex-col">
                  <div className="flex items-center justify-center w-20 h-20  rounded-full border bg-[#00A3CB0D]">
                    <img src={map} alt="map icon" />
                  </div>
                  <h3 className="text-black text-[28px] font-bold pb-[16px] text-center">Wanderlust Escapes</h3>
                  <p className="text-[#8C8B92] text-[18px] text-center">Dive into journeys, from exotic getaways to cultural odysseys, crafted just for you.</p>
                </div>
                <div className="cardTwo flex items-center justify-center flex-col">
                  <div className="flex items-center justify-center w-20 h-20 bg-[#00A3CB] rounded-full">
                    <img className="" src={arrow} alt="road icon" />
                  </div>
                  <h3 className="text-black text-[28px] font-bold pb-[16px] text-center">Wanderlust Escapes</h3>
                  <p className="text-[#8C8B92] text-[18px] text-center">Dive into journeys, from exotic getaways to cultural odysseys, crafted just for you.</p>
                </div>
                <div className="cardThree flex items-center justify-center flex-col">
                  <div className="flex items-center justify-center w-20 h-20  rounded-full border bg-[#00A3CB0D]">
                    <img className="" src={route} alt="route icon" />
                  </div>
                  <h3 className="text-black text-[28px] font-bold pb-[16px] text-center">Wanderlust Escapes</h3>
                  <p className="text-[#8C8B92] text-[18px] text-center">Dive into journeys, from exotic getaways to cultural odysseys, crafted just for you.</p>
                </div>
              </div>
            </div>
            {/*Seção Destino */}
            <div className="destination flex mt-20 justify-between">
              <div>
                <span className="text-[#00A3CB] text-[18px] font-medium tracking-[3.6px] uppercase">Top Destinations</span>
                <h1 className="text-black text-[44px] font-bold">Top Picks Unveiled</h1>
              </div>
              <div className="flex gap-8 ">
                <div className="flex items-center justify-center w-20 h-20 rounded-full">
                  <button className="cursor-pointer">
                    <img src={arrowRight} alt="right arrow" />
                  </button>
                </div>
                <div className="flex items-center justify-center w-20 h-20 bg-[#00A3CB] hover:bg-[#33B5D6] rounded-full">
                  <button className="cursor-pointer">
                    <img src={arrowLeft} alt="Left arrow" />
                  </button>
                </div>
              </div>
            </div>
            {/*Seção Cards de Viagem */}
            <div className="cards_travel lg:flex flex-col lg:flex-row space-x-4 gap-8 mt-14">
              <div>
                <img src={rectangle20} alt="couple traveling" />
                <h3 className="text-black text-xl font-bold my-6">Paradise Beach, Bantayan Island</h3>
                <div className="flex justify-between mb-3">
                  <p className="text-[#8C8B92] text-lg">Rome, Italy</p>
                  <img src={group20} alt="icon star" />
                </div>
                <span className="text-[#00A3CB] text-xl font-bold">$550.16</span>
              </div>
              <div>
                <img src={rectangle21} alt="man traveling" />
                <h3 className="text-black text-xl font-bold my-6">Paradise Beach, Bantayan Island</h3>
                <div className="flex justify-between mb-3">
                  <p className="text-[#8C8B92] text-lg ">Rome, Italy</p>
                  <img src={group20} alt="icon star" />
                </div>
                <span className="text-[#00A3CB] text-xl font-bold">$550.16</span>
              </div>
              <div>
                <img src={rectangle22} alt="woman traveling" />
                <h3 className="text-black text-xl font-bold my-6">Paradise Beach, Bantayan Island</h3>
                <div className="flex justify-between mb-3">
                  <p className="text-[#8C8B92] text-lg">Rome, Italy</p>
                  <img src={group20} alt="icon star" />
                </div>
                <span className="text-[#00A3CB] text-xl font-bold">$550.16</span>
              </div>
            </div>
            {/*Seção Pontos de viagem */}
            <div className="travelPoints flex  mt-[8rem] gap-4 mb-[8rem] flex-col lg:flex-row items-center">
              <div className="relative">
                <div className=" w-[550px] mt-[56px] ">
                  <img src={turismo2} alt="Travel Icon" />
                </div>
              </div>
              <div className=" py-[60px] px-[40px]">
                <span className="text-[#00A3CB] text-[18px] font-medium tracking-[3.6px] uppercase">Travel Points</span>
                <h1 className=" text-black text-[44px] font-bold my-6">We helping you find your dream location</h1>
                <p className=" text-[#8C8B92] text-lg">Let us guide you to your dream destination with expertise and  care. Our commitment is to assist you discovering the perfect.</p>
                <div className=" flex gap-10 mt-[56px] font-bold items-center justify-center">
                  <div className="text-[#E76A43] text-[28px] font-bold flex items-center flex-col">
                    <p className="mb-4">500+</p>
                    <p className="text-[#8C8B92] text-base font-normal">Holiday Packages</p>
                  </div>
                  <div className="text-[#E76A43] text-[28px] font-bold flex items-center flex-col">
                    <p className="mb-4">100</p>
                    <p className="text-[#8C8B92] text-base font-normal">Luxury Hotels</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section >
      </main >
      <Footer />
    </>
  )
}


