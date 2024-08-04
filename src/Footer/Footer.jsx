import React from "react";
import s from "./Footer.module.css";

export const Footer = () => {
  return (
    <>
      <div className={s.footer}>
        <div className={s.expertise}>
          Expertise
          <div className={s.cherta}>-</div>
        </div>
        <div className={s.skills}>
          <div className={s.design}>
            Design <div></div>
          </div>
          <div className={s.lifecoding}>
            Life-Coding
            <div></div>
          </div>
          <div className={s.communication}>Communication
          <div></div>
          </div>
          
        </div>

        <div className={s.contactsInfo}>
          <div className={s.phone}>
            Phone
            <div>+7-918-537-49-22</div>
          </div>
          <div className={s.email}>
            Email
            <div>pugachev.2013@yandex.ru</div>
          </div>
          <div className={s.area}>
            Area
            <div>Rostov-on-Don, st.Beregovaya 73</div>
          </div>
        </div>
      </div>
    </>
  );
};
