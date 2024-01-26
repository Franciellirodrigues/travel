import logo from '../assets/logo.png';

export function Header() {

  return (
    <div className="container mx-auto px-4">
      <nav className="h-[100px] flex items-center justify-between">
        <div className="">
          <img src={logo} alt="logo travel" />
        </div>
        <div className="navegation">
          <ul className="font-roboto text-lg	text-gray-500  flex items-center gap-16 cursor-pointer ">
            <li className="hover:text-gray-700"><a href="#">Home</a></li>
            <li className="hover:text-gray-700"><a href="#">Discover</a></li>
            <li className="hover:text-gray-700"><a href="#">Spacial Deals</a></li>
            <li className="hover:text-gray-700"><a href="#">Contact</a></li>
          </ul>
        </div>

      </nav>
    </div>
  )

}