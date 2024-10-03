---
title: 'What is a JSON keyfile?'
status: 'published'
author:
  name: 'Marton Lederer'
  picture: 'https://avatars.githubusercontent.com/u/30638105?v=4'
slug: 'what-is-a-json-keyfile'
description: 'Find out what a JSON keyfile is.'
coverImage: ''
category: [{"label":"Mobile app","value":"mobile-app"},{"label":"Browser Extension","value":"browser-extension"},{"value":"wallet-management","label":"Wallet management"}]
publishedAt: '2023-09-24T21:27:47.445Z'
---

- Arweave uses RSA private keys for wallet generation.

- This means, that private and public keys can generate RSA signatures, etc.

- The very basic way to store your wallet is using a keyfile:

    1. Keyfiles are RSA keys in JWK (Json Web Key) format.

    2. Keyfiles contain information that can be used to access your wallet and funds.

    3. It is important to keep your key files secure:

        - **DO NOT SHARE.**

        - The ArConnect team will never ask for this.

        <!-- -->

        <!-- -->

        <!-- -->

    4. These keyfiles make it easy for applications to work with your private keys.

    <!-- -->

    <!-- -->

    <!-- -->

