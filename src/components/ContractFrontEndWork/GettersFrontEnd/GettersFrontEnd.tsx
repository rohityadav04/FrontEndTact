import { Getters } from '@/CompileCode/tact_Getters';
import TonConnectSender from '@/components/TonConnectSender';
import Wallet from '@/components/Wallet/Wallet';
import { getHttpEndpoint } from '@orbs-network/ton-access';
import { useTonConnectUI } from '@tonconnect/ui-react';
import { TonClient } from 'ton';
import { Sender } from 'ton-core';

type Props = {};

const GettersFrontEnd = (props: Props) => {
  const [tonConnector] = useTonConnectUI();

  const getCounter = async () => {
    let sender: Sender | null = null;
    sender = new TonConnectSender(tonConnector.connector);

    const endpoint = await getHttpEndpoint({
      network: 'testnet',
    });

    const client = new TonClient({ endpoint });

    const result = client.open(await Getters.fromInit());

    const data = await result.getCounter();

    console.log('Counters', data);
  };

  const getLocation = async () => {
    let sender: Sender | null = null;
    sender = new TonConnectSender(tonConnector.connector);

    const endpoint = await getHttpEndpoint({
      network: 'testnet',
    });

    const client = new TonClient({ endpoint });

    const result = client.open(await Getters.fromInit());

    const data = await result.getLocation();

    console.log('Location', data);
  };

  const getGreeting = async () => {
    let sender: Sender | null = null;
    sender = new TonConnectSender(tonConnector.connector);

    const endpoint = await getHttpEndpoint({
      network: 'testnet',
    });

    const client = new TonClient({ endpoint });

    const result = client.open(await Getters.fromInit());

    const GreetingData = await result.getGreeting();

    console.log('Greeting data', GreetingData);
  };
  const getSum = async () => {
    let sender: Sender | null = null;
    sender = new TonConnectSender(tonConnector.connector);

    const endpoint = await getHttpEndpoint({
      network: 'testnet',
    });

    const client = new TonClient({ endpoint });

    const result = client.open(await Getters.fromInit());

    const SumData = await result.getSum(BigInt(2), BigInt(4));

    console.log('Sum data', SumData);
  };
  const getAnd = async () => {
    let sender: Sender | null = null;
    sender = new TonConnectSender(tonConnector.connector);

    const endpoint = await getHttpEndpoint({
      network: 'testnet',
    });

    const client = new TonClient({ endpoint });

    const result = client.open(await Getters.fromInit());

    const AndData = await result.getAnd(true, false);

    console.log('And data', AndData);
  };

  const getAnswer = async () => {
    let sender: Sender | null = null;
    sender = new TonConnectSender(tonConnector.connector);

    const endpoint = await getHttpEndpoint({
      network: 'testnet',
    });

    const client = new TonClient({ endpoint });

    const result = client.open(await Getters.fromInit());

    const AnswerData = await result.getAnswer(BigInt(10));

    console.log('Answer data', AnswerData);
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
                  getCounter();
                }}
              >
                Get counter
              </button>
            </div>
            <div className="getBtn">
              <button
                onClick={() => {
                  getLocation();
                }}
              >
                Get Location{' '}
              </button>
            </div>
            <div className="getBtn">
              <button
                onClick={() => {
                  getGreeting();
                }}
              >
                Get Greeting{' '}
              </button>
            </div>
            <div className="getBtn">
              <button
                onClick={() => {
                  getSum();
                }}
              >
                Get Sum{' '}
              </button>
            </div>
            <div className="getBtn">
              <button
                onClick={() => {
                  getAnd();
                }}
              >
                Get And{' '}
              </button>
            </div>
            <div className="getBtn">
              <button
                onClick={() => {
                  getAnswer();
                }}
              >
                Get Answer{' '}
              </button>
            </div>
          </div>

          <div className="value">Your Result is {}</div>
        </div>
      </div>
    </>
  );
};

export default GettersFrontEnd;
