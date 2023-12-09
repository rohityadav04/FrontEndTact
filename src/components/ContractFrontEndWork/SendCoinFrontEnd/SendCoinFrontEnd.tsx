import { SendCoins } from '@/CompileCode/tact_SendCoins';
import TonConnectSender from '@/components/TonConnectSender';
import Wallet from '@/components/Wallet/Wallet';
import { getHttpEndpoint } from '@orbs-network/ton-access';
import { useTonConnectUI } from '@tonconnect/ui-react';
import { useState } from 'react';
import { TonClient } from 'ton';
import { Sender } from 'ton-core';

type Props = {};

const SendCoinFrontEnd = (props: Props) => {
  const [tonConnector] = useTonConnectUI();

  const [val, setVal] = useState('');

  const getBalance = async () => {
    let sender: Sender | null = null;
    sender = new TonConnectSender(tonConnector.connector);

    const endpoint = await getHttpEndpoint({
      network: 'testnet',
    });

    const client = new TonClient({ endpoint });

    const result = client.open(await SendCoins.fromInit());

    const data = await result.getBalance();

    setVal(data);

    console.log('Balance', data);
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
                  getBalance();
                }}
              >
                Get Balance
              </button>
            </div>
            <div className="incrBtn">
              <button
                onClick={() => {
                  // increment();
                }}
              >
                Send 1 Ton{' '}
              </button>
            </div>
            <div className="incrBtn">
              <button
                onClick={() => {
                  // decrement();
                }}
              >
                Send withdraw all{' '}
              </button>
            </div>
            <div className="incrBtn">
              <button
                onClick={() => {
                  // Add();
                }}
              >
                Send withdraw safe{' '}
              </button>
            </div>
            <div className="incrBtn">
              <button
                onClick={() => {
                  // Subtract();
                }}
              >
                Send with draw (1 Ton){' '}
              </button>
            </div>
          </div>

          <div className="value">Your Balance is {val}</div>
        </div>
      </div>
    </>
  );
};

export default SendCoinFrontEnd;
