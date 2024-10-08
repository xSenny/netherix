import about from '../assets/about.svg'
import NumberTicker from './ui/number-ticker'

const AboutUs = () => {
  return (
    <section id="about" className="flex flex-col gap-10 lg:gap-20 p-8 lg:p-20 text-white text-center lg:text-start">
      <p className="text-[40px] font-bold text-center ">About Us</p>
      <div className="flex flex-col-reverse lg:flex-row gap-6 lg:gap-12 justify-around">
        <img src={about} alt="" className="h-[200px] lg:h-[400px] w-auto" />
        <div className="flex flex-col gap-8">
          <p className=" text-[32px] font-bold">Block by Block Builders</p>
          <p className="text-center lg:text-start text-[20px] text-gray-400">
            Welcome to Block by Block Builders! We are a passionate Minecraft team dedicated to
            creating stunning worlds, from grand castles to intricate cities. Join us as we bring
            our wildest ideas to life, one block at a time! Let&apos;s build something amazing
            together!
          </p>
          <div className="flex justify-around text-white">
            <div className="max-w-80">
              <NumberTicker value={20} className="text-[42px] font-bold" />
              <p className="max-w-lg text-gray-400">Active Builders with a wealthy porfolio</p>
            </div>
            <div className="max-w-80">
              <NumberTicker value={100} className="text-[42px] font-bold" />
              <p className="max-w-lg text-gray-400">
                Already built builds that are waiting for you to consider{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
