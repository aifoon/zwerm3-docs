---
sidebar_position: 4
---

# Constants

This file defines constant variables used throughout the project.

## JACKTRIP_DEFAULT_CLIENT_NAME

The default name for a Jacktrip client.

```javascript
const JACKTRIP_DEFAULT_CLIENT_NAME = "client";
```

## JACK_DEFAULT_VERSION

The default version of Jack.

```javascript
const JACK_DEFAULT_VERSION = "1.9.19";
```

## JACKTRIP_BIN_PATH

The path to the Jacktrip binaries.

```javascript
const JACKTRIP_BIN_PATH = path.join(__dirname, "resources/jacktrip/");
```

## JACK_BASE_PATH_WIN

The default base path for Jack on Windows.

```javascript
const JACK_BASE_PATH_WIN = "C:\\\\Program Files (x86)\\\\Jack\\\\";
```

## JACK_BASE_PATH_DARWIN

The default base path for Jack on macOS.

```javascript
const JACK_BASE_PATH_DARWIN = "/usr/local/bin";
```

## JACK_BASE_PATH_LINUX

The default base path for Jack on Linux.

```javascript
const JACK_BASE_PATH_LINUX = "/usr/bin";
```

## TIMEOUT_AFTER_RUNNING_PROCESS

Because we need to be sure a Jackd and or Jacktrip process is started safely, this timeout in milliseconds is to wait for Jackd and Jacktrip to start after a process has been detected. So, Jackd waits X milliseconds before starting Jacktrip. This timeout is used to give Jackd and Jacktrip time to initialize properly.

```javascript
const TIMEOUT_AFTER_RUNNING_PROCESS = 2000;
```
