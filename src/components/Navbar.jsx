import './navbar.css'

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg  ">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 ">
              <li class="nav-item">
                <a class="nav-link " href="/">
                  <span>GTP-3</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  What is gpt
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Open AI
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Case Study
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Library
                </a>
              </li>
            </ul>
            <form class="d-flex">
              <button class="btn" type="submit">
                Sign In
              </button>
              <div className="btnofbtn">
                <button class="btn" type="submit">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
