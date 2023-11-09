import { useDispatch } from "react-redux";
import s from "./CategoryItem.module.scss";
import React from "react";


export default function CategoryItem({ category }) {
    const dispatch = useDispatch();
    const handleClick = () => {

    }
    return (
        <div className={s.category__item} onClick={handleClick}>

            <div className={s.category__img}>
                <img
                    src={`http://localhost:3333/${category.image}`}
                    alt={category.title}
                />
            </div>
            <h2>{category.title}</h2>
        </div>
    );
}
