---
title: 'Fees in ArConnect'
status: 'draft'
author:
  name: 'Marton Lederer'
  picture: 'https://avatars.githubusercontent.com/u/30638105?v=4'
slug: 'fees-in-arconnect'
description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam a ut aliquam maxime assumenda dolor veritatis non blanditiis eos, quisquam facere rem accusantium, error praesentium suscipit eligendi unde ducimus deserunt.'
coverImage: ''
category: [{"label":"Wallet management","value":"wallet-management"}]
publishedAt: '2023-09-24T21:25:52.814Z'
---

## Network fees

All transactions going through ArConnect are subject to network fees. Here’s some details about network fees:

- These fees go to the miners.

- It is something the network charges the user, not ArConnect.

- This fee is usually low for simple interactions.

- Prices can be calculated at [https://ar-fees.arweave.dev/](https://ar-fees.arweave.dev/).

    **Network Fee Multiplication**

    1. ArConnect allows the user to set a fee multiplier.

    2. This multiplier works for base layer transactions.

    3. It is useful when the network is busy ⇒ higher multiplier ⇒ higher chance for the transaction to get mined.

    4. This is an advanced feature, most of the time it is not necessary to use the multiplier.

    <!-- -->

    <!-- -->

## ArConnect fees

Here are details regarding how ArConnect works with fees.

What ArConnect **do charge a fee for**:

- ArConnect charges a small fee after each transaction signed with the `arweaveWallet.sign()` [API](https://docs.arconnect.io/api/sign?utm_source=ArConnect+Knowledgebase+Docs&utm_medium=Doc+Page&utm_campaign=ArConnect+Knowledge+Base&utm_id=ArConnect+Knowledgebase).

- This fee is the equivalent of $0.03 USD in AR tokens for the *first 10 **mined*** transactions signed with ArConnect.

    - The extension cannot differentiate between signing a transaction that gets mined and one that does not. Because of this, ArConnect will charge the same fee for unmined transactions as well, but can only validate mined transactions.

    - Because of this it is possible that the user already signed 10 txs, but still get charged the initial $0.03 USD fee, simply because one or more of the txs has not been mined.

    <!-- -->

    <!-- -->

- After the first 10 mined transactions, the fee the equivalent of $0.01 USD in AR tokens

- The AR tokens charged can differ from time to time, due to fluctuations in the AR to USD exchange rate.

What ArConnect **does not charge a fee for**:

- AR or other token transfers within the extension.

- Signed ANS-104 bundle data items (Layer 2 transactions).

- Dispatched transactions (interactions, etc.).

- Other interactions with the user’s wallet, such as: data encryption and decryption, message signing, hash generation.

- The network and protocol fees still apply such as:

    1. Fees for mining rewards.

    2. Fees that go to the endowment pool (CC @Tate Berenbaum verify this please)

    3. Fees charged by protocols that bundle L2 transactions/data items (such as Bundlr, arseeding, ArDrive bundler, etc.)

    4. Fees charged by the applications and sites the user interacts with.

    <!-- -->

    <!-- -->

