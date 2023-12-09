'use client';
import { TactCounter } from '@/CompileCode/tact_TactCounter';
import TonConnectSender from '@/components/TonConnectSender';
import { getHttpEndpoint } from '@orbs-network/ton-access';
import { useTonConnectUI } from '@tonconnect/ui-react';
import { useState } from 'react';
import { TonClient } from 'ton';
import { Sender, toNano } from 'ton-core';
import Wallet from '../../Wallet/Wallet';
import s from './DeployableTrait.module.scss';

type Props = {};

const DeployableTrait = (props: Props) => {
  const [tonConnector] = useTonConnectUI();

  const [val, setVal] = useState<null | number>();
  console.log(val);

  //get function

  const getData = async () => {
    let sender: Sender | null = null;
    sender = new TonConnectSender(tonConnector.connector);

    const endpoint = await getHttpEndpoint({
      network: 'testnet',
    });

    const client = new TonClient({ endpoint });

    const tactCounter = client.open(await TactCounter.fromInit(BigInt(0)));

    const value = await tactCounter.getCounter();

    // setVal(value);
  };

  // Update or increment function

  const updateData = async () => {
    let sender: Sender | null = null;
    sender = new TonConnectSender(tonConnector.connector);

    const endpoint = await getHttpEndpoint({
      network: 'testnet',
    });

    const client = new TonClient({ endpoint });

    const tactCounter = client.open(await TactCounter.fromInit(BigInt(0)));

    const increaseResult = await tactCounter.send(
      sender,
      {
        value: toNano('0.05'),
      },
      {
        $$type: 'Add',
        queryId: BigInt(0),
        amount: BigInt(1),
      }
    );
  };
  return (
    <>
      <div className={s.root}>
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
                  Get Value
                </button>
              </div>
              <div className="incrBtn">
                <button
                  onClick={() => {
                    updateData();
                  }}
                >
                  Send Increment
                </button>
              </div>
            </div>

            <div className="value">Your Value is {val}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeployableTrait;
