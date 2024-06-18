import {
  ABIGetter,
  ABIReceiver,
  ABIType,
  Address,
  Builder,
  Cell,
  Contract,
  ContractABI,
  ContractProvider,
  Dictionary,
  DictionaryValue,
  Sender,
  Slice,
  TupleBuilder,
  TupleReader,
  beginCell,
  contractAddress,
} from '@ton/core';

export type StateInit = {
  $$type: 'StateInit';
  code: Cell;
  data: Cell;
};

export function storeStateInit(src: StateInit) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeRef(src.code);
    b_0.storeRef(src.data);
  };
}

export function loadStateInit(slice: Slice) {
  let sc_0 = slice;
  let _code = sc_0.loadRef();
  let _data = sc_0.loadRef();
  return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
  let _code = source.readCell();
  let _data = source.readCell();
  return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
  let builder = new TupleBuilder();
  builder.writeCell(source.code);
  builder.writeCell(source.data);
  return builder.build();
}

function dictValueParserStateInit(): DictionaryValue<StateInit> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeStateInit(src)).endCell());
    },
    parse: (src) => {
      return loadStateInit(src.loadRef().beginParse());
    },
  };
}

export type Context = {
  $$type: 'Context';
  bounced: boolean;
  sender: Address;
  value: bigint;
  raw: Cell;
};

export function storeContext(src: Context) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeBit(src.bounced);
    b_0.storeAddress(src.sender);
    b_0.storeInt(src.value, 257);
    b_0.storeRef(src.raw);
  };
}

export function loadContext(slice: Slice) {
  let sc_0 = slice;
  let _bounced = sc_0.loadBit();
  let _sender = sc_0.loadAddress();
  let _value = sc_0.loadIntBig(257);
  let _raw = sc_0.loadRef();
  return {
    $$type: 'Context' as const,
    bounced: _bounced,
    sender: _sender,
    value: _value,
    raw: _raw,
  };
}

function loadTupleContext(source: TupleReader) {
  let _bounced = source.readBoolean();
  let _sender = source.readAddress();
  let _value = source.readBigNumber();
  let _raw = source.readCell();
  return {
    $$type: 'Context' as const,
    bounced: _bounced,
    sender: _sender,
    value: _value,
    raw: _raw,
  };
}

function storeTupleContext(source: Context) {
  let builder = new TupleBuilder();
  builder.writeBoolean(source.bounced);
  builder.writeAddress(source.sender);
  builder.writeNumber(source.value);
  builder.writeSlice(source.raw);
  return builder.build();
}

function dictValueParserContext(): DictionaryValue<Context> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeContext(src)).endCell());
    },
    parse: (src) => {
      return loadContext(src.loadRef().beginParse());
    },
  };
}

export type SendParameters = {
  $$type: 'SendParameters';
  bounce: boolean;
  to: Address;
  value: bigint;
  mode: bigint;
  body: Cell | null;
  code: Cell | null;
  data: Cell | null;
};

export function storeSendParameters(src: SendParameters) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeBit(src.bounce);
    b_0.storeAddress(src.to);
    b_0.storeInt(src.value, 257);
    b_0.storeInt(src.mode, 257);
    if (src.body !== null && src.body !== undefined) {
      b_0.storeBit(true).storeRef(src.body);
    } else {
      b_0.storeBit(false);
    }
    if (src.code !== null && src.code !== undefined) {
      b_0.storeBit(true).storeRef(src.code);
    } else {
      b_0.storeBit(false);
    }
    if (src.data !== null && src.data !== undefined) {
      b_0.storeBit(true).storeRef(src.data);
    } else {
      b_0.storeBit(false);
    }
  };
}

export function loadSendParameters(slice: Slice) {
  let sc_0 = slice;
  let _bounce = sc_0.loadBit();
  let _to = sc_0.loadAddress();
  let _value = sc_0.loadIntBig(257);
  let _mode = sc_0.loadIntBig(257);
  let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
  let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
  let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
  return {
    $$type: 'SendParameters' as const,
    bounce: _bounce,
    to: _to,
    value: _value,
    mode: _mode,
    body: _body,
    code: _code,
    data: _data,
  };
}

function loadTupleSendParameters(source: TupleReader) {
  let _bounce = source.readBoolean();
  let _to = source.readAddress();
  let _value = source.readBigNumber();
  let _mode = source.readBigNumber();
  let _body = source.readCellOpt();
  let _code = source.readCellOpt();
  let _data = source.readCellOpt();
  return {
    $$type: 'SendParameters' as const,
    bounce: _bounce,
    to: _to,
    value: _value,
    mode: _mode,
    body: _body,
    code: _code,
    data: _data,
  };
}

function storeTupleSendParameters(source: SendParameters) {
  let builder = new TupleBuilder();
  builder.writeBoolean(source.bounce);
  builder.writeAddress(source.to);
  builder.writeNumber(source.value);
  builder.writeNumber(source.mode);
  builder.writeCell(source.body);
  builder.writeCell(source.code);
  builder.writeCell(source.data);
  return builder.build();
}

function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeSendParameters(src)).endCell());
    },
    parse: (src) => {
      return loadSendParameters(src.loadRef().beginParse());
    },
  };
}

export type Deploy = {
  $$type: 'Deploy';
  queryId: bigint;
};

export function storeDeploy(src: Deploy) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2490013878, 32);
    b_0.storeUint(src.queryId, 64);
  };
}

export function loadDeploy(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2490013878) {
    throw Error('Invalid prefix');
  }
  let _queryId = sc_0.loadUintBig(64);
  return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadTupleDeploy(source: TupleReader) {
  let _queryId = source.readBigNumber();
  return { $$type: 'Deploy' as const, queryId: _queryId };
}

function storeTupleDeploy(source: Deploy) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  return builder.build();
}

function dictValueParserDeploy(): DictionaryValue<Deploy> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeDeploy(src)).endCell());
    },
    parse: (src) => {
      return loadDeploy(src.loadRef().beginParse());
    },
  };
}

export type DeployOk = {
  $$type: 'DeployOk';
  queryId: bigint;
};

export function storeDeployOk(src: DeployOk) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2952335191, 32);
    b_0.storeUint(src.queryId, 64);
  };
}

export function loadDeployOk(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2952335191) {
    throw Error('Invalid prefix');
  }
  let _queryId = sc_0.loadUintBig(64);
  return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadTupleDeployOk(source: TupleReader) {
  let _queryId = source.readBigNumber();
  return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function storeTupleDeployOk(source: DeployOk) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  return builder.build();
}

function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeDeployOk(src)).endCell());
    },
    parse: (src) => {
      return loadDeployOk(src.loadRef().beginParse());
    },
  };
}

export type FactoryDeploy = {
  $$type: 'FactoryDeploy';
  queryId: bigint;
  cashback: Address;
};

export function storeFactoryDeploy(src: FactoryDeploy) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(1829761339, 32);
    b_0.storeUint(src.queryId, 64);
    b_0.storeAddress(src.cashback);
  };
}

export function loadFactoryDeploy(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 1829761339) {
    throw Error('Invalid prefix');
  }
  let _queryId = sc_0.loadUintBig(64);
  let _cashback = sc_0.loadAddress();
  return {
    $$type: 'FactoryDeploy' as const,
    queryId: _queryId,
    cashback: _cashback,
  };
}

function loadTupleFactoryDeploy(source: TupleReader) {
  let _queryId = source.readBigNumber();
  let _cashback = source.readAddress();
  return {
    $$type: 'FactoryDeploy' as const,
    queryId: _queryId,
    cashback: _cashback,
  };
}

function storeTupleFactoryDeploy(source: FactoryDeploy) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  builder.writeAddress(source.cashback);
  return builder.build();
}

function dictValueParserFactoryDeploy(): DictionaryValue<FactoryDeploy> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeFactoryDeploy(src)).endCell());
    },
    parse: (src) => {
      return loadFactoryDeploy(src.loadRef().beginParse());
    },
  };
}

export type Student = {
  $$type: 'Student';
  name: string;
  rollNo: bigint;
  class: string;
};

export function storeStudent(src: Student) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeStringRefTail(src.name);
    b_0.storeUint(src.rollNo, 64);
    b_0.storeStringRefTail(src.class);
  };
}

export function loadStudent(slice: Slice) {
  let sc_0 = slice;
  let _name = sc_0.loadStringRefTail();
  let _rollNo = sc_0.loadUintBig(64);
  let _class = sc_0.loadStringRefTail();
  return {
    $$type: 'Student' as const,
    name: _name,
    rollNo: _rollNo,
    class: _class,
  };
}

function loadTupleStudent(source: TupleReader) {
  let _name = source.readString();
  let _rollNo = source.readBigNumber();
  let _class = source.readString();
  return {
    $$type: 'Student' as const,
    name: _name,
    rollNo: _rollNo,
    class: _class,
  };
}

function storeTupleStudent(source: Student) {
  let builder = new TupleBuilder();
  builder.writeString(source.name);
  builder.writeNumber(source.rollNo);
  builder.writeString(source.class);
  return builder.build();
}

function dictValueParserStudent(): DictionaryValue<Student> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeStudent(src)).endCell());
    },
    parse: (src) => {
      return loadStudent(src.loadRef().beginParse());
    },
  };
}

export type Add = {
  $$type: 'Add';
  name: string;
  rollNo: bigint;
  class: string;
};

export function storeAdd(src: Add) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(1769992108, 32);
    b_0.storeStringRefTail(src.name);
    b_0.storeUint(src.rollNo, 64);
    b_0.storeStringRefTail(src.class);
  };
}

export function loadAdd(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 1769992108) {
    throw Error('Invalid prefix');
  }
  let _name = sc_0.loadStringRefTail();
  let _rollNo = sc_0.loadUintBig(64);
  let _class = sc_0.loadStringRefTail();
  return {
    $$type: 'Add' as const,
    name: _name,
    rollNo: _rollNo,
    class: _class,
  };
}

function loadTupleAdd(source: TupleReader) {
  let _name = source.readString();
  let _rollNo = source.readBigNumber();
  let _class = source.readString();
  return {
    $$type: 'Add' as const,
    name: _name,
    rollNo: _rollNo,
    class: _class,
  };
}

function storeTupleAdd(source: Add) {
  let builder = new TupleBuilder();
  builder.writeString(source.name);
  builder.writeNumber(source.rollNo);
  builder.writeString(source.class);
  return builder.build();
}

function dictValueParserAdd(): DictionaryValue<Add> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeAdd(src)).endCell());
    },
    parse: (src) => {
      return loadAdd(src.loadRef().beginParse());
    },
  };
}

type StudentManagements_init_args = {
  $$type: 'StudentManagements_init_args';
};

function initStudentManagements_init_args(src: StudentManagements_init_args) {
  return (builder: Builder) => {
    let b_0 = builder;
  };
}

async function StudentManagements_init() {
  const __code = Cell.fromBase64(
    'te6ccgECEgEAAw8AART/APSkE/S88sgLAQIBYgIDAuDQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVEts88uCCyPhDAcx/AcoAVSBQI8v/9AABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8Wye1UCwQCASAJCgHqAZIwf+BwIddJwh+VMCDXCx/eIIIQaX/vrLqOTTDTHwGCEGl/76y68uCB1AHQAdM/1AHQQzBsEwWkWYEBAQbIVSDIUAPPFslQA8wSyz/IWM8WyQHMyV4hUkAgbpUwWfRaMJRBM/QV4gF/4IIQlGqYtrrjAjBwBQFO0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yfhCAXBt2zx/BgE6bW0ibrOZWyBu8tCAbyIBkTLiECRwAwSAQlAj2zwHAcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AAgAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwCEb+AHtnm2eNhjAsMAgEgDg8BhO1E0NQB+GPSAAGOJ9P/9AT6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIQzBsE+Aw+CjXCwqDCbry4InbPA0AAiEACHBt+EIAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSAIBSBARABGwr7tRNDSAAGAAdbJu40NWlwZnM6Ly9RbWNwY0RXcFlZd2t1djlpN3lqUkF1a1NQOWprdXBWdDZjUVl4Y1RLVm1xYzI1gg'
  );
  const __system = Cell.fromBase64(
    'te6cckECFAEAAxkAAQHAAQEFobnBAgEU/wD0pBP0vPLICwMCAWIECgLg0AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8VRLbPPLggsj4QwHMfwHKAFUgUCPL//QAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFsntVAwFAeoBkjB/4HAh10nCH5UwINcLH94gghBpf++suo5NMNMfAYIQaX/vrLry4IHUAdAB0z/UAdBDMGwTBaRZgQEBBshVIMhQA88WyVADzBLLP8hYzxbJAczJXiFSQCBulTBZ9FowlEEz9BXiAX/gghCUapi2uuMCMHAGAU7THwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J+EIBcG3bPH8HATptbSJus5lbIG7y0IBvIgGRMuIQJHADBIBCUCPbPAgByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsACQCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAIBIAsPAhG/gB7Z5tnjYYwMDgGE7UTQ1AH4Y9IAAY4n0//0BPpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhDMGwT4DD4KNcLCoMJuvLgids8DQAIcG34QgACIQIBIBARALm7vRgnBc7D1dLK57HoTsOdZKhRtmgnCd1jUtK2R8syLTry398WI5gnAgVcAbgGdjlM5YOq5HJbLDgnAb1J3vlUWW8cdT094FWcMmgnCdl05as07LczoOlm2UZuikgCAUgSEwARsK+7UTQ0gABgAHWybuNDVpcGZzOi8vUW1jcGNEV3BZWXdrdXY5aTd5alJBdWtTUDlqa3VwVnQ2Y1FZeGNUS1ZtcWMyNYIAXWXHs='
  );
  let builder = beginCell();
  builder.storeRef(__system);
  builder.storeUint(0, 1);
  initStudentManagements_init_args({ $$type: 'StudentManagements_init_args' })(
    builder
  );
  const __data = builder.endCell();
  return { code: __code, data: __data };
}

const StudentManagements_errors: { [key: number]: { message: string } } = {
  2: { message: `Stack undeflow` },
  3: { message: `Stack overflow` },
  4: { message: `Integer overflow` },
  5: { message: `Integer out of expected range` },
  6: { message: `Invalid opcode` },
  7: { message: `Type check error` },
  8: { message: `Cell overflow` },
  9: { message: `Cell underflow` },
  10: { message: `Dictionary error` },
  13: { message: `Out of gas error` },
  32: { message: `Method ID not found` },
  34: { message: `Action is invalid or not supported` },
  37: { message: `Not enough TON` },
  38: { message: `Not enough extra-currencies` },
  128: { message: `Null reference exception` },
  129: { message: `Invalid serialization prefix` },
  130: { message: `Invalid incoming message` },
  131: { message: `Constraints error` },
  132: { message: `Access denied` },
  133: { message: `Contract stopped` },
  134: { message: `Invalid argument` },
  135: { message: `Code of a contract was not found` },
  136: { message: `Invalid address` },
  137: { message: `Masterchain support is not enabled for this contract` },
};

const StudentManagements_types: ABIType[] = [
  {
    name: 'StateInit',
    header: null,
    fields: [
      { name: 'code', type: { kind: 'simple', type: 'cell', optional: false } },
      { name: 'data', type: { kind: 'simple', type: 'cell', optional: false } },
    ],
  },
  {
    name: 'Context',
    header: null,
    fields: [
      {
        name: 'bounced',
        type: { kind: 'simple', type: 'bool', optional: false },
      },
      {
        name: 'sender',
        type: { kind: 'simple', type: 'address', optional: false },
      },
      {
        name: 'value',
        type: { kind: 'simple', type: 'int', optional: false, format: 257 },
      },
      { name: 'raw', type: { kind: 'simple', type: 'slice', optional: false } },
    ],
  },
  {
    name: 'SendParameters',
    header: null,
    fields: [
      {
        name: 'bounce',
        type: { kind: 'simple', type: 'bool', optional: false },
      },
      {
        name: 'to',
        type: { kind: 'simple', type: 'address', optional: false },
      },
      {
        name: 'value',
        type: { kind: 'simple', type: 'int', optional: false, format: 257 },
      },
      {
        name: 'mode',
        type: { kind: 'simple', type: 'int', optional: false, format: 257 },
      },
      { name: 'body', type: { kind: 'simple', type: 'cell', optional: true } },
      { name: 'code', type: { kind: 'simple', type: 'cell', optional: true } },
      { name: 'data', type: { kind: 'simple', type: 'cell', optional: true } },
    ],
  },
  {
    name: 'Deploy',
    header: 2490013878,
    fields: [
      {
        name: 'queryId',
        type: { kind: 'simple', type: 'uint', optional: false, format: 64 },
      },
    ],
  },
  {
    name: 'DeployOk',
    header: 2952335191,
    fields: [
      {
        name: 'queryId',
        type: { kind: 'simple', type: 'uint', optional: false, format: 64 },
      },
    ],
  },
  {
    name: 'FactoryDeploy',
    header: 1829761339,
    fields: [
      {
        name: 'queryId',
        type: { kind: 'simple', type: 'uint', optional: false, format: 64 },
      },
      {
        name: 'cashback',
        type: { kind: 'simple', type: 'address', optional: false },
      },
    ],
  },
  {
    name: 'Student',
    header: null,
    fields: [
      {
        name: 'name',
        type: { kind: 'simple', type: 'string', optional: false },
      },
      {
        name: 'rollNo',
        type: { kind: 'simple', type: 'uint', optional: false, format: 64 },
      },
      {
        name: 'class',
        type: { kind: 'simple', type: 'string', optional: false },
      },
    ],
  },
  {
    name: 'Add',
    header: 1769992108,
    fields: [
      {
        name: 'name',
        type: { kind: 'simple', type: 'string', optional: false },
      },
      {
        name: 'rollNo',
        type: { kind: 'simple', type: 'uint', optional: false, format: 64 },
      },
      {
        name: 'class',
        type: { kind: 'simple', type: 'string', optional: false },
      },
    ],
  },
];

const StudentManagements_getters: ABIGetter[] = [
  {
    name: 'list',
    arguments: [],
    returnType: {
      kind: 'dict',
      key: 'int',
      value: 'Student',
      valueFormat: 'ref',
    },
  },
];

const StudentManagements_receivers: ABIReceiver[] = [
  { receiver: 'internal', message: { kind: 'typed', type: 'Add' } },
  { receiver: 'internal', message: { kind: 'typed', type: 'Deploy' } },
];

export class StudentManagements implements Contract {
  static async init() {
    return await StudentManagements_init();
  }

  static async fromInit() {
    const init = await StudentManagements_init();
    const address = contractAddress(0, init);
    return new StudentManagements(address, init);
  }

  static fromAddress(address: Address) {
    return new StudentManagements(address);
  }

  readonly address: Address;
  readonly init?: { code: Cell; data: Cell };
  readonly abi: ContractABI = {
    types: StudentManagements_types,
    getters: StudentManagements_getters,
    receivers: StudentManagements_receivers,
    errors: StudentManagements_errors,
  };

  private constructor(address: Address, init?: { code: Cell; data: Cell }) {
    this.address = address;
    this.init = init;
  }

  async send(
    provider: ContractProvider,
    via: Sender,
    args: { value: bigint; bounce?: boolean | null | undefined },
    message: Add | Deploy
  ) {
    let body: Cell | null = null;
    if (
      message &&
      typeof message === 'object' &&
      !(message instanceof Slice) &&
      message.$$type === 'Add'
    ) {
      body = beginCell().store(storeAdd(message)).endCell();
    }
    if (
      message &&
      typeof message === 'object' &&
      !(message instanceof Slice) &&
      message.$$type === 'Deploy'
    ) {
      body = beginCell().store(storeDeploy(message)).endCell();
    }
    if (body === null) {
      throw new Error('Invalid message type');
    }

    await provider.internal(via, { ...args, body: body });
  }

  async getList(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get('list', builder.build())).stack;
    let result = Dictionary.loadDirect(
      Dictionary.Keys.BigInt(257),
      dictValueParserStudent(),
      source.readCellOpt()
    );
    return result;
  }
}
