# Installer

This class provides a structured way to handle the installation of assets from GitHub, promoting reusability and organization in the installation logic across various components of the KweenB application. By following the designed interface and extending it for specific implementations, developers can efficiently manage external dependencies as the application scales.

The `Installer` class is abstract and should be extended by another class that implements the `afterInstall` method. This allows specific installation logic to be defined based on the desired asset type or installation requirements.

## GitHubAsset Interface

```typescript
export interface GitHubAsset {
  name: string;
  browser_download_url: string;
}
```

- Represents a downloadable asset from a GitHub release, containing:
- `name`: The name of the asset file.
- `browser_download_url`: The URL to download the asset.

## Installer Class

```typescript
export abstract class Installer {
  private _version = "";
  private _owner = "";
  private _repo = "";
  private _fileNameRegEx: RegExp = /./;
  protected _targetPath = "";

```

### Methods

#### downloadRelease

```typescript
protected downloadRelease(
  url: any,
  wStream: any,
  progressCallback = (progress: Number) => {}
): Promise<void>;
```

Downloads a release from the specified URL.

**Parameters**:

- `url`: The URL to download from.
- `wStream`: The write stream to save the downloaded data.
- `progressCallback`: A callback function for reporting download progress (optional).

**Returns**: A promise that resolves upon successful download or rejects on error.

#### getAsset

```typescript
protected async getAsset(): Promise<GitHubAsset>;
```

- Retrieves the asset from the GitHub repository using the version specified.

**Returns**: A promise that resolves with the desired `GitHubAsset` or rejects on error.

#### install

```typescript
public async install(): Promise<void>;
```

Manages the installation process for the asset:

1.  Retrieves the asset.
2.  Checks if the target path already exists, removes it if needed.
3.  Creates a new directory in the target path.
4.  Downloads the asset.
5.  Unzips the downloaded file into the target path.
6.  Executes any post-installation steps defined in the subclass.
7.  Writes the version number to a file within the target path.

#### afterInstall

```typescript
abstract afterInstall(): Promise<void>;
```

An abstract method intended to be implemented by subclasses to define additional actions to perform after the installation of the asset.

## Example

Here is a simplified example of how you might extend the `Installer` class:

```typescript
class MyInstaller extends Installer {
  constructor(version: string) {
    super(
      version,
      "ownerName",
      "repoName",
      /myAssetName\.zip$/,
      "/target/path"
    );
  }

  async afterInstall(): Promise<void> {
    console.log("Asset installed successfully.");
  }
}

// Creating an instance and executing installation
const myInstaller = new MyInstaller("1.0.0");
myInstaller.install();
```

## JackInstaller and JacktripInstaller

The Jack and Jacktrip installers implement the abstract Installer class to download Jack and Jacktrip form their repositories.
