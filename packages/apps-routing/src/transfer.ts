// Copyright 2017-2020 @polkadot/apps-routing authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Route } from './types';

import TransferModal from '@polkadot/app-accounts/Accounts/modals/Transfer';

export default function create (t: <T = string> (key: string, text: string, options: { ns: string }) => T): Route {
  return {
    Component: TransferModal,
    Modal: TransferModal,
    display: {
      isHidden: true,
      needsAccounts: true,
      needsApi: [
        'tx.balances.transfer'
      ]
    },
    icon: 'send',
    name: 'transfer',
    text: t<string>('nav.transfer', 'Transfer', { ns: 'apps-routing' })
  };
}
