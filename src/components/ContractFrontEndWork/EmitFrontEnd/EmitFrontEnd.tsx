import Wallet from '@/components/Wallet/Wallet';

type Props = {};

const EmitFrontEnd = (props: Props) => {
  return (
    <>
      <div className="container">
        <Wallet />

        <div className="dataWrappper">
          <div className="buttonWrapper">
            <div className="incrBtn">
              <button onClick={() => {}}>Send Action </button>
            </div>
            <div className="incrBtn">
              <button onClick={() => {}}>Send transfer </button>
            </div>
            <div className="incrBtn">
              <button onClick={() => {}}>Send stake </button>
            </div>
          </div>

          <div className="value">Your Result is {}</div>
        </div>
      </div>
    </>
  );
};

export default EmitFrontEnd;
