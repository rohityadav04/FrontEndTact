import Image from 'next/image';
import { FC } from 'react';
import s from './LiveStats.module.scss';

const LiveStats: FC = () => {
  return (
    <>
      <div className={s.root}>
        <div className={s.container}>
          <div className={`heading livestats-heading ${s.heading}`}>
            live stats
          </div>
          <div className={`livestats-card ${s.card}`}>
            <div className={s.left}>
              <div className={`subHeading ${s.subHeading}`}>zck</div>
              <div className={`heading ${s.heading}`}>-585</div>
            </div>
            <div className={s.right}>
              <div className={`subHeading ${s.subHeading}`}>msk</div>
              <div className={`heading heading-green ${s.heading}`}>+165</div>
            </div>
            <div className={s.rounded}>
              <Image
                alt="arrow"
                height={86}
                width={86}
                src="/images/icon/round.svg"
                className={s.round}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveStats;
