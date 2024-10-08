import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import { Build, collections } from '../lib/utils'
import { SearchIcon } from 'lucide-react'

const SearchPage = () => {
  const [search, setSearch] = useState<string>('')
  const [searchedBuildings, setSearchedBuildings] = useState<Build[]>([])

  useEffect(() => {
    const normalizedKeyword = search.toLowerCase()
    const uniqueBuilds = new Set<Build>()

    // Iterate through each collection
    collections.forEach(collection => {
      // Check if the category name contains the keyword
      if (collection.name.toLowerCase().includes(normalizedKeyword)) {
        // Add all builds from this collection
        collection.builds.forEach(build => {
          uniqueBuilds.add(build)
        })
      }
    })

    // Check all builds in all collections for matches
    collections.forEach(collection => {
      collection.builds.forEach(build => {
        if (
          build.name.toLowerCase().includes(normalizedKeyword) ||
          build.description.toLowerCase().includes(normalizedKeyword)
        ) {
          uniqueBuilds.add(build)
        }
      })
    })

    // Convert the Set back to an array and parse JSON strings back to objects
    setSearchedBuildings(Array.from(uniqueBuilds))
  }, [])

  const searchBuildings = (e: any) => {
    e.preventDefault()
    const normalizedKeyword = search.toLowerCase()
    const uniqueBuilds = new Set<Build>()

    // Iterate through each collection
    collections.forEach(collection => {
      // Check if the category name contains the keyword
      if (collection.name.toLowerCase().includes(normalizedKeyword)) {
        // Add all builds from this collection
        collection.builds.forEach(build => {
          uniqueBuilds.add(build)
        })
      }
    })

    // Check all builds in all collections for matches
    collections.forEach(collection => {
      collection.builds.forEach(build => {
        if (
          build.name.toLowerCase().includes(normalizedKeyword) ||
          build.description.toLowerCase().includes(normalizedKeyword)
        ) {
          uniqueBuilds.add(build)
        }
      })
    })

    // Convert the Set back to an array and parse JSON strings back to objects
    setSearchedBuildings(Array.from(uniqueBuilds))
  }

  return (
    <div className="space-y-8">
      <Navbar showItems={false} />
      <form className="flex justify-center px-4 gap-8">
        <input
          onChange={e => setSearch(e.target.value)}
          value={search}
          type="text"
          placeholder="Search for a build"
          className="w-full py-4 bg-[#4a0261] rounded-xl border-input px-2 text-center"
        />
        <button onClick={e => searchBuildings(e)} className="bg-[#4a0261] py-4 px-8 rounded-xl ">
          <SearchIcon />
        </button>
      </form>
      <div className="flex flex-wrap justify-center gap-8">
        {searchedBuildings.map(e => (
          <a href={`/build/${e.identifier}`} className="h-[400px] w-[400px] p-3 border-border rounded-xl border-2 space-y-2">
            <img src={e.image} alt="" className="max-h-[250px]" />
            <p className='text-center text-bold text-purple-500'>{e.name}</p>
            <p>{e.description}</p>
          </a>
        ))}
      </div>
    </div>
  )
}

export default SearchPage
