/**
 * The Navbar component is a React component that displays a navigation bar with various links and a
 * login button.
 * @returns The Navbar component is being returned.
 */
import React from "react";
import styled from "styled-components";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  setUserLoginDetails,
  setSignOutState,
} from "../features/auth/userSlice";
import {
  selectUserName,
  selectPhotoUrl,
} from "../features/auth/userSlice";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginUserName = useSelector(selectUserName);
  // const loginUserEmail = useSelector(selectUserEmail);
  const loginUserPhotoUrl = useSelector(selectPhotoUrl);

  /* The code block is responsible for handling the authentication process when the user clicks on the
  "Login" button in the Navbar component. */

  /* The code `const auth = getAuth(app);` is initializing the `auth` variable with the authentication
  service provided by Firebase. It is using the `getAuth` function from the `firebase/auth` module
  and passing in the `app` object, which represents the Firebase app. */
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  /**
   * The function `handleAuth` signs in a user with a popup using the `auth` and `provider` objects,
   * and logs the result or any error messages.
   */
  const handleAuth = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      // console.log(result);
      const user = result.user;
      // console.log('user ', user);
      setUser(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  function setUser(user) {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photoUrl: user.photoURL,
      })
    );
    navigate("/home");
  }

  // when upate loginUserName state. It will run in every single time
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, [loginUserName]);

  // this function is for logout user
  const handleSignOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOutState());
    });
    navigate('/');
  };


  return (
    <>
      <Nav>
        <Log>
          <img src="/images/logo.svg" alt="logo" />
        </Log>
        {loginUserName && (
          <NavMenu>
            <a>
              <Link to="/home">
                <img src="/images/home-icon.svg" alt="home icon" />
                <span>Home</span>
              </Link>
            </a>
            <a href="/#">
              <img src="/images/search-icon.svg" alt="search icon" />
              <span>Search</span>
            </a>
            <a href="/#">
              <img src="/images/watchlist-icon.svg" alt="watchlist icon" />
              <span>Watchlist</span>
            </a>
            <a href="/#">
              <img src="/images/original-icon.svg" alt="original icon" />
              <span>Original</span>
            </a>
            <a href="/#">
              <img src="/images/movie-icon.svg" alt="movie icon" />
              <span>Movies</span>
            </a>
            <a href="/#">
              <img src="/images/series-icon.svg" alt="series icon" />
              <span>Series</span>
            </a>
          </NavMenu>
        )}
        {loginUserName ? (
          <>
            <LoginImg>
              <SignOut>
                <img src={loginUserPhotoUrl} alt="Login user photo" />
                <DropDown onClick={handleSignOut}>Sign Out</DropDown>
              </SignOut>
            </LoginImg>
          </>
        ) : (
          <>
            <Login onClick={handleAuth}>Login</Login>
          </>
        )}
      </Nav>
    </>
  );
}

//! apllying css using styled-components javascript library
const Nav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 76px;
  width: 100%;
  background-color: #090b13;
  padding: 0 35px;
`;

const Log = styled.a`
  position: relative;
  display: inline-block;
  width: 80px;
  padding: 0;
  text-decoration: none;
  margin-top: 4px;
  cursor: pointer;
  img {
    margin-top: 4px;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: auto;
  margin-left: 25px;
  padding: 0;

  a {
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 10px;

    img {
      height: 20px;
      width: 20px;
    }

    span {
      position: relative;
      color: rgba(249, 249, 249);
      font-size: 13px;
      text-transform: uppercase;
      font-weight: bold;
      letter-spacing: 1.42px;
      padding: 2px 0px;
      margin-left: 5px;

      &::before {
        content: "";
        position: absolute;
        background-color: rgba(249, 249, 249);
        height: 2px;
        left: 0px;
        bottom: -6px;
        width: 100%;
        border-radius: 0px 0px 4px 4px;
        opacity: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        visibility: hidden;
      }

      &:hover::before {
        visibility: visible;
        transform: scaleX(1);
        opacity: 1 !important;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Login = styled.a`
  position: relative;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 10px 16px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  transition: all 0.2s ease 0s;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border: transparent;
  }
`;

const LoginImg = styled.a`
  position: relative;
  display: inline-block;
  width: 80px;
  padding: 0;
  text-decoration: none;
  cursor: pointer;
  img {
    margin-top: 4px;
    width: 60%;
    border-radius: 50%;
  }
`;

const DropDown = styled.div`
  position: absolute;
  top: 50px;
  right: 10px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgba(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 105px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  &:hover img + ${DropDown} {
    opacity: 1;
    transition-duration: 1s;
  }
`;
