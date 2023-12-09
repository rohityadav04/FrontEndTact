import Wallet from '@/components/Wallet/Wallet';

type Props = {};

const MessageSenderFrontEnd = (props: Props) => {
  const sendWhoDeveloper = async () => {};
  const sendWhoSender2 = async () => {};
  const sendHelloDeveloper = async () => {};
  const sendHelloSender2 = async () => {};

  return (
    <>
      <div className="container">
        <Wallet />

        <div className="dataWrappper">
          <div className="buttonWrapper">
            <div className="incrBtn">
              <button
                onClick={() => {
                  sendWhoDeveloper();
                }}
              >
                Get Value
              </button>
            </div>
            <div className="incrBtn">
              <button
                onClick={() => {
                  sendWhoSender2();
                }}
              >
                Increment{' '}
              </button>
            </div>
            <div className="incrBtn">
              <button
                onClick={() => {
                  sendHelloDeveloper();
                }}
              >
                Decrement{' '}
              </button>
            </div>
            <div className="incrBtn">
              <button
                onClick={() => {
                  sendHelloSender2();
                }}
              >
                Add{' '}
              </button>
            </div>
          </div>

          <div className="value">Your Result is {}</div>
        </div>
      </div>
    </>
  );
};

export default MessageSenderFrontEnd;
