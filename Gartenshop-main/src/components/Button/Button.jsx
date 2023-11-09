import React from 'react'
import s from './Button.module.scss';


export default function Button({ name, className, clickHandle }) {

  return (
    <>
      <button className={s[className]} onClick={clickHandle}>{name ? name : 'button'}</button>
    </>
  )
}
