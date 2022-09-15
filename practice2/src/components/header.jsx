import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { logout } from "../utility/password";

export const Header = () => {
  const navigate = useNavigate();
  const adminCookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith("admin="))
    ?.split("=")[1];

  const userCookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith("user="))
    ?.split("=")[1];

  const [isAuthed, setIsAuthed] = useState(
    adminCookie || userCookie ? true : false
  );

  const logOut = () => {
    logout();
    setIsAuthed(false);
    navigate("/");
  };

  return (
    <header className="bg-slate-600 text-white flex justify-between p-5">
      <Link to="/">Shop</Link>
      <div className="flex gap-5 align-center">
        {adminCookie && (
          <Link
            to="/dashboard"
            className="border-2 border-blue-600 p-1 bg-pink-500 rounded hover:bg-yellow-500 cursor-pointer"
          >
            Dashboard
          </Link>
        )}
        {isAuthed ? (
          <span
            onClick={logOut}
            className="border-2 border-white-600 p-1 rounded hover:bg-yellow-500 cursor-pointer"
          >
            Log out
          </span>
        ) : (
          <span className="border-2 border-white-600 p-1 rounded hover:bg-yellow-500 cursor-pointer">
            <Link to="/login">Sign In</Link>
          </span>
        )}
      </div>
    </header>
  );
};
