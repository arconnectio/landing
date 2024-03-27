---
title: 'Protecting your funds: allowance limits and how they work'
status: 'published'
author:
  name: 'Bithiah'
  picture: 'https://avatars.githubusercontent.com/u/63845509?v=4'
slug: 'protecting-your-funds-allowance-limits-and-how-they-work'
description: ''
coverImage: ''
category: [{"value":"wallet-management","label":"Wallet management"}]
publishedAt: '2024-03-08T04:37:23.280Z'
---

To allow seamless communication between ArConnect and the apps, we do not require users by default to manually review each signed transaction. Instead we set an allowance limit by default.

Allowance limits are enabled by default so that the extension provides the best Web3 experience possible, without all the blockers and annoying popups.

## How to disable allowances in ArConnect?

Allowance limits can be disabled in settings for each individual app with the following steps:

1. Open ArConnect.

2. Click the “Settings” icon on the extension’s main view of the ArConnect extension.

    ![](/images/screen-shot-2024-03-28-at-12.33.13-am-AxNT.png)

3. Select the “Applications” setting from the sidebar on the left hand side of the settings page.

    ![](/images/screen-shot-2024-03-28-at-12.33.45-am-c0Mz.png)

4. Select the application you want to disable allowances for from the list of applications located at the center of the Settings Page.

    ![](/images/screen-shot-2024-03-28-at-12.34.11-am-c1Nz.png)

5. Uncheck the “Allowance” checkbox located at the bottom right of the Settings page to disable allowance for the chosen application.

    ![](/images/screen-shot-2024-03-28-at-12.34.35-am-U3OD.png)

## How is setting allowance limits safe?

- Allowance limits allow the user to define a threshold.

- Each signed transaction’s and interaction’s cost gets added to the spent quantity, till the allowance is reached.

- After this limit is reached the user has to manually reset the spent value for the application.

- The user can choose to disable the allowance limits for an app if they find that it is spending too much AR.

- Allowance limits can be changed and configured.

- By default an app is assigned an allowance limit of 1 AR.

- Larger uploads might need more than the allowance configured, this might be the case with storage provider apps, like ArDrive.

- Disabling allowances can be a good way to handle unknown apps that you don’t trust.

