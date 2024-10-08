import { LayoutGrid } from './ui/layout-grid'
import { Collection } from '../lib/utils'

const CollectionLayout = ({ collection }: { collection: Collection }) => {
  const cards = collection.builds.map((i, idx) => {
    const isEvenLength = collection.builds.length % 2 === 0

    let className

    if (isEvenLength) {
      // For even lengths, 1x | 2x
      const row = Math.floor(idx / 2)
      if (row % 2 === 0) {
        className = idx % 2 === 0 ? 'md:col-span-2' : 'col-span-1'
      } else {
        className = idx % 2 !== 0 ? 'md:col-span-2' : 'col-span-1'
      }
    } else {
      // For odd lengths, alternate to start with 2x
      if (idx === collection.builds.length - 1) {
        className = 'md:col-span-3' // Last item takes full width on medium screens
      } else {
        className = idx % 2 === 0 ? 'col-span-1' : 'md:col-span-2'
      }
    }

    return {
      content: <Skeleton title={i.name} description={i.description} />,
      thumbnail: i.image,
      className: className + "",
      id: idx + 1,
      identifier: i.identifier
    }
  })

  console.log(cards)

  return (
    <div className="h-screen min-h-[800px] py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  )
}

const Skeleton = ({ title, description }: { title: string; description: string }) => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">{title}</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">{description}</p>
    </div>
  )
}

export default CollectionLayout
