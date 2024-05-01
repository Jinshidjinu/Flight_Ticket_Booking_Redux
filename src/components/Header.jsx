import logo from "../assets/Images/paris.svg"

const Header = () => {
  return (
    <div className="w-full px-4 bg-slate-50"> 
     
     <nav className="flex items-center justify-between max-w-6xl sm:h-20">
        <img src={logo} alt="" />
        <button className="bg-indigo-800 text-white px-6 py-2 rounded-lg">Login</button>
        
     </nav>

    </div>
  )
}

export default Header