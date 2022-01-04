/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  CallOverrides
} from 'ethers'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'
import type { TypedEventFilter, TypedEvent, TypedListener } from './common'

interface PausableInterface extends ethers.utils.Interface {
  functions: {
    'paused()': FunctionFragment
  }

  encodeFunctionData(functionFragment: 'paused', values?: undefined): string

  decodeFunctionResult(functionFragment: 'paused', data: BytesLike): Result

  events: {
    'Paused(address)': EventFragment
    'Unpaused(address)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'Paused'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Unpaused'): EventFragment
}

export type PausedEvent = TypedEvent<[string] & { account: string }>

export type UnpausedEvent = TypedEvent<[string] & { account: string }>

export class Pausable extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this

  listeners(eventName?: string): Array<Listener>
  off(eventName: string, listener: Listener): this
  on(eventName: string, listener: Listener): this
  once(eventName: string, listener: Listener): this
  removeListener(eventName: string, listener: Listener): this
  removeAllListeners(eventName?: string): this

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>

  interface: PausableInterface

  functions: {
    paused(overrides?: CallOverrides): Promise<[boolean]>
  }

  paused(overrides?: CallOverrides): Promise<boolean>

  callStatic: {
    paused(overrides?: CallOverrides): Promise<boolean>
  }

  filters: {
    'Paused(address)'(account?: null): TypedEventFilter<[string], { account: string }>

    Paused(account?: null): TypedEventFilter<[string], { account: string }>

    'Unpaused(address)'(account?: null): TypedEventFilter<[string], { account: string }>

    Unpaused(account?: null): TypedEventFilter<[string], { account: string }>
  }

  estimateGas: {
    paused(overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}
