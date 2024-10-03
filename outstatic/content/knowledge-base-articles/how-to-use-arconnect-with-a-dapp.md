---
author:
  name: 'Bithiah'
  picture: 'https://avatars.githubusercontent.com/u/63845509?v=4'
coverImage: ''
title: 'Browser Extension - How to use ArConnect with a dApp?'
status: 'published'
slug: 'how-to-use-arconnect-with-a-dapp'
description: ''
category: [{"label":"Browser Extension","value":"browser-extension"},{"value":"wallet-management","label":"Wallet management"}]
publishedAt: '2024-03-10T01:51:41.332Z'
---

## Connect an application

- For an application to interact with your wallet, it first needs to connect with ArConnect.

- However, not all apps are designed for this. Only apps designed for the Arweave and AO blockchain are able to use ArConnect. Apps on other networks like Ethereum cannot use ArConnect.

- In rare cases, some Arweave and AO apps also don’t support ArConnect, but 99% do.

- To interact with an app, you first need to set up ArConnect. Checkout this [guide](https://www.notion.so/How-to-install-and-setup-ArConnect-bd56c8cf4d3949c8b8343534a5636547?pvs=21) for help with setup.

- Follow these steps to connect with an application that supports ArConnect:

    1. Find the “Connect” button on the page and click it.

        - This is usually located in the right side of the navbar, at the top of the page, but not always.

        - The button can have a few different texts:

            - “Connect”

            - “ArConnect”

            - “Connect wallet”

            - “Connect ArConnect”

            - “Login” / “Sign In”

            - “Enter app”

            <!-- -->

        <!-- -->

    2. The ArConnect auth view will show up.

    3. Choose the wallet you wish to connect with from the dropdown provided on the Auth view.

        ![](/images/screen-shot-2024-03-28-at-12.14.11-am-MwMD.png)

    4. Enter your password for ArConnect in the provided input field.

        ![](/images/screen-shot-2024-03-28-at-12.17.58-am-ExMz.png)

    5. Click the “Sign in” button located at the bottom of the Auth view.

        ![](/images/screen-shot-2024-03-28-at-12.18.23-am-AwMz.png)

    6. Review the requested permissions.

        ![](/images/screen-shot-2024-03-28-at-12.18.49-am-cwMz.png)

        - While reviewing the requested permissions, consider the following:

            - These permissions can be dangerous, so consider what you grant for the application.

            - Uncheck the permissions you don’t want to allow the application to have.

            - However, an app might not work with insufficient permissions.

            - You can read more about permissions here in our guide on the [permission system in ArConnect](https://www.notion.so/Permission-system-in-ArConnect-2d8054800be943418526a1bb793b4e64?pvs=21).

            - When granting permissions, the extension automatically assigns an allowance limit to the app. This will prevent the app from draining your wallet while still allowing seamless interactions. Read more about allowances [here](https://www.notion.so/Protecting-your-funds-allowance-limits-and-how-they-work-6d093999fb1340668341aec14231c080?pvs=21).

            <!-- -->

        <!-- -->

    7. Approve the connection with the “Connect” button located at the bottom of the permissions screen.

    <!-- -->

    You can learn more about the Connect feature [here](https://docs.arconnect.io/api/connect?utm_source=ArConnect+Knowledgebase+Docs&utm_medium=Doc+Page&utm_campaign=ArConnect+Knowledge+Base&utm_id=ArConnect+Knowledgebase).

    Checkout our developer documentation if you’re looking to integrate ArConnect in an application ⇒ [docs.arconnect.io](https://docs.arconnect.io?utm_source=ArConnect+Knowledgebase+Docs&utm_medium=Doc+Page&utm_campaign=ArConnect+Knowledge+Base&utm_id=ArConnect+Knowledgebase).

## Disconnect an application

If you no longer wish to allow an app access to ArConnect, you can disconnect it as following ways:

- Usually apps provide an option for this (similar button to the “Connect” button).

    - Remember: Malicious apps might not actually disconnect from the extension. Make sure to double check in the main extension view, that the app has indeed been disconnected. You can do this by checking the app status in the top right corner of the main extension page. If there is a greed dot next to the app icon, the app did not disconnect.

        ![](/images/screen-shot-2024-03-28-at-12.19.22-am-kxOT.png)

    - When an app has not disconnected correctly, you should disconnect it manually.

    <!-- -->

- You can also manually disconnect from the app as follows:

    1. Right click on the webpage and click the “Disconnect” option.

        ![](/images/screen-shot-2024-03-28-at-12.19.44-am-k1Nj.png)

    2. Or open the extension and click the app status icon at the top right of the screen.

        ![](/images/screen-shot-2024-03-28-at-6.14.06-pm-MzNj.png)

        - Then click the “Disconnect” button.

            ![](/images/screen-shot-2024-03-28-at-12.20.51-am-gwND.png)

        <!-- -->

    <!-- -->

    Learn more about the Disconnect feature [here](https://docs.arconnect.io/api/disconnect?utm_source=ArConnect+Knowledgebase+Docs&utm_medium=Doc+Page&utm_campaign=ArConnect+Knowledge+Base&utm_id=ArConnect+Knowledgebase).

