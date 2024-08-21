# Process Management

- [Introduction](#introduction)
- [Functions](#functions)
  - [_public_ getRunningProcesses()](#getrunningprocesses)
  - [_public_ killProcessByPid()](#killprocessbypid)
  - [_private_ killProcess()](#killprocess)
  - [_public_ killJack()](#killjack)
  - [_public_ killJacktrip()](#killjacktrip)
  - [_public_ killAllProcesses()](#killallprocesses)

## Introduction

This module provides functionality for terminating Jack and Jacktrip processes that may be running on the client machine. It uses both native system commands and JavaScript promises to manage processes effectively.

## Functions

### `getRunningProcesses()`

Returns a list of currently running processes that match the provided command name.

#### Parameters

    - `command` (string): The name of the command to search for.

#### Returns

A Promise that resolves to an array of process details including properties such as `pid`, `ppid`, `uid`, `gid`, `name`, and `cmd`.

### `killProcessByPid()`

Kills a specified process based on its process ID (PID).

#### Parameters

- `pid` (number | undefined): The unique process ID of the process to be killed. If undefined, the function does nothing.

#### Returns

A Promise that resolves when the kill operation is completed.

### `killProcess()`

Kills all instances of a process running under the specified command name.

#### Parameters

- `command` (string): The command name of the process to kill.

#### Returns

A Promise that resolves when all processes matching the command are terminated.

#### Details

This function first retrieves all running processes using `getRunningProcesses`, then iterates through them and calls `killProcessByPid` to terminate each one.

### `killJack()`

Kills all instances of Jack audio server processes.

#### Returns

A Promise that resolves when all Jack-related processes have been terminated.

#### Platform-specific Behavior

On Windows, it uses `taskkill` to forcefully terminate `jack_connect.exe` and `jackd.exe` processes.

### `killJacktrip()`

Kills all instances of Jacktrip processes.

#### Returns

A Promise that resolves when all Jacktrip processes have been terminated.

#### Platform-specific Behavior

On Windows, it uses `taskkill` to forcefully terminate `jacktrip.exe`.

### `killAllProcesses()`

Kills all Jack and Jacktrip processes on the client machine.

#### Returns

A Promise that resolves when all processes have been terminated. This function calls `killJack` and `killJacktrip` in succession to ensure both sets of processes are handled.
