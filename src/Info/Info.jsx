import React from "react";
import s from "./Info.module.css";
import { Interests } from "./interests/interests";

export const Info = () => {
  return (
    <>
      <div className={s.info}>
        <div className={s.nameUser}>
          <h1>
            Vladislaw <span>Sergeevich</span>
          </h1>
          <h1>UI Designer</h1>
        </div>
        <div className={s.work}>Work Experiance</div>
        <div className={s.reference}>Reference</div>
        <Interests />
      </div>
    </>
  );
};
