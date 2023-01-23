import Image from 'next/image';
import React from 'react';

// import time from '../../../../public/time.svg';
// import money from '../../../../public/billete.svg';
import styles from '../app/page.module.css';

export default function Cardjob({ title, address,/*imagen,*/ description, budget/*, hora*/ }) {
  return (
    <>
    {/* <div className={`${styles['imagen']}`}>
        <Image
          className={`${styles['image_svg']}`}
          src={imagen}
          alt="imagen de trabajo"
        />
      </div> */}
      <div className={`${styles['info']}`}>
        <h3>{title}</h3>
        <h2>{address}</h2>
        <p>{description}</p>
      {/* <div className={`${styles['precio_hora']}`}>
        <span>
            <Image
              className={`|${styles["imagen_time"]}`}
              src={time}
              alt="time"
            />{" "} 
          {hora}
        </span> */}
        <span>
            {/* <Image
              className={`${styles["imagen_money"]}`}
              src={money}
              alt="dinero"
            />{" "} */}
          {budget}
        </span>
      {/* </div> */}
    </div>
    </>
  );
}