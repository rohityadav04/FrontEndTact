import { Integers } from '@/CompileCode/tact_Integers';
import TonConnectSender from '@/components/TonConnectSender';
import Wallet from '@/components/Wallet/Wallet';
import { useTonConnect } from '@/hooks/useTonConnect';
import { getHttpEndpoint } from '@orbs-network/ton-access';
import { useTonConnectUI } from '@tonconnect/ui-react';
import { Sender, TonClient, toNano } from 'ton';

type Props = {};

const Integer = (props: Props) => {
  const { network, connected } = useTonConnect();

  const [tonConnector] = useTonConnectUI();

  //Function for getting result

  const getData = async () => {
    let sender: Sender | null = null;
    sender = new TonConnectSender(tonConnector.connector);

    const endpoint = await getHttpEndpoint({
      network: 'testnet',
    });

    const client = new TonClient({ endpoint });

    const result = client.open(await Integers.fromInit());

    const data = await result.getResult();

    console.log('Integers', data);
  };

  const getAll = async () => {
    let sender: Sender | null = null;
    sender = new TonConnectSender(tonConnector.connector);

    const endpoint = await getHttpEndpoint({
      network: 'testnet',
    });

    const client = new TonClient({ endpoint });

    const result = client.open(await Integers.fromInit());

    const data = await result.send(
      sender,
      {
        value: toNano('0.05'),
      },
      'show all'
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
                  getData();
                }}
              >
                Get Result
              </button>
            </div>
            <div className="incrBtn">
              <button
                onClick={() => {
                  getAll();
                }}
              >
                Show All
              </button>
            </div>
          </div>

          <div className="value">Your Result is {}</div>
          <div className="value">Your All Value is {}</div>
        </div>
      </div>
    </>
  );
};

export default Integer;
