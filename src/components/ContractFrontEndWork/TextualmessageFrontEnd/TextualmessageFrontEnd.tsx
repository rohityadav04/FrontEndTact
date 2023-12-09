import { Receivers1 } from '@/CompileCode/tact_Receivers1';
import TonConnectSender from '@/components/TonConnectSender';
import Wallet from '@/components/Wallet/Wallet';
import { getHttpEndpoint } from '@orbs-network/ton-access';
import { useTonConnectUI } from '@tonconnect/ui-react';
import { TonClient } from 'ton';
import { Sender } from 'ton-core';

type Props = {};

const TextualmessageFrontEnd = (props: Props) => {
  const [tonConnector] = useTonConnectUI();

  const getValue = async () => {
    let sender: Sender | null = null;
    sender = new TonConnectSender(tonConnector.connector);

    const endpoint = await getHttpEndpoint({
      network: 'testnet',
    });

    const client = new TonClient({ endpoint });

    const result = client.open(await Receivers1.fromInit());

    const data = await result.getValue();

    console.log('value', data);
  };

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
                  increment();
                }}
              >
                Increment{' '}
              </button>
            </div>
            <div className="incrBtn">
              <button
                onClick={() => {
                  decrement();
                }}
              >
                Decrement{' '}
              </button>
            </div>
            <div className="incrBtn">
              <button
                onClick={() => {
                  IncrementBy2();
                }}
              >
                IncrementBy2{' '}
              </button>
            </div>
            <div className="incrBtn">
              <button
                onClick={() => {
                  IncrementBy3();
                }}
              >
                IncrementBy3{' '}
              </button>
            </div>
          </div>

          <div className="value">Your Result is {}</div>
        </div>
      </div>
    </>
  );
};

export default TextualmessageFrontEnd;
