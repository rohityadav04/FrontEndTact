import { Counter } from '@/CompileCode/tact_Counter';
import TonConnectSender from '@/components/TonConnectSender';
import Wallet from '@/components/Wallet/Wallet';
import { getHttpEndpoint } from '@orbs-network/ton-access';
import { useTonConnectUI } from '@tonconnect/ui-react';
import { TonClient } from 'ton';
import { Sender } from 'ton-core';

type Props = {};

const MBCFrontEnd = (props: Props) => {
  const [tonConnector] = useTonConnectUI();

  //Function for getting result

  const getValue = async () => {
    let sender: Sender | null = null;
    sender = new TonConnectSender(tonConnector.connector);

    const endpoint = await getHttpEndpoint({
      network: 'testnet',
    });

    const client = new TonClient({ endpoint });

    const result = client.open(await Counter.fromInit());

    const data = await result.getValue();

    console.log('MBC', data);
  };

  const SendReach5 = async () => {};

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
                  SendReach5();
                }}
              >
                SendReach5
              </button>
            </div>
          </div>

          <div className="value">Your Result is {}</div>
        </div>
      </div>
    </>
  );
};

export default MBCFrontEnd;
