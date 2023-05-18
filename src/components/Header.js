import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { Link } from 'react-router-dom';

const Header = () => {

  const dispatch = useDispatch();

const toggleMenuHandler = () => {
  dispatch(toggleMenu());
}

  return (
    <div className="grid h-[53px] grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-4">
        <img onClick={() => toggleMenuHandler()} className="h-6 cursor-pointer" alt="menu" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII=" />
        <a href="/">
          <img className="h-6 mx-2 cursor-pointer" alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" />
        </a>
      </div>
      <div className="flex col-span-7 text-center items-center">
        <input className="w-1/2 p-1 px-4 border border-gray-400 rounded-l-full" type="text" placeholder="Search" />
        <button className="px-3 p-1 border border-gray-400 rounded-r-full border-l-0">
           🔍
        </button>
        <img className="h-5 px-4 cursor-pointer" alt="mic" src="https://www.pngitem.com/pimgs/m/109-1099693_ios-mic-mic-icon-png-free-transparent-png.png" />
      </div>
      <div className="flex col-span-1">
        <img className="h-4 mt-1 px-3 cursor-pointer" alt="create" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5VqR9L9k6aERH_kgBJIPkcTY5QyAMxh3Xjg&usqp=CAU" />
        <img className="h-6 px-3 cursor-pointer" alt="notification" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6OxiWujd38RQ52kPQibOUa4Wka2kzkc8ZwQ&usqp=CAU" />
        <img className="h-6 px-3 cursor-pointer" alt="user" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
      </div>
    </div>
  )
}

export default Header