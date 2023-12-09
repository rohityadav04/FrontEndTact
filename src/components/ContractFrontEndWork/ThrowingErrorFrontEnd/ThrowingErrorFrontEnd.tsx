import { Errors } from '@/CompileCode/tact_Error';
import TonConnectSender from '@/components/TonConnectSender';
import Wallet from '@/components/Wallet/Wallet';
import { getHttpEndpoint } from '@orbs-network/ton-access';
import { useTonConnectUI } from '@tonconnect/ui-react';
import { TonClient } from 'ton';
import { Sender } from 'ton-core';

type Props = {};

const ThrowingErrorFrontEnd = (props: Props) => {
  const [tonConnector] = useTonConnectUI();

  const getValue = async () => {
    let sender: Sender | null = null;
    sender = new TonConnectSender(tonConnector.connector);

    const endpoint = await getHttpEndpoint({
      network: 'testnet',
    });

    const client = new TonClient({ endpoint });

    const result = client.open(await Errors.fromInit());

    const data = await result.getValue();

    console.log('Throwing Error', data);
  };
  const Increment = async () => {};
  const Divide2 = async () => {};
  const Divide0 = async () => {};
  const sendNoAccess = async () => {};

  return (
    <>
      <div className="container">
        <Wallet />

        <div className="dataWrappper">
          <div className="buttonWrapper">
            <div className="getBtn">
              <button
                onClick={() => {
                  getValue();
                }}
              >
                Get Value
              </button>
            </div>
            <div className="incrBtn">
              <button
                onClick={() => {
                  Increment();
                }}
              >
                Increment
              </button>
            </div>
            <div className="incrBtn">
              <button
                onClick={() => {
                  Divide2();
                }}
              >
                Divide2{' '}
              </button>
            </div>
            <div className="incrBtn">
              <button
                onClick={() => {
                  Divide0();
                }}
              >
                Divide0
              </button>
            </div>
            <div className="incrBtn">
              <button
                onClick={() => {
                  sendNoAccess();
                }}
              >
                Send no access{' '}
              </button>
            </div>
          </div>

          <div className="value">Your Result is {}</div>
        </div>
      </div>
    </>
  );
};

export default ThrowingErrorFrontEnd;
