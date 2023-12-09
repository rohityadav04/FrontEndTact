import { Constants } from '@/CompileCode/tact_Constants';
import TonConnectSender from '@/components/TonConnectSender';
import Wallet from '@/components/Wallet/Wallet';
import { getHttpEndpoint } from '@orbs-network/ton-access';
import { useTonConnectUI } from '@tonconnect/ui-react';
import { useState } from 'react';
import { TonClient } from 'ton';
import { Sender } from 'ton-core';

type Props = {};

const ConstantFrontEnd = (props: Props) => {
  const [tonConnector] = useTonConnectUI();

  const [val, setVal] = useState('');

  const getSum = async () => {
    let sender: Sender | null = null;
    sender = new TonConnectSender(tonConnector.connector);

    const endpoint = await getHttpEndpoint({
      network: 'testnet',
    });

    const client = new TonClient({ endpoint });

    const result = client.open(await Constants.fromInit());

    const data = await result.getSum();

    console.log('Constant', data);
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
                  getSum();
                }}
              >
                Get Sum
              </button>
            </div>
          </div>

          <div className="value">Your Result is {val}</div>
        </div>
      </div>
    </>
  );
};

export default ConstantFrontEnd;
