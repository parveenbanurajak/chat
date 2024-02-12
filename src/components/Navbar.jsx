import './Navbar.css'
const Navbar = () => {
  return (
   <>
   <div className="container">
      <div className="nav_logo">
         GPT-3
      </div>
      <div className="nav_links">
      <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">What is GPT3?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
      </div>
      <div className="nav_button">
          <button>Sign in</button>
          <button>Sign Up</button>
      </div>
   </div>
   
   </>
  )
}

export default Navbar
