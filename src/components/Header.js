import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/contants";
import { cacheResults } from "../utils/searchSlice";
import { SlMenu } from "react-icons/sl";
import { FiBell } from "react-icons/fi";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();

  // console.log(searchQuery);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    //console.log(json);
    setSuggestions(json[1]);

    // update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className=" flex flex-row items-center  justify-between h-20 px-4 shadow-2xl  ">
      <div className="flex items-center h-5">
        <div className="p-1 m-2">
          <SlMenu
            className="text-black text-xl"
            onClick={() => toggleMenuHandler()}
          />
        </div>
        <a href="/">
          <img
            className="h-11  p-3"
            alt="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>
      <div className="">
        <div>
          <input
            className="w-96 p-2  border border-gray-400 rounded-l-full "
            type="text"
            placeholder="Search"
            value={searchQuery}
            // onClick={(e) => setSearchQuery(e.target.value)}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border   border-gray-400 w-[40px]   h-[41px]  rounded-r-full">
            🔍
          </button>
          {/*<img className="w-8 p-1 m-1 " alt="microphone" src={microphone} />*/}
        </div>

        {showSuggestions && (
          <div className=" bg-white py-2 px-3 m-2 w-96  rounded-lg text-black absolute ">
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="py-2 px-3 shadow-sm hover:bg-neutral-400"
                >
                  🔍{s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex items-center gap-4">
        <div>
          <FiBell className="text-xl  text-black cursor-pointer " />
        </div>
        <img
          className="h-8 "
          alt="user"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTalURue8uREswsyHXvJ9qmw4TSZqCxIEQNjg&usqp=CAU"
        />
      </div>
    </div>
  );
};

export default Header;
