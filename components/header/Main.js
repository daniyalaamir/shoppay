import { useSelector } from 'react-redux';
import Link from 'next/link';
import styles from './styles.module.scss';
import { RiSearch2Line } from "react-icons/ri";
import { FaOpencart } from "react-icons/fa";

export default function Main() {
  const { cart } = useSelector((state) => ({ ...state }));

  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <Link href="/">
          <a className={styles.logo}>
            <img src="../../../logo.png" alt="" />
          </a>
        </Link>
        <div className={styles.search}>
          <input type="text" placeholder="Search..." />
          <div className={styles.search__icon}>
            <RiSearch2Line />
          </div>
        </div>
        <Link href="/cart">
          <a className={styles.cart}>
            <FaOpencart />
            <span>0</span>
          </a>
        </Link>
      </div>
    </div>
  )
}
