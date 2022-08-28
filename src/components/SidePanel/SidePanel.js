import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import { useRecoilState } from "recoil";
import { handleSide } from "../../atoms/sideAtom";
import QuesList from "../Ques/QuesList";
import UserPanel from "../UserPanel/UserPanel";

const SidePanel = () => {
  const { quesList } = useSelector((state) => state.form);
  const [handleside, sethandleside] = useRecoilState(handleSide);
  return (
    <div
      className={
        handleside == true
          ? "h-full fixed left-0 top-0 block bg-slate-700 text-cyan-100 "
          : "h-full fixed left-0 top-0 hidden sm:block bg-slate-700 text-cyan-100 "
      }
      style={{ width: "260px" }}
    >
      <header>
        <UserPanel />
      </header>
      <div className="mt-2 px-4 py-1">
        <QuesList quesList={quesList} />
      </div>
    </div>
  );
};

export default SidePanel;
