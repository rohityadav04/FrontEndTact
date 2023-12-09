import Link from 'next/link';
import s from './Dashboard.module.scss';
type Props = {};

const DashBoard = (props: Props) => {
  return (
    <>
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.title}>
            FrontEnd Integration With Ton BlockChain
          </div>
          <div className={s.boxWrapper}>
            <Link href="/01-the-deployable-trait">
              <div className={s.box}>The Deployable Trait</div>
            </Link>
            <Link href="/02-integers">
              <div className={s.box}>Integers</div>
            </Link>
            <Link href="/02-integer-ops">
              <div className={s.box}>Integer Operations</div>
            </Link>
            <Link href="/02-bools">
              <div className={s.box}>Bools</div>
            </Link>
            <Link href="/02-addresses">
              <div className={s.box}>Addresses</div>
            </Link>
            <Link href="/02-strings">
              <div className={s.box}>Strings</div>
            </Link>
            <Link href="/02-variables">
              <div className={s.box}>Variables</div>
            </Link>
            <Link href="/02-constants">
              <div className={s.box}>Constants</div>
            </Link>
            <Link href="/03-getters">
              <div className={s.box}>Getters</div>
            </Link>
            <Link href="/03-receivers">
              <div className={s.box}>Receivers and Messages</div>
            </Link>
            <Link href="/03-textual-messages">
              <div className={s.box}>Textual Messages</div>
            </Link>
            <Link href="/03-sender">
              <div className={s.box}> Message Sender</div>
            </Link>
            <Link href="/03-errors">
              <div className={s.box}>Throwing Errors</div>
            </Link>
            <Link href="/03-receive-coins">
              <div className={s.box}>Receiving TON Coins</div>
            </Link>
            <Link href="/03-messages-between-contracts">
              <div className={s.box}>Messages Between Contracts</div>
            </Link>
            <Link href="/03-textual-messages">
              <div className={s.box}>Sending TON Coins</div>
            </Link>
            <Link href="/03-textual-messages">
              <div className={s.box}>Emitting Logs</div>
            </Link>
            <Link href="/03-textual-messages">
              <div className={s.box}>If Statements</div>
            </Link>
            <Link href="/03-textual-messages">
              <div className={s.box}>Loops</div>
            </Link>
            <Link href="/03-textual-messages">
              <div className={s.box}>Functions</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
