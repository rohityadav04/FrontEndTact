import { Addresses } from '@/CompileCode/tact_Addresses';
import TonConnectSender from '@/components/TonConnectSender';
import Wallet from '@/components/Wallet/Wallet';
import { getHttpEndpoint } from '@orbs-network/ton-access';
import { useTonConnectUI } from '@tonconnect/ui-react';
import { TonClient } from 'ton';
import { Sender } from 'ton-core';

type Props = {};

const AddressFrontEnd = (props: Props) => {
  const [tonConnector] = useTonConnectUI();

  //get function

  const getData = async () => {
    let sender: Sender | null = null;
    sender = new TonConnectSender(tonConnector.connector);

    const endpoint = await getHttpEndpoint({
      network: 'testnet',
    });

    const client = new TonClient({ endpoint });

    const Address = client.open(await Addresses.fromInit());

    const value = await Address.getResult();

    console.log(value);
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

          <div className="value">Your Value is {}</div>
        </div>
      </div>
    </>
  );
};

export default AddressFrontEnd;
