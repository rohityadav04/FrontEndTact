/* eslint-disable @next/next/no-html-link-for-pages */
import Image from 'next/image';
import { FC, useState } from 'react';
import s from './Header.module.scss';

const Header: FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const onMenuClick = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenMenu(false);
    let url = e.target.href.split('/#');
    let target = url[url.length - 1];
    let element = document.getElementById(target);
    if (!element) return;
    var headerOffset = 45;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  const menuItems = (className = '') => (
    <div className={`${s.menuWrapper} ${s[className]}`}>
      <div className={s.menuItems}>
        <a
          className={`${s.item} smooth-scroll-menu`}
          href="#"
          onClick={onMenuClick}
        >
          Menu 1
        </a>
        <a
          className={`${s.item} smooth-scroll-menu`}
          href="#product"
          onClick={onMenuClick}
        >
          Menu 2
        </a>
      </div>
      <div className={s.menuItems}>
        <a
          className={`${s.item} smooth-scroll-menu ${s.active}`}
          href="#contact"
          onClick={onMenuClick}
        >
          Menu 3
        </a>
        {/* <Link className={`app-btn ${s.btnAction}`} href="#">
          Get Started <AppIcon name="Play" className="app-icon" />
        </Link> */}
      </div>
    </div>
  );

  return (
    <>
      <div className={`${s.root} ${openMenu ? s.active : ''}`}>
        <Image
          src="/logo.png"
          width={45}
          height={45}
          alt=""
          className={s.logo}
        />
        {menuItems('desktopMenu')}
        <div
          className={`${s.hamburgerMenu}`}
          onClick={() => setOpenMenu(!openMenu)}
        >
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className={`${s.mobileMenu} ${openMenu ? s.active : ''}`}>
        {menuItems()}
      </div>
    </>
  );
};

export default Header;
