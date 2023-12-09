import { NftItem } from '@/CompileCode/tact_NftItem';
import TonConnectSender from '@/components/TonConnectSender';
import Wallet from '@/components/Wallet/Wallet';
import { getHttpEndpoint } from '@orbs-network/ton-access';
import { useTonConnectUI } from '@tonconnect/ui-react';
import { TonClient } from 'ton';
import { Address, Cell, Sender } from 'ton-core';

type Props = {};

const NFTFrontEndWork = (props: Props) => {
  const [tonConnector] = useTonConnectUI();

  const getData = async () => {
    let sender: Sender | null = null;
    sender = new TonConnectSender(tonConnector.connector);

    const endpoint = await getHttpEndpoint({
      network: 'testnet',
    });

    const client = new TonClient({ endpoint });

    const result = client.open(
      await NftItem.fromInit(
        new Address(12, []),
        BigInt(0),
        Address('234'),
        Cell()
      )
    );

    const data = await result.getGetNftData();

    console.log('NFTITEM', data);
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

export default NFTFrontEndWork;
