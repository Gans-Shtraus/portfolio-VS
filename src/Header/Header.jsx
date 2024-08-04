import React from "react";
import s from "./Header.module.css"

export const Header = () => {
    return (
        <>
        <div className={s.header}>
           <div className={s.photo}>
            <img src="https://media.istockphoto.com/id/168415745/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%87%D0%B5%D1%80%D0%BD%D0%B0%D1%8F-panther.jpg?s=612x612&w=0&k=20&c=xVoy_WvEhHNSfNyseH-fVA_F51Sz_kZQLGjEXjBc6LQ=" alt="" className={s.img}/>
           </div>
           <div className={s.profession}>
           <h1>
        
            UI DESIGNER
            </h1>
           </div>
           <div>
           time work
           </div>
        </div>
        </>
    )
}
