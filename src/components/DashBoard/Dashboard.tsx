import DeployableTrait from '../ContractFrontEnd/DeployableTrait';
import s from './Dashboard.module.scss';
type Props = {};

const DashBoard = (props: Props) => {
  return (
    <>
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.title}>
            FrontEnd Integration With Ton BlockChain(Tact)
          </div>
          <div className={s.boxWrapper}>
            <DeployableTrait />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
