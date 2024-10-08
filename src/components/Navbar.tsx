import { SearchIcon } from "lucide-react";

const navLinks: { label: string; href: string }[] = [
  {
    label: 'Home',
    href: '#home',
  },
  {
    label: 'Collections',
    href: '#collections',
  },
  {
    label: 'About',
    href: '#about',
  },
]
const Navbar = ({showItems}: {showItems: boolean}) => {
  return (
    <div className="flex justify-between py-8 px-20 items-center">
      <div>
        <a href="/" className="text-white text-3xl font-bold">
          Netherix Studio
        </a>
      </div>
      {showItems && (
        <div className="hidden lg:flex gap-10 text-white text-xl">
          {navLinks.map(link => (
            <a href={link.href}>{link.label}</a>
          ))}
        </div>
      )}
      <a href="/search">
        <SearchIcon />
      </a>
    </div>
  )
}

export default Navbar
