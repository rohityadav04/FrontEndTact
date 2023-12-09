import { Strings } from '@/CompileCode/tact_Strings';
import TonConnectSender from '@/components/TonConnectSender';
import Wallet from '@/components/Wallet/Wallet';
import { getHttpEndpoint } from '@orbs-network/ton-access';
import { useTonConnectUI } from '@tonconnect/ui-react';
import { useState } from 'react';
import { TonClient } from 'ton';
import { Sender } from 'ton-core';

type Props = {};

const StringFrontEnd = (props: Props) => {
  const [val, setVal] = useState('');
  const [tonConnector] = useTonConnectUI();

  const getResult = async () => {
    let sender: Sender | null = null;
    sender = new TonConnectSender(tonConnector.connector);

    const endpoint = await getHttpEndpoint({
      network: 'testnet',
    });

    const client = new TonClient({ endpoint });

    const result = client.open(await Strings.fromInit());

    const data = await result.getResult();

    setVal(data);

    console.log('Strings', data);
  };

  const showAll = async () => {};

  const showOps = async () => {};

  return (
    <>
      <div className="container">
        <Wallet />

        <div className="dataWrappper">
          <div className="buttonWrapper">
            <div className="getBtn">
              <button
                onClick={() => {
                  getResult();
                }}
              >
                Get Result
              </button>
            </div>
            <div className="incrBtn">
              <button
                onClick={() => {
                  showAll();
                }}
              >
                Show All
              </button>
            </div>
            <div className="incrBtn">
              <button
                onClick={() => {
                  showOps();
                }}
              >
                Show Ops
              </button>
            </div>
          </div>

          <div className="value">Your Result is {val}</div>
        </div>
      </div>
    </>
  );
};

export default StringFrontEnd;
