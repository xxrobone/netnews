import React, { ReactNode } from 'react';
import Image from 'next/image';
import styles from './Card.module.scss';
import IMG from '@/public/images/01.jpg';

type CardProps = {
  title: string;
  desc: string;
 
};

const Card = ({ title, desc }: CardProps) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.img}>
        <Image
          alt='news image'
          src={IMG}
          fill
          priority
          className={styles.img}
          unoptimized={true}
        />
      </div>
      <div className={styles.info}>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;