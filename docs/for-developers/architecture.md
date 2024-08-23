---
sidebar_position: 1
id: architecture
title: Architecture
sidebar_label: Architecture
description: The technical architecture of the whole zwerm3 project
---

## Overview

The architecture of Zwerm3 is evolving iteratively, blending practical insights with theoretical decisions.

## Core Components

![An image from the static](/img/for-developers/architecture/general-architecture.png)

The codebase is built on top of [Jack Audio Connection Kit](https://jackaudio.org/) and [Jacktrip](https://jacktrip.github.io/jacktrip/), which are essential for initiating and controlling audio streams. We've developed `zwerm3-jack`, a Node.js package that abstracts the complexity of Jack and Jacktrip, making it easy to integrate into any project.

On top of `zwerm3-jack`, we built two core packages:

- `zwerm3-api`: a daemon running on each speaker node (we also call the node a "bee") to handle local processes.
- `kweenb`: a centralized management system that orchestrates the swarm and manages data such as positioning.

Each bee runs a Pure Data patch, `pd-bee`, responsible for receiving audio streams over the network and acts as a file player for triggering. Parameters like volume and frequency are adjustable before the audio is sent to the DAC.

## Streaming Audio

![An image from the static](/img/for-developers/architecture/streaming-flow.png)

To start streaming, you need a sound interface—this can be either a virtual or physical device. Tested virtual devices include [Rogue Amoeba Loopback](https://rogueamoeba.com/loopback/) and the open source [Blackhole](https://existential.audio/blackhole/).

Once you have the desired number of audio channels available, the bee with ID 1 will be sent to channel 1, the bee with ID 2 to channel 2, and so on. You can configure the number of speakers in `kweenb` and send out an audio stream in peer-to-peer mode or hub mode (more details in the kweenb section).

In the background, `kweenb` initializes Jack and Jacktrip with your specified settings (through `zwerm3-jack`). Jack handles the connections from your audio device to Jacktrip. Jacktrip is responsible for transmitting the audio over the network using UDP. When a bee receives an audio signal, it is captured via Jacktrip, routed to Jack, then passed to Pure Data before being sent to the bee's DAC for audio signal conversion.

## Triggering Audio

![An image from the static](/img/for-developers/architecture/triggering-flow.png)

Triggering is straightforward: upload audio files to a bee using `kweenb`, then trigger them via OSC. The signal is received by `pd-bee` and can be controlled through `kweenb`.

## Technical stack

We use the following technical stack:

- [NodeJS](https://nodejs.org/en)
- [Typescript](https://www.typescriptlang.org/)
- [NestJS for zwerm3-api](https://nestjs.com/)
- [Electron](https://www.electronjs.org/)
- [React](https://react.dev/)
- [Pure Data](https://puredata.info/)
