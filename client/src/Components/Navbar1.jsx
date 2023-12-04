import React from "react";
import { BsPower } from "react-icons/bs";

function Navbar1({ userInfo }) {
  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-md bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Tasks
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link" href="/">
                Home
              </a>
              {!userInfo ? (
                <>
                  <a className="nav-link" href="/signup">
                    Sign up
                  </a>
                  <a className="nav-link" href="signin">
                    Sign in
                  </a>
                </>
              ) : (
                <>
                  <a className="nav-link" href="/tasks">
                    Tasks
                  </a>
                  <a className="nav-link" href="/tasks">
                    {userInfo.username}
                  </a>
                  <a
                    className="nav-link text-danger"
                    href="/"
                    onClick={() => localStorage.clear()}
                  >
                    <BsPower />
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar1;
