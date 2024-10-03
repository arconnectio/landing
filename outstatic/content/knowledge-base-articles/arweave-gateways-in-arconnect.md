---
title: 'Browser Extension - Arweave gateways in ArConnect'
status: 'published'
author:
  name: 'Bithiah'
  picture: 'https://avatars.githubusercontent.com/u/63845509?v=4'
slug: 'arweave-gateways-in-arconnect'
description: 'What are Arweave gateways and its integration with ArConnect?'
coverImage: ''
category: [{"label":"Browser Extension","value":"browser-extension"},{"value":"wallet-management","label":"Wallet management"}]
publishedAt: '2024-03-08T14:00:57.349Z'
---

## What is a gateway?

A gateway provides a platform for serving and processing data.

It serves as a bridge between the applications and users with the underlying Arweave network.

Primary functions of gateways:

- Caching network data for faster serving.

- Indexing transactions for easier querying.

- Serving data and allowing apps to query that data.

- Read more at [https://ar.io/what-is-a-gateway/](https://ar.io/what-is-a-gateway/)

## Customizing Gateways for Applications in ArConnect

Currently, ArConnect supports customizing the gateway for applications:

- Applications can request to use a custom gateway when connecting to ArConnect.

- The default gateway used is [arweave.net](http://arweave.net).

- Users can also configure gateways for applications in the settings as follows:

    1. Open ArConnect.

    2. Click the “Settings” icon on the extension’s main view of the ArConnect extension.

        ![](/images/screen-shot-2024-03-27-at-11.26.09-pm-AzNz.png)

    3. Select the “Applications” setting from the sidebar on the left hand side of the settings page.

        ![](/images/screen-shot-2024-03-27-at-11.28.52-pm-I0Nj.png)

    4. Select the application you change the gateway for from the list of applications located at the center of the Settings Page.

        ![](/images/screen-shot-2024-03-27-at-11.29.21-pm-c5OD.png)

    5. Scroll to the bottom of the application details section located on the right hand side of the Settings Page.

    6. Click on the dropdown to choose from the available list of gateways or provide a custom one.

        ![](/images/screen-shot-2024-03-27-at-11.29.50-pm-MxMT.png)

    <!-- -->

    <!-- -->

    <!-- -->

## ArConnect Wayfinder Integration

ArConnect also integrates Wayfinder, that decentralizes gateway access, reducing reliance on single entities.

- It implements a sorting algorithm that automatically chooses the optimal gateway for each user request and redirects users there.

- Some examples of how Wayfinder chooses the optimal gateway:

    - For users sending a transaction, Wayfinder might select a nearby gateway for quicker processing.

    - When fetching extensive datasets, it leans towards gateways known for high bandwidth.

    - For popular dApps, a less congested gateway might be chosen to ensure a smooth experience.

    <!-- -->

    <!-- -->

    <!-- -->

- The available gateways are sourced from [ar.io](http://ar.io/)'s decentralized gateway network.

- Users can enable the Wayfinder feature as follows:

    1. Click the “Settings” icon on the extension’s main view of the ArConnect extension.

        ![](/images/screen-shot-2024-05-31-at-11.13.00-pm-Y5NT.png)

    2. Select the “Wayfinder” setting from the sidebar on the left hand side of the settings page.

        ![](/images/screen-shot-2024-03-27-at-11.33.08-pm-QyOT.png)

    3. Click the checkbox provided in the center of the Settings page to enable this setting.

        ![](/images/screen-shot-2024-03-27-at-11.33.42-pm-YzND.png)

    <!-- -->

    <!-- -->

    <!-- -->

