import { Variables } from '@/CompileCode/tact_Variables';
import TonConnectSender from '@/components/TonConnectSender';
import Wallet from '@/components/Wallet/Wallet';
import { getHttpEndpoint } from '@orbs-network/ton-access';
import { useTonConnectUI } from '@tonconnect/ui-react';
import { TonClient } from 'ton';
import { Sender } from 'ton-core';

type Props = {};

const VariablesFrontEnd = (props: Props) => {
  const [tonConnector] = useTonConnectUI();

  const getSum = async () => {
    let sender: Sender | null = null;
    sender = new TonConnectSender(tonConnector.connector);

    const endpoint = await getHttpEndpoint({
      network: 'testnet',
    });

    const client = new TonClient({ endpoint });

    const result = client.open(await Variables.fromInit(BigInt(10)));

    const data = await result.getSum(BigInt(10));

    console.log('Variables', data);
  };

  const Increment = async () => {};

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
            <div className="incrBtn">
              <button
                onClick={() => {
                  Increment();
                }}
              >
                Increment
              </button>
            </div>
          </div>

          <div className="value">Your Result is {}</div>
        </div>
      </div>
    </>
  );
};

export default VariablesFrontEnd;
