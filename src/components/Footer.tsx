import { Facebook, Github, Instagram, Twitter, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <div className="py-4 lg:py-10 text-gray-400 flex flex-col items-center gap-4">
      <div className="flex gap-4">
        {[<Twitter />, <Instagram />, <Facebook />, <Github />, <Youtube />].map(i => (
          <a href="#">{i}</a>
        ))}
      </div>
      <div className="flex gap-8">
        <a className="#policy">Privacy Policy</a>
        <a href="#terms">Terms Of Use</a>
      </div>
      <div>
        <p>2024 xSenny - Netherix. All rights are reserved</p>
      </div>
    </div>
  )
}

export default Footer
