import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import CollectionLayout from '../components/CollectionLayout'
import { collections } from '../lib/utils'

const CollectionPage = () => {
  const { id } = useParams()
    const collection = collections.filter(i => i.identifier === id)[0]
  return (
    <div className='text-center text-[20px] font-bold'>
      <Navbar showItems={false}/>
      {collection.name}
      <CollectionLayout collection={collection}/>
    </div>
  )
}

export default CollectionPage
