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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface MarketplaceStorageInterface extends ethers.utils.Interface {
  functions: {
    "acceptedToken()": FunctionFragment;
    "nfts(uint256)": FunctionFragment;
    "orders(uint256)": FunctionFragment;
    "ownerCutPerMillion()": FunctionFragment;
    "publicationFeeInWei()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "acceptedToken",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "nfts", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "orders",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "ownerCutPerMillion",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "publicationFeeInWei",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptedToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nfts", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "orders", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ownerCutPerMillion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "publicationFeeInWei",
    data: BytesLike
  ): Result;

  events: {
    "ChangedOwnerCutPerMillion(uint256)": EventFragment;
    "ChangedPublicationFee(uint256)": EventFragment;
    "OrderCancelled(uint256,uint256,address,uint256,address)": EventFragment;
    "OrderCreated(uint256,uint256,address,uint256,address,uint256,uint256)": EventFragment;
    "OrderExecuted(uint256,uint256,address,uint256,address,uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ChangedOwnerCutPerMillion"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ChangedPublicationFee"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrderCancelled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrderCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrderExecuted"): EventFragment;
}

export type ChangedOwnerCutPerMillionEvent = TypedEvent<
  [BigNumber] & { ownerCutPerMillion: BigNumber }
>;

export type ChangedPublicationFeeEvent = TypedEvent<
  [BigNumber] & { publicationFee: BigNumber }
>;

export type OrderCancelledEvent = TypedEvent<
  [BigNumber, BigNumber, string, BigNumber, string] & {
    id: BigNumber;
    assetId: BigNumber;
    seller: string;
    amount: BigNumber;
    nftAddress: string;
  }
>;

export type OrderCreatedEvent = TypedEvent<
  [BigNumber, BigNumber, string, BigNumber, string, BigNumber, BigNumber] & {
    id: BigNumber;
    assetId: BigNumber;
    seller: string;
    amount: BigNumber;
    nftAddress: string;
    priceInWei: BigNumber;
    expiresAt: BigNumber;
  }
>;

export type OrderExecutedEvent = TypedEvent<
  [BigNumber, BigNumber, string, BigNumber, string, BigNumber, string] & {
    id: BigNumber;
    assetId: BigNumber;
    seller: string;
    amount: BigNumber;
    nftAddress: string;
    totalPrice: BigNumber;
    buyer: string;
  }
>;

export class MarketplaceStorage extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: MarketplaceStorageInterface;

  functions: {
    acceptedToken(overrides?: CallOverrides): Promise<[string]>;

    nfts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, number] & { addr: string; tokenType: number }>;

    orders(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        string,
        string,
        number,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        id: BigNumber;
        seller: string;
        nftAddress: string;
        tokenType: number;
        assetId: BigNumber;
        amount: BigNumber;
        price: BigNumber;
        expiresAt: BigNumber;
      }
    >;

    ownerCutPerMillion(overrides?: CallOverrides): Promise<[BigNumber]>;

    publicationFeeInWei(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  acceptedToken(overrides?: CallOverrides): Promise<string>;

  nfts(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, number] & { addr: string; tokenType: number }>;

  orders(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      string,
      string,
      number,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      id: BigNumber;
      seller: string;
      nftAddress: string;
      tokenType: number;
      assetId: BigNumber;
      amount: BigNumber;
      price: BigNumber;
      expiresAt: BigNumber;
    }
  >;

  ownerCutPerMillion(overrides?: CallOverrides): Promise<BigNumber>;

  publicationFeeInWei(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    acceptedToken(overrides?: CallOverrides): Promise<string>;

    nfts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, number] & { addr: string; tokenType: number }>;

    orders(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        string,
        string,
        number,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        id: BigNumber;
        seller: string;
        nftAddress: string;
        tokenType: number;
        assetId: BigNumber;
        amount: BigNumber;
        price: BigNumber;
        expiresAt: BigNumber;
      }
    >;

    ownerCutPerMillion(overrides?: CallOverrides): Promise<BigNumber>;

    publicationFeeInWei(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "ChangedOwnerCutPerMillion(uint256)"(
      ownerCutPerMillion?: null
    ): TypedEventFilter<[BigNumber], { ownerCutPerMillion: BigNumber }>;

    ChangedOwnerCutPerMillion(
      ownerCutPerMillion?: null
    ): TypedEventFilter<[BigNumber], { ownerCutPerMillion: BigNumber }>;

    "ChangedPublicationFee(uint256)"(
      publicationFee?: null
    ): TypedEventFilter<[BigNumber], { publicationFee: BigNumber }>;

    ChangedPublicationFee(
      publicationFee?: null
    ): TypedEventFilter<[BigNumber], { publicationFee: BigNumber }>;

    "OrderCancelled(uint256,uint256,address,uint256,address)"(
      id?: null,
      assetId?: BigNumberish | null,
      seller?: string | null,
      amount?: null,
      nftAddress?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, string, BigNumber, string],
      {
        id: BigNumber;
        assetId: BigNumber;
        seller: string;
        amount: BigNumber;
        nftAddress: string;
      }
    >;

    OrderCancelled(
      id?: null,
      assetId?: BigNumberish | null,
      seller?: string | null,
      amount?: null,
      nftAddress?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, string, BigNumber, string],
      {
        id: BigNumber;
        assetId: BigNumber;
        seller: string;
        amount: BigNumber;
        nftAddress: string;
      }
    >;

    "OrderCreated(uint256,uint256,address,uint256,address,uint256,uint256)"(
      id?: null,
      assetId?: BigNumberish | null,
      seller?: string | null,
      amount?: null,
      nftAddress?: null,
      priceInWei?: null,
      expiresAt?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, string, BigNumber, string, BigNumber, BigNumber],
      {
        id: BigNumber;
        assetId: BigNumber;
        seller: string;
        amount: BigNumber;
        nftAddress: string;
        priceInWei: BigNumber;
        expiresAt: BigNumber;
      }
    >;

    OrderCreated(
      id?: null,
      assetId?: BigNumberish | null,
      seller?: string | null,
      amount?: null,
      nftAddress?: null,
      priceInWei?: null,
      expiresAt?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, string, BigNumber, string, BigNumber, BigNumber],
      {
        id: BigNumber;
        assetId: BigNumber;
        seller: string;
        amount: BigNumber;
        nftAddress: string;
        priceInWei: BigNumber;
        expiresAt: BigNumber;
      }
    >;

    "OrderExecuted(uint256,uint256,address,uint256,address,uint256,address)"(
      id?: null,
      assetId?: BigNumberish | null,
      seller?: string | null,
      amount?: null,
      nftAddress?: null,
      totalPrice?: null,
      buyer?: string | null
    ): TypedEventFilter<
      [BigNumber, BigNumber, string, BigNumber, string, BigNumber, string],
      {
        id: BigNumber;
        assetId: BigNumber;
        seller: string;
        amount: BigNumber;
        nftAddress: string;
        totalPrice: BigNumber;
        buyer: string;
      }
    >;

    OrderExecuted(
      id?: null,
      assetId?: BigNumberish | null,
      seller?: string | null,
      amount?: null,
      nftAddress?: null,
      totalPrice?: null,
      buyer?: string | null
    ): TypedEventFilter<
      [BigNumber, BigNumber, string, BigNumber, string, BigNumber, string],
      {
        id: BigNumber;
        assetId: BigNumber;
        seller: string;
        amount: BigNumber;
        nftAddress: string;
        totalPrice: BigNumber;
        buyer: string;
      }
    >;
  };

  estimateGas: {
    acceptedToken(overrides?: CallOverrides): Promise<BigNumber>;

    nfts(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    orders(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    ownerCutPerMillion(overrides?: CallOverrides): Promise<BigNumber>;

    publicationFeeInWei(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptedToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nfts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    orders(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ownerCutPerMillion(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    publicationFeeInWei(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
