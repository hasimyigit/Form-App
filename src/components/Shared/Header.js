import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useRecoilState } from "recoil";
import logo from "../../adalogo.png";
import { handleSide } from "../../atoms/sideAtom";
const Header = () => {
  const [handleside, sethandleside] = useRecoilState(handleSide);
  return (
    <header className="flex items-center justify-between py-2 px-3 bg-slate-200 ">
      {
        handleside == true ?  <FontAwesomeIcon
        icon={faTimes}
        size={"2x"}
        className="sm:hidden block absolute top-2 text-red-600"
        onClick={() => {
          sethandleside(!handleside);
        }}
      /> :
      <FontAwesomeIcon
        icon={faBars}
        className="sm:hidden block"
        onClick={() => {
          sethandleside(!handleside);
        }}/>
      }
    
      <img src={logo} className="w-16"></img>
      <h1 className="italic font-serif font-medium text-teal-700">
        Ada Ekibi Anket Uygulaması
      </h1>
    </header>
  );
};

export default Header;
