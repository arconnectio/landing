---
title: 'Arweave bundles in ArConnect'
status: 'published'
author:
  name: 'Bithiah'
  picture: 'https://avatars.githubusercontent.com/u/63845509?v=4'
slug: 'arweave-bundles-in-arconnect'
description: ''
coverImage: ''
category: [{"label":"Browser Extension","value":"browser-extension"},{"value":"wallet-management","label":"Wallet management"}]
publishedAt: '2024-03-09T05:26:34.560Z'
---

## What are Arweave bundles?

Arweave bundles or ANS-104 (link to ANS-104) bundles are basically multiple transactions packaged into one.

- Each bundle holds several data items or layer 2 transactions.

- These transactions are pieces of data with tags.

- Bundle items cannot transfer AR tokens.

- They’re free (subsidized) for sizes under 100 Kbs, so these interactions or any other data smaller than 100 Kbs don’t need any AR tokens to be held.

- Multiple files/data items bundled together save cost ⇒ you only need to pay the base transaction fee once, plus the storage fee, instead of paying the transaction fee every time for each file, as well as the storage fee.

## Customizing bundlers in ArConnect

ArConnect’s `dispatch()`[API](https://docs.arconnect.io/api/dispatch?utm_source=ArConnect+Knowledgebase+Docs&utm_medium=Doc+Page&utm_campaign=ArConnect+Knowledge+Base&utm_id=ArConnect+Knowledgebase) allows applications to quickly submit transactions to the network.

- These transactions are bundled by default.

- Applications utilize this function for quick interactions with contracts, etc.

- The dispatch API uses the default bundler set by the user or the extension.

    - As an application you can customize the bundler node with the help of the `signDataItem()` [API](https://docs.arconnect.io/api/sign-dataitem?utm_source=ArConnect+Knowledgebase+Docs&utm_medium=Doc+Page&utm_campaign=ArConnect+Knowledge+Base&utm_id=ArConnect+Knowledgebas).

    - As a user you can head over to the settings to customize the bundler node that an application uses for your interactions as follows:

        1. Open ArConnect.

        2. Click the “Settings” icon on the extension’s main view of the ArConnect extension.

            ![](/images/screen-shot-2024-03-27-at-11.56.49-pm-g4MT.png)

        3. Select the “Applications” setting from the sidebar on the left hand side of the settings page.

            ![](/images/screen-shot-2024-03-27-at-11.57.34-pm-g0Mj.png)

        4. Select the application you change the bundler node for from the list of applications located at the center of the Settings Page.

            ![](/images/screen-shot-2024-03-27-at-11.57.52-pm-IwNj.png)

        5. Scroll to the bottom of the application details section located on the right hand side of the Settings Page.

        6. Paste the URL for the custom bundler node in the provided input field.

            ![](/images/screen-shot-2024-03-27-at-11.58.16-pm-A5MT.png)

        <!-- -->

        <!-- -->

    <!-- -->

    <!-- -->

- The dispatched transaction will go through the selected bundler node, which will also earn any additional transaction fees.

