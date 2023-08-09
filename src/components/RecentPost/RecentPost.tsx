import { FC } from 'react';
import s from './RecentPost.module.scss';

const RecentPost: FC = () => {
  return (
    <>
      <div className={s.root}>
        <div className={s.container}>
          <div className={`heading ${s.heading}`}>MOST RECENT POSTS</div>
        </div>
      </div>
    </>
  );
};
export default RecentPost;
