import { Bools } from '@/CompileCode/tact_Bools';
import TonConnectSender from '@/components/TonConnectSender';
import Wallet from '@/components/Wallet/Wallet';
import { getHttpEndpoint } from '@orbs-network/ton-access';
import { useTonConnectUI } from '@tonconnect/ui-react';
import { TonClient } from 'ton';
import { Sender } from 'ton-core';

type Props = {};

const BoolFrontEnd = (props: Props) => {
  const [tonConnector] = useTonConnectUI();

  const getData = async () => {
    let sender: Sender | null = null;
    sender = new TonConnectSender(tonConnector.connector);

    const endpoint = await getHttpEndpoint({
      network: 'testnet',
    });

    const client = new TonClient({ endpoint });

    const result = client.open(await Bools.fromInit());

    const data = await result.getResult();

    console.log('Bools', data);
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
                  getData();
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

          <div className="value">Your Result is {}</div>
        </div>
      </div>
    </>
  );
};

export default BoolFrontEnd;
