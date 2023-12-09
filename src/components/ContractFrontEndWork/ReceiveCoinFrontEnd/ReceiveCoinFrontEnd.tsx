import { ReceiveCoins } from '@/CompileCode/tact_ReceiveCoins';
import TonConnectSender from '@/components/TonConnectSender';
import Wallet from '@/components/Wallet/Wallet';
import { getHttpEndpoint } from '@orbs-network/ton-access';
import { useTonConnectUI } from '@tonconnect/ui-react';
import { TonClient } from 'ton';
import { Sender } from 'ton-core';

type Props = {};

const ReceiveCoinFrontEnd = (props: Props) => {
  const [tonConnector] = useTonConnectUI();

  const getBalance = async () => {
    let sender: Sender | null = null;
    sender = new TonConnectSender(tonConnector.connector);

    const endpoint = await getHttpEndpoint({
      network: 'testnet',
    });

    const client = new TonClient({ endpoint });

    const result = client.open(await ReceiveCoins.fromInit());

    const Balance = await result.getBalance();

    console.log('receive coin', Balance);
  };

  const send1Ton = async () => {};
  const Increment = async () => {};
  const refundingIncrement = async () => {};

  return (
    <>
      <div className="container">
        <Wallet />

        <div className="dataWrappper">
          <div className="buttonWrapper">
            <div className="getBtn">
              <button
                onClick={() => {
                  getBalance();
                }}
              >
                Get Balance
              </button>
            </div>
            <div className="incrBtn">
              <button
                onClick={() => {
                  send1Ton();
                }}
              >
                Send 1 Ton{' '}
              </button>
            </div>
            <div className="incrBtn">
              <button
                onClick={() => {
                  Increment();
                }}
              >
                Increment{' '}
              </button>
            </div>
            <div className="incrBtn">
              <button
                onClick={() => {
                  refundingIncrement();
                }}
              >
                Refunding Increment{' '}
              </button>
            </div>
          </div>

          <div className="value">Your Result is {}</div>
        </div>
      </div>
    </>
  );
};

export default ReceiveCoinFrontEnd;
