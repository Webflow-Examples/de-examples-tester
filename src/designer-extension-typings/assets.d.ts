interface Asset {
  readonly id: AssetId;

  /**
   * Get the cdn URL of the asset.
   * @example
   * ```ts
   * const asset = await webflow.getAssetById('123');
   * const url = await asset.getUrl();
   * ```
   */
  getUrl(): Promise<string>;
  /**
   * Get the alt text of the asset.
   * @example
   * ```ts
   * const asset = await webflow.getAssetById('123);
   * const altText = await asset.getAltText();
   * ```
   */
  getAltText(localeId?: string): Promise<string | null>;
  /**
   * Set the alt text of the asset.
   * @example
   * ```ts
   * const asset = await webflow.getAssetById('123');
   * await asset.setAltText('new alt text');
   * ```
   */
  setAltText(altText: string | null, localeId?: string): Promise<null>;

  /**
   * Get the name of the asset.
   * @example
   * ```ts
   * const asset = await webflow.getAssetById('123');
   * const name = await asset.getName();
   * ```
   */
  getName(): Promise<string>;

  /**
   * Set the name of the asset.
   * @example
   * ```ts
   * const asset = await webflow.getAssetById('123');
   * await asset.setName('new name');
   * ```
   */
  setName(name: string): Promise<null>;

  /**
   * Replace the current asset with a new file.
   * @example
   * ```ts
   * const asset = await webflow.getAssetById('123');
   * const newFile = new File([blob], 'cat.png', { type: 'image/png' });
   * await asset.setFile(newFile);
   * ```
   */
  setFile(fileBlob: File): Promise<null>;

  /**
   * Get the mime type of the asset.
   * @example
   * ```ts
   * const asset = await webflow.getAssetById('123');
   * const mimeType = await asset.getMimeType();
   * ```
   */
  getMimeType(): Promise<string>;

  /**
   * Set the parent folder of the asset.
   * @example
   * ```ts
   * const asset = await webflow.getAssetById('123');
   * const folder = await webflow.createAssetFolder('New Folder');
   * await asset.setParent(folder);
   * ```
   */
  setParent(assetFolder: AssetFolder): Promise<null>;

  /**
   * Get the parent folder of the asset.
   * @example
   * ```ts
   * const asset = await webflow.getAssetById('123');
   * const parentFolder = await asset.getParent();
   * ```
   */
  getParent(): Promise<AssetFolder | null>;
}

type AssetId = string;

type AssetFolder = {
  readonly id: AssetFolderId;

  getName(): Promise<string>;
};

type AssetFolderId = string;
