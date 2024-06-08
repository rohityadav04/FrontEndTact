import { useTonConnect } from '@/hooks/useTonConnect';
import { CHAIN, TonConnectButton } from '@tonconnect/ui-react';
import s from './Wallet.module.scss';

type Props = {};

const Wallet = (props: Props) => {
  const { network, connected } = useTonConnect();

  return (
    <>
      <div className={s.container}>
        <TonConnectButton />
        <button>
          {network
            ? network === CHAIN.MAINNET
              ? 'mainnet'
              : 'testnet'
            : 'N/A'}
        </button>
      </div>
    </>
  );
};

export default Wallet;
