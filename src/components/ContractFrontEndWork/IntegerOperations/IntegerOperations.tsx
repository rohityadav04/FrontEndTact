import { Integers1 } from '@/CompileCode/tact_Integers1';
import TonConnectSender from '@/components/TonConnectSender';
import Wallet from '@/components/Wallet/Wallet';
import { getHttpEndpoint } from '@orbs-network/ton-access';

import { useTonConnectUI } from '@tonconnect/ui-react';
import { TonClient } from 'ton';
import { Sender, toNano } from 'ton-core';

type Props = {};

const IntegerOperations = (props: Props) => {
  const [tonConnector] = useTonConnectUI();

  const showOps = async () => {
    let sender: Sender | null = null;
    sender = new TonConnectSender(tonConnector.connector);

    const endpoint = await getHttpEndpoint({
      network: 'testnet',
    });

    const client = new TonClient({ endpoint });

    const result = client.open(await Integers1.fromInit());

    const data = await result.send(
      sender,
      {
        value: toNano('0.05'),
      },
      'show ops'
    );
    console.log(data, 'rohit');
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
                  showOps();
                }}
              >
                Show Ops
              </button>
            </div>
          </div>

          <div className="value">Your Result is {}</div>
        </div>
      </div>
    </>
  );
};

export default IntegerOperations;
