import { Registry } from "@cosmjs/proto-signing";
import { AminoTypes } from "@cosmjs/stargate";
import * as auth from "./cosmos/cosmos-sdk/cosmos.auth.v1beta1";
import * as bank from "./cosmos/cosmos-sdk/cosmos.bank.v1beta1";
import * as distribution from "./cosmos/cosmos-sdk/cosmos.distribution.v1beta1";
import * as feegrant from "./cosmos/cosmos-sdk/cosmos.feegrant.v1beta1";
import * as gov from "./cosmos/cosmos-sdk/cosmos.gov.v1beta1";
import * as ibcTransfer from "./ibc-go/v3/ibc.applications.transfer.v1";
import * as slashing from "./cosmos/cosmos-sdk/cosmos.slashing.v1beta1";
import * as staking from "./cosmos/cosmos-sdk/cosmos.staking.v1beta1";
import * as tendermint from "./cosmos/cosmos-sdk/cosmos.base.tendermint.v1beta1";
import * as tx_ from "./cosmos/cosmos-sdk/cosmos.tx.v1beta1";
import * as vesting from "./cosmos/cosmos-sdk/cosmos.vesting.v1beta1";
import * as wasm from "./CosmWasm/wasmd/cosmwasm.wasm.v1";
import * as ethermintEvm from "./evmos/ethermint/ethermint.evm.v1";
import * as ethermintFeemarket from "./evmos/ethermint/ethermint.feemarket.v1";
export { ProtobufAny } from "./types";
export { BaseAccount, ModuleAccount, } from "./cosmos/cosmos-sdk/cosmos.auth.v1beta1/types/auth";
export { V1Beta1Coin, V1Beta1DenomUnit, V1Beta1Input, V1Beta1Output, V1Beta1Metadata, } from "./cosmos/cosmos-sdk/cosmos.bank.v1beta1/rest";
export { MsgSend } from "./cosmos/cosmos-sdk/cosmos.bank.v1beta1/types/tx";
export { V1Beta1ValidatorOutstandingRewards, V1Beta1ValidatorAccumulatedCommission, V1Beta1DelegationDelegatorReward, } from "./cosmos/cosmos-sdk/cosmos.distribution.v1beta1/rest";
export { voteOptionFromJSON } from "./cosmos/cosmos-sdk/cosmos.gov.v1beta1/types/gov";
export { ValidatorSigningInfo } from "./cosmos/cosmos-sdk/cosmos.slashing.v1beta1/types/slashing";
export { V1Beta1UnbondingDelegation, Stakingv1Beta1Validator, V1Beta1BondStatus, V1Beta1DelegationResponse, V1Beta1Params, V1Beta1Pool, V1Beta1RedelegationResponse, V1Beta1UnbondingDelegationEntry, } from "./cosmos/cosmos-sdk/cosmos.staking.v1beta1/rest";
export { TypesBlock, V1Beta1Tx, V1Beta1TxResponse, } from "./cosmos/cosmos-sdk/cosmos.tx.v1beta1/rest";
export { Tx } from "./cosmos/cosmos-sdk/cosmos.tx.v1beta1/types/tx";
export { ContinuousVestingAccount } from "./cosmos/cosmos-sdk/cosmos.vesting.v1beta1/types/vesting";
export { V1Beta1Proposal, V1Beta1ProposalStatus, V1Beta1TallyParams, V1Beta1TallyResult, V1Beta1Vote, V1Beta1VoteOption, V1Beta1VotingParams, } from "./cosmos/cosmos-sdk/cosmos.gov.v1beta1/rest";
export { V1ContractCodeHistoryEntry, V1ContractCodeHistoryOperationType, V1ContractInfo, } from "./CosmWasm/wasmd/cosmwasm.wasm.v1/rest";
export { MsgExecuteContract } from "./CosmWasm/wasmd/cosmwasm.wasm.v1/types/tx";
export { TxResult } from "./types/tendermint/abci/types";
export { Coin } from "./types/cosmos/base/coin";
export declare const registry: Registry;
export { FinClient, FinQueryClient } from "./fin";
export declare const aminoTypes: (prefix: string) => AminoTypes;
export declare type TxClient = {
    bank: typeof bank.txClient;
    distribution: typeof distribution.txClient;
    ethermintEvm: typeof ethermintEvm.txClient;
    ethermintFeemarket: typeof ethermintFeemarket.txClient;
    feegrant: typeof feegrant.txClient;
    gov: typeof gov.txClient;
    ibcTransfer: typeof ibcTransfer.txClient;
    slashing: typeof slashing.txClient;
    staking: typeof staking.txClient;
    vesting: typeof vesting.txClient;
    wasm: typeof wasm.txClient;
};
export declare const tx: TxClient;
export declare type QueryClient = {
    auth: auth.Api<unknown>;
    bank: bank.Api<unknown>;
    distribution: distribution.Api<unknown>;
    ethermintEvm: ethermintEvm.Api<unknown>;
    ethermintFeemarket: ethermintFeemarket.Api<unknown>;
    gov: gov.Api<unknown>;
    ibcTransfer: ibcTransfer.Api<unknown>;
    slashing: slashing.Api<unknown>;
    staking: staking.Api<unknown>;
    tendermint: tendermint.Api<unknown>;
    tx: tx_.Api<unknown>;
    wasm: wasm.Api<unknown>;
};
export declare const query: ({ rest }: {
    rest: string;
}) => {
    auth: auth.Api<unknown>;
    bank: bank.Api<unknown>;
    distribution: distribution.Api<unknown>;
    ethermintEvm: ethermintEvm.Api<unknown>;
    ethermintFeemarket: ethermintFeemarket.Api<unknown>;
    gov: gov.Api<unknown>;
    ibcTransfer: ibcTransfer.Api<unknown>;
    slashing: slashing.Api<unknown>;
    staking: staking.Api<unknown>;
    tx: tx_.Api<unknown>;
    tendermint: tendermint.Api<unknown>;
    wasm: wasm.Api<unknown>;
};
