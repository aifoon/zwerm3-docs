# Main process

## Startup

During startup we initialize parts of the application:

1. If this is the first time, we install the default settings via a `firstboot`script.
2. We make a new instance of [the KweenB object](kweenb) and make it global
3. We [initialize everything before](kweenb#async-initbeforewindow) the Electron Window is build
4. We create an Electron Browserwindow instance
5. Once the window is ready we register [the actions and methods](actions-methods) that will interact with the renderer
6. We [initialize everything after](kweenb#async-initafterwindowcallback-message-string--void) the Electron Window is shown

## Bee States

When the **main process** starts, we build an internal table that pings every bee at regular intervals of `X` seconds. The states of the bees are cached between intervals, and only updated when the next ping occurs. By handling these pings in the background, we offload the process from the frontend, which improves the overall performance of the application.

:::info
In the library you'll find a BeeStatesWorker class that is responsible for caching and calculating the online state together with his latency on the network
:::

## Jack and Jacktrip binaries

[When the application starts and the window is displayed](kweenb#async-initafterwindowcallback-message-string--void), the software verifies whether Jack and Jacktrip are installed and match the versions specified in the release version of **kweenb** (this can be found in the `consts` file in the source code). If the versions do not match, **kweenb** will automatically download the correct versions from GitHub and install them locally. For Jacktrip, it pulls the release from [the official Jacktrip repository](https://github.com/jacktrip/jacktrip/releases). For Jack, it uses the release from the [`aifoon/jack2-binaries`](https://github.com/aifoon/jack2-binaries) repository.

:::info
This feature was implemented so kweenb can operate without installing Jack and Jacktrip binaries.
:::

## Communication over SSH

In addition to communicating via the **zwerm3-api**, we also communicate with the bees over SSH. Once an SSH client is initiated, the connection is cached in a dictionary. This allows us to reuse the connection whenever needed, improving efficiency by avoiding the overhead of re-establishing the SSH connection each time.
