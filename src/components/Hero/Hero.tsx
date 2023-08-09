import Image from 'next/image';
import { FC } from 'react';
import s from './Hero.module.scss';

const Hero: FC = () => {
  return (
    <>
      <div className={s.root}>
        <div className={`container ${s.container}`}>
          <div className={s.left}>
            <div className={s.heading}>
              <div className="heading">@zck </div>
              <div className="heading">40%</div>
            </div>
            <div className={`btn ${s.btn}`}>Bet on ZCK</div>
            <div className={s.imageContainer}>
              <Image
                alt=""
                height={316}
                width={432}
                src="/images/person/zak.png"
                className={s.img}
              />
            </div>
          </div>
          <div className={s.right}>
            <div className={s.heading}>
              <div className="heading heading-big">@msk</div>
              <div className="heading heading-big">60%</div>
            </div>
            <div className={`btn ${s.btn}`}>Bet on MSK</div>
            <div className={s.imageContainer}>
              <Image
                alt=""
                height={438}
                width={600}
                src="/images/person/msk.png"
                className={s.img}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
