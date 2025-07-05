import styles from './reviews.module.css'
import type { Review } from '../../types/types'
import { useState } from 'react'
import Avatar from '../../assets/Avatar.svg'
import Avatar2 from '../../assets/VovaB.png'
import Avatar3 from '../../assets/VovaKrasavetch.jpg'
import Avatar4 from '../../assets/SmartPersonWallpaperDownload.jpg'

const reviews: Review[] = [
  {
    name: 'Jethalal Gada',
    avatar: Avatar,
    text: 'Love my new Apple Airpods! It\'s sleek, packed with features, and has great battery life. Highly recommend!',
  },
  {
    name: 'Vova Barilnik',
    avatar: Avatar2,
    text: 'Absolutely thrilled with my purchase. The sound quality is top-notch and the comfort is unmatched.',
  },
  {
    name: 'Vova Krasavetch',
    avatar: Avatar3,
    text: 'Best gadget investment I\'ve made this year. The design is stunning and performance is flawless!',
  },
  {
    name: 'Smart Person',
    avatar: Avatar4,
    text: 'Fantastic purchase overall! Elegant design, lightning-fast performance, and battery that keeps going all day — absolutely love it',
  },
];

export default function Reviews() {
  const [idx, setIdx] = useState(0);

  const next = () => setIdx((i) => (i + 1) % reviews.length);
  const prev = () => setIdx((i) => (i - 1 + reviews.length) % reviews.length);

  const len = reviews.length;

  const getPosClass = (i: number) => {
    if (i === idx) return styles['active'];
    if (i === (idx - 1 + len) % len) return styles['prev'];
    if (i === (idx + 1) % len) return styles['next'];
    return styles['off'];
  };

  return (
    <>
        <div className={styles['title']}>Our Customers Say</div>
        <div className={styles['slider']}>
            <button onClick={prev} className={`${styles['arrow']} ${styles['prevArrow']}`} aria-label="Previous review">
                ‹
            </button>

            <div className={styles['wrapper']}>
                {reviews.map((r, i) => (
                <div key={i} className={`${styles['card']} ${getPosClass(i)}`}>
                    <img src={r.avatar} className={styles['avatar']} alt='avatar'/>
                    <h3 className={styles['name']}>{r.name}</h3>
                    <p className={styles['text']} >{r.text}</p>
                </div>
                ))}
            </div>

            <button onClick={next} className={`${styles['arrow']} ${styles['nextArrow']}`} aria-label="Next review">
                ›
            </button>
        </div>
    </>
  );
}