import { wasmTypes } from "@cosmjs/cosmwasm-stargate/build/modules";
import { Registry } from "@cosmjs/proto-signing";
import * as s from "@cosmjs/stargate";
import { ibcTypes } from "@cosmjs/stargate/build/modules";
import { assert } from "@cosmjs/utils";
import { InjectiveTypesV1Beta1Account } from "@injectivelabs/core-proto-ts";
import { BaseAccount } from "cosmjs-types/cosmos/auth/v1beta1/auth";
import { CommunityPoolSpendProposal } from "cosmjs-types/cosmos/distribution/v1beta1/distribution";
import { TextProposal } from "cosmjs-types/cosmos/gov/v1beta1/gov";
import { ParameterChangeProposal } from "cosmjs-types/cosmos/params/v1beta1/params";
import { MsgSoftwareUpgrade } from "cosmjs-types/cosmos/upgrade/v1beta1/tx";
import { SoftwareUpgradeProposal } from "cosmjs-types/cosmos/upgrade/v1beta1/upgrade";
import { MsgExecLegacyContent } from "@injectivelabs/core-proto-ts/cjs/cosmos/gov/v1/tx";
import { MsgPinCodes, MsgUnpinCodes, } from "@injectivelabs/core-proto-ts/cjs/cosmwasm/wasm/v1/tx";
import { MsgUpdateParams } from "cosmjs-types/cosmos/bank/v1beta1/tx";
import { MsgCommunityPoolSpend } from "cosmjs-types/cosmos/distribution/v1beta1/tx";
import { ClearAdminProposal, ExecuteContractProposal, InstantiateContractProposal, MigrateContractProposal, PinCodesProposal, StoreCodeProposal, UnpinCodesProposal, UpdateAdminProposal, UpdateInstantiateConfigProposal, } from "cosmjs-types/cosmwasm/wasm/v1/proposal";
import { MsgClearAdmin, MsgExecuteContract, MsgInstantiateContract, MsgMigrateContract, MsgStoreCode, MsgUpdateAdmin, MsgUpdateInstantiateConfig, } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { ClientUpdateProposal } from "cosmjs-types/ibc/core/client/v1/client";
import { ClientState, ConsensusState, Header, Misbehaviour, } from "cosmjs-types/ibc/lightclients/tendermint/v1/tendermint";
import * as alliance from "./alliance";
import * as gravity from "./gravity/v1";
import * as denom from "./kujira/kujira.denom";
import * as oracle from "./kujira/kujira.oracle";
import { CreateHookProposal, DeleteHookProposal, UpdateHookProposal, } from "./kujira/kujira.scheduler/types/proposal";
import { StridePeriodicVestingAccount } from "./stride/vesting";
const proposalTypes = [
    [
        "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
        CommunityPoolSpendProposal,
    ],
    ["/cosmos.distribution.v1beta1.MsgCommunityPoolSpend", MsgCommunityPoolSpend],
    ["/cosmos.params.v1beta1.ParameterChangeProposal", ParameterChangeProposal],
    ["/cosmos.params.v1beta1.MsgUpdateParams", MsgUpdateParams],
    ["/cosmwasm.wasm.v1.StoreCodeProposal", StoreCodeProposal],
    [
        "/cosmwasm.wasm.v1.InstantiateContractProposal",
        InstantiateContractProposal,
    ],
    ["/cosmwasm.wasm.v1.MigrateContractProposal", MigrateContractProposal],
    ["/cosmwasm.wasm.v1.UpdateAdminProposal", UpdateAdminProposal],
    ["/cosmwasm.wasm.v1.ClearAdminProposal", ClearAdminProposal],
    ["/cosmwasm.wasm.v1.PinCodesProposal", PinCodesProposal],
    ["/cosmwasm.wasm.v1.UnpinCodesProposal", UnpinCodesProposal],
    ["/cosmwasm.wasm.v1.ExecuteContractProposal", ExecuteContractProposal],
    [
        "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal",
        UpdateInstantiateConfigProposal,
    ],
    ["/cosmwasm.wasm.v1.MsgStoreCode", MsgStoreCode],
    ["/cosmwasm.wasm.v1.MsgInstantiateContract", MsgInstantiateContract],
    ["/cosmwasm.wasm.v1.MsgMigrateContract", MsgMigrateContract],
    ["/cosmwasm.wasm.v1.MsgUpdateAdmin", MsgUpdateAdmin],
    ["/cosmwasm.wasm.v1.MsgClearAdmin", MsgClearAdmin],
    ["/cosmwasm.wasm.v1.MsgPinCodes", MsgPinCodes],
    ["/cosmwasm.wasm.v1.MsgUnpinCodes", MsgUnpinCodes],
    ["/cosmwasm.wasm.v1.MsgExecuteContract", MsgExecuteContract],
    ["/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig", MsgUpdateInstantiateConfig],
    ["/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal", SoftwareUpgradeProposal],
    ["/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade", MsgSoftwareUpgrade],
    ["/kujira.scheduler.CreateHookProposal", CreateHookProposal],
    ["/kujira.scheduler.UpdateHookProposal", UpdateHookProposal],
    ["/kujira.scheduler.DeleteHookProposal", DeleteHookProposal],
    ["/cosmos.gov.v1beta1.TextProposal", TextProposal],
    ["/cosmos.gov.v1.MsgExecLegacyContent", MsgExecLegacyContent],
    ["/ibc.core.client.v1.ClientUpdateProposal", ClientUpdateProposal],
];
const extraIbc = [
    ["/ibc.lightclients.tendermint.v1.Header", Header],
    ["/ibc.lightclients.tendermint.v1.ClientState", ClientState],
    ["/ibc.lightclients.tendermint.v1.ConsensusState", ConsensusState],
    ["/ibc.lightclients.tendermint.v1.Misbehaviour", Misbehaviour],
];
const types = [
    ...s.defaultRegistryTypes,
    ...denom.types,
    // ...ethermintEvm.types,
    // ...ethermintFeemarket.types,
    ...oracle.types,
    ...wasmTypes,
    ...ibcTypes,
    ...proposalTypes,
    ...extraIbc,
    ...gravity.types,
    ...alliance.types,
];
export const registry = new Registry(types);
export const accountParser = (acc) => {
    var _a;
    switch (acc.typeUrl) {
        case "/stride.vesting.StridePeriodicVestingAccount":
            const baseAccount = (_a = StridePeriodicVestingAccount.decode(acc.value)
                .baseVestingAccount) === null || _a === void 0 ? void 0 : _a.baseAccount;
            assert(baseAccount);
            return s.accountFromAny({
                typeUrl: "/cosmos.auth.v1beta1.BaseAccount",
                value: BaseAccount.encode(baseAccount).finish(),
            });
        case "/injective.types.v1beta1.EthAccount":
            const account = InjectiveTypesV1Beta1Account.EthAccount.decode(acc.value);
            const ethBaseAccount = account.baseAccount;
            const pubKey = ethBaseAccount.pubKey;
            console.log(`/injective.types.v1beta1.EthAccount`, JSON.stringify(account, null, 2));
            return {
                address: ethBaseAccount.address,
                pubkey: pubKey
                    ? {
                        type: "/injective.crypto.v1beta1.ethsecp256k1.PubKey",
                        value: Buffer.from(pubKey.value).toString("base64"),
                    }
                    : null,
                accountNumber: parseInt(ethBaseAccount.accountNumber, 10),
                sequence: parseInt(ethBaseAccount.sequence, 10),
            };
        default:
            return s.accountFromAny(acc);
    }
};
