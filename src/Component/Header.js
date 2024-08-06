import React, { useContext, useState } from "react";
import { SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";
import { countryCode, language_code } from "../Constant/Functions";
import { UserContext } from "../Context/UserContext";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const navigation = useNavigate();

  const { isUser } = useContext(UserContext);
  const userDetail = useSelector((state) => state.newsReducer);

  const dispatch = useDispatch();

  const [language, setLanguage] = useState(language_code[0]);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    dispatch({
      type: "CHANGE_LANGUAGE",
      payload: e.target.value,
    });
  };

  return (
    <div className="flex items-center justify-between space-x-3 bg-[#231F20] px-4 py-4">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl text-white font-semibold">My NEWS</h1>
        <div>
          {/* <h2 className="text-white">Deliver to Jaspreet</h2> */}
          <p className="text-white">🍁Canada</p>
        </div>
      </div>
      {isUser && (
        <div className="p-1 border border-black flex items-center justify-between space-x-2 flex-1 rounded-md bg-white">
          <select className=" p-2" name="" id="">
            <option value="">All</option>
            {countryCode.map((item) => (
              <option value="item">{item}</option>
            ))}
          </select>
          <input
            className="flex-1 outline-none"
            type="text"
            placeholder="Search your favourite"
          />
          <SearchIcon className="h-6  text-black " />
        </div>
      )}
      <div className="flex items-center justify-evenly space-x-4">
        <select
          value={language}
          onChange={handleLanguageChange}
          className="bg-transparent text-white border-0 outline-none"
          name=""
          id=""
        >
          {language_code.map((item) => (
            <option className="text-black" value={item}>
              {item}
            </option>
          ))}
        </select>
        <p className="text-white">Top Breaking News</p>
        <p
          onClick={() => navigation("/login")}
          className="text-white cursor-pointer"
        >
          {isUser
            ? `Welcome ${userDetail?.userDetail?.username}`
            : `Login/SignUp`}
        </p>
        {isUser && (
          <img
            className="h-[50px] w-[50px] rounded-full"
            src={userDetail?.userDetail?.image?.url}
            alt=""
          />
        )}
      </div>
    </div>
  );
}

export default Header;
