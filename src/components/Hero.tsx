import HeroBackground from './HeroBackground'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div className="relative ">
      <HeroBackground />
      <div className="min-h-screen bg-[#0e042190] flex flex-col">
        <Navbar showItems={true}/>
        <div className="px-10 flex-grow flex flex-col justify-center items-center text-center text-white">
          <p className="text-[46px] lg:text-[68px] font-bold max-w-2xl">Find And Buy Any Minecraft Building</p>
          <p className="mt-4 text-[16px] lg:text-[18px] max-w-3xl font-semibold">
            Looking Minecraft Build Shop, graphic designs, plugins or something else for your
            server? We've got you covered! Hire professional experts in these areas to meet your
            expectations.
          </p>
          <button className="p-[3px] relative mt-4">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              <a href="#collections">Browse our collection</a>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
