import style from './style/navigation.module.scss'

import Link from 'next/link'
const Navigation = () => {
  return (
    <div className={style.navigationWrapper}>
      <div className={style.logo}>logo</div>
      <nav className={style.navigation}>
        <ul>
          <li>
            <Link href="/">
              <a>HOME</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>ABOUT</a>
            </Link>
          </li>
          <li>
            <Link href="/work-w-us">
              <a>WORK w/ US</a>
            </Link>
          </li>
          <li>
            <Link href="/free-resources">
              <a>FREE RESOURCES</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>BLOG</a>
            </Link>
          </li>
          <li>
            <Link href="/shop">
              <a>SHOP</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>CONTACT</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
