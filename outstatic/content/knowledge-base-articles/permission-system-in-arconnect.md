---
title: 'Permission system in ArConnect'
status: 'published'
author:
  name: 'Bithiah'
  picture: 'https://avatars.githubusercontent.com/u/63845509?v=4'
slug: 'permission-system-in-arconnect'
description: ''
coverImage: ''
category: [{"value":"wallet-management","label":"Wallet management"}]
publishedAt: '2024-03-08T12:06:47.988Z'
---

## Why do we need permissions

ArConnect needs constant communication with connected dApps in the background.

- This has to be a seamless process that is not necessary visible to the user.

- Because it is seamless and happens in the background, it needs a firm and secure control.

- But users still need to be aware what apps can do with their wallets.

## What are permissions?

- Permissions allows users to grant certain privileges to applications, while denying any that they deem unsecure or dangerous.

- Every time an application wants to connect to the user’s wallet, it first needs to request permissions for all the API functions the application plans to use.

- Applications can request permissions dynamically: this means that they can ask for more permissions when necessary, even after requesting initial permissions at the time of connection to the app.

- We advise applications to ask for the minimal amount of necessary permissions.

- Various applications require various permissions to work based on the functionality they provide (like having access to the users wallet address).

- Learn more about permissions [here](https://docs.arconnect.io/api/connect?utm_source=ArConnect+Knowledgebase+Docs&utm_medium=Doc+Page&utm_campaign=ArConnect+Knowledge+Base&utm_id=ArConnect+Knowledgebase#permissions).

## Using the permission system safely

- Always read from alternative sources on how the application works and what is its purpose.

- Compare the permissions to what you think the app needs.

- If you have developer experience, verify the app if its source code is open.

- Apps cannot access your wallet when they’re not open.

- You can always remove permissions from an app in settings or disconnect to remove all permission completely (see our guide on [how to use ArConnect with a dApp](https://www.notion.so/bac62293e3e94b80a3067280e5d458fb?pvs=21) for more details).



