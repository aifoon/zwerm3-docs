---
sidebar_position: 1
id: introduction
title: Introduction
sidebar_label: Introduction
---

# Introduction

This module contains all the logic related to the Zwerm3 audio system, providing functions to manage Jack and Jacktrip processes, as well as related operations. Basically, we wrote a library around the CLI commands of both Jack and Jacktrip and automated the processes of the audio and streaming protocol. With `spawn`and `spawnSync` of the NodeJS library we start the commands and log out the output if necessary.

:::tip

If you want to manage the audio server and streaming, use these software tools:

- Use [QJackCtl](https://qjackctl.sourceforge.io/) for Jack
- Use [Jacktrip GUI](https://github.com/jacktrip/jacktrip/releases)

More information about both libraries can be found on:

- [Jack](https://jackaudio.org/)
- [Jacktrip](https://jacktrip.github.io/jacktrip/)
  :::

## Source

- You can find the GitHub repository of `zwerm3-jack` [here](https://github.com/aifoon/zwerm3-jack).
- You can find [the current published version on npm](https://www.npmjs.com/package/@zwerm3/jack)

## Installation

You can install this package in your node project using npm or yarn

```
npm install @zwerm3/jack
```

or

```
yarn add @zwerm3/jack
```

Import a function via the ES6 import syntax to use this in your project

```typescript
import { connectChannel } from "@zwerm3/jack";
```

## Binaries

By default, this library uses the Jack binaries installed on the local computer. Installation can be done [via HomeBrew on macOS](https://formulae.brew.sh/formula/jack#default) or [by following the jack docs for Windows](https://jackaudio.org/faq/jack_on_windows.html). Note that the Jacktrip binaries are by default sourced from the resources folder, and currently, only macOS and Linux (arm/x64) binaries are compiled. To make the package lighter we will delete the resources folder in the near future.

It is recommended to specify custom paths. You can configure this by overriding `jackFolderPath` and `jacktripBinPath` in the exported `Zwerm3Jack` object before invoking any functions.

```typescript
import { Zwerm3Jack } from "@zwerm3/jack";

Zwerm3Jack.default.jackFolderPath = "/usr/local/bin";
Zwerm3Jack.default.jacktripBinPath = "/home/user/dev/jacktrip";
```

## Functions

This node module exports a comprehensive set of functions and modules for managing Jack and Jacktrip functionalities. These exports cover various aspects including:

### Jack

- **[`connectChannel`](/docs/for-developers/zwerm3-jack/jackd#connectchannel):** Connects a channel within the Jack system.
- **[`disconnectChannel`](/docs/for-developers/zwerm3-jack/jackd#disconnectchannel):** Disconnects a channel within the Jack system.
- **[`getJackPaths`](/docs/for-developers/zwerm3-jack/jackd#getjackpaths):** Retrieves paths related to the local Jack binaries.
- **[`isJackDmpRunning`](/docs/for-developers/zwerm3-jack/jackd#isjackdmprunning):** Checks if the Jack daemon (`jackdmp`) is running.
- **[`startJackDmp`](/docs/for-developers/zwerm3-jack/jackd#startjackdmp):** Starts the Jack daemon (`jackdmp`).
- **[`startJackDmpAsync`](/docs/for-developers/zwerm3-jack/jackd#startjackdmpasync):** Asynchronously starts the Jack daemon (`jackdmp`).

### Jacktrip

- **[`getJacktripPaths`](/docs/for-developers/zwerm3-jack/jacktrip#getjacktrippaths):** Retrieves paths related to the local Jacktrip binaries.
- **[`isJacktripRunning`](/docs/for-developers/zwerm3-jack/jacktrip#isjacktriprunning):** Checks if Jacktrip is running.
- **[`getJackHubClients`](/docs/for-developers/zwerm3-jack/jackd#getjackhubclients):** Gets a list of Jack Hub clients.
- **[`getJackSystemClients`](/docs/for-developers/zwerm3-jack/jackd#getjacksystemclients):** Gets a list of Jack system clients.
- **[`startJacktripHubServer`](docs/for-developers/zwerm3-jack/jacktrip#startjacktriphubserver):** Starts a Jacktrip Hub server.
- **[`startJacktripHubServerAsync`](/docs/for-developers/zwerm3-jack/jacktrip#startjacktriphubserverasync):** Asynchronously starts a Jacktrip Hub server.
- **[`startJacktripHubClient`](/docs/for-developers/zwerm3-jack/jacktrip#startjacktriphubclient):** Starts a Jacktrip Hub client.
- **[`startJacktripHubClientAsync`](/docs/for-developers/zwerm3-jack/jacktrip#startjacktriphubclientasync):** Asynchronously starts a Jacktrip Hub client.
- **[`startJacktripP2PServer`](/docs/for-developers/zwerm3-jack/jacktrip#startjacktripp2pserver):** Starts a Jacktrip peer-to-peer (P2P) server.
- **[`startJacktripP2PServerAsync`](/docs/for-developers/zwerm3-jack/jacktrip#startjacktripp2pserverasync):** Asynchronously starts a Jacktrip peer-to-peer (P2P) server.
- **[`startJacktripP2PClient`](/docs/for-developers/zwerm3-jack/jacktrip#startjacktripp2pclient):** Starts a Jacktrip peer-to-peer (P2P) client.
- **[`startJacktripP2PClientAsync`](/docs/for-developers/zwerm3-jack/jacktrip#startjacktripp2pclientasync):** Asynchronously starts a Jacktrip peer-to-peer (P2P) client.
- **[`startJacktriptP2PMultipleClientsAsync`](/docs/for-developers/zwerm3-jack/jacktrip#startjacktriptp2pmultipleclientsasync):** Asynchronously starts multiple Jacktrip peer-to-peer (P2P) clients.

### Process Management

- **`getRunningProcesses`:** Retrieves information about running processes.
- **`killAllProcesses`:** Kills all running processes (Jack and Jacktrip).
- **`killJacktrip`:** Kills the Jacktrip process.
- **`killJack`:** Kills the Jack process.
- **`killProcessByPid`:** Kills a process based on its process ID (PID).
