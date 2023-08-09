'use client';
import Image from 'next/image';
import { FC, useState } from 'react';
import s from './Team.module.scss';

const Team: FC = () => {
  const [isClose, setIsClose] = useState(false);

  const SetClose = () => {
    setIsClose(true);
  };

  return (
    <>
      <div className={s.root}>
        <div className={`container ${s.container}`}>
          {isClose ? (
            ''
          ) : (
            <div className={`closeable-Section ${s.closeableSection}`}>
              <div className={`text ${s.text}`}>
                John made bet on <span>MSK</span> for 0.22 ETH
              </div>
              <div className={s.cross}>
                <Image
                  alt="cross"
                  height={21}
                  width={20}
                  src="/images/icon/cross.png"
                  onClick={SetClose}
                />
              </div>
            </div>
          )}
          <div className={s.logoContainer}>
            <Image
              alt="logo"
              height={110}
              width={207.2}
              src="/images/icon/logo.svg"
              className={s.logo}
            />
          </div>
          <div className={`team-container ${s.teamContainer}`}>
            <div className={`heading ${s.heading}`}>Which Team are ya On?</div>
            <div className={s.btns}>
              <div className={`team-btn ${s.btnGreen}`}>
                <Image
                  alt="icon"
                  height={31}
                  width={46}
                  src="/images/icon/green.svg"
                  className="icon"
                />
                <p>ZCK</p>
              </div>
              <div className={`team-btn ${s.btnRoyalBlue}`}>
                <Image
                  alt="twitter-icon"
                  height={31}
                  width={46}
                  src="/images/icon/twitter.svg"
                  className="twitterIcon"
                />
                <p>MSK</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Team;
