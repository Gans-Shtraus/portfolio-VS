import React from "react";
import s from "./interests.module.css";
export const Interests = () => {
  return (
    <>
      <div>
        <div className={s.interests}>Interests</div>

        <div className={s.traveling}>
          <div className= {s.Traveling}>Traveling</div>
          <div className= {s.music}>Music</div>
          <div className= {s.writing}>Writing</div>
          <div className= {s.chess}>Chess</div>
        </div>
      </div>
    </>
  );
};
