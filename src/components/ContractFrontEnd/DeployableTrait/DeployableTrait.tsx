'use client';
import { Counter } from '@/CompileCode/tact_Counter';
import TonConnectSender from '@/components/TonConnectSender';
import { getHttpEndpoint } from '@orbs-network/ton-access';
import { Sender, toNano } from '@ton/core';
import { TonClient } from '@ton/ton';
import { useTonConnectUI } from '@tonconnect/ui-react';
import { useState } from 'react';
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

    const counterContract = await Counter.fromInit();
    const tactCounter = client.open(counterContract);

    const value = await tactCounter.getValue();

    setVal(+value.toString());
  };

  // Update or increment function

  const updateData = async () => {
    let sender: Sender | null = null;
    sender = new TonConnectSender(tonConnector.connector);

    const endpoint = await getHttpEndpoint({
      network: 'testnet',
    });

    const client = new TonClient({ endpoint });

    const tactCounter = client.open(await Counter.fromInit());

    const increaseResult = await tactCounter.send(
      sender,
      {
        value: toNano('0.05'),
      },
      'increment'
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
