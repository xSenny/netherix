import { useParams } from 'react-router-dom'
import { Build, collections } from '../lib/utils'
import Navbar from '../components/Navbar'

const BuildPage = () => {
  const { id } = useParams()

  const building: Build | undefined = collections.reduce<Build | undefined>((acc, c) => {
    if (acc) return acc
    return c.builds.find(b => b.identifier === id) 
  }, undefined)
  return (
    <>
      <Navbar showItems={false} />
      <div className="flex flex-col gap-12 p-8">
        <p className="text-center text-[32px] font-bold">{building?.name}</p>
        <div className="flex justify-evenly flex-col lg:flex-row items-center gap-8">
          <img className="rounded-xl w-[600px] h-auto" src={building?.image} />
          <div className="rounded-xl bg-[#200c40] h-full w-full max-h-[400px] max-w-[400px] p-3 gap-8 lg:p-10 lg:gap-20 flex flex-col justify-around">
            <p className="text-start text-gray-300">{building?.description}</p>
            <div>
              <p className="text-purple-300">
                Name: <span className='text-gray-300'>{building?.name}</span>
              </p>
              <p className="text-purple-300">
                Dimensions: <span className='text-gray-300'>{building?.size}</span>
              </p>
              <p className="text-purple-300">
                Interiors: <span className='text-gray-300'>{building?.interiors}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BuildPage
