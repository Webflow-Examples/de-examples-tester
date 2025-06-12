interface Folder {
  readonly id: FolderId;
  readonly type: 'PageFolder';

  /**
   * Retrieve the name of the folder.
   * @example
   * ```ts
   * let folderName = await myFolder.getName();
   * console.log("Folder Name:", folderName);
   * ```
   */
  getName(): Promise<string>;
  /**
   * The new name to set for the folder.
   * @param name - The new name to set for the folder.
   * @example
   * ```ts
   * await myFolder.setName("New Folder Name");
   * ```
   */
  setName(name: string): Promise<null>;
  /**
   * Find out the slug of the folder.
   * @example
   * ```ts
   * await myFolder.getSlug();
   * ```
   */
  getSlug(): Promise<string>;
  /**
   * Choose a cool new slug for your folder.
   * @param slug - The new slug to set for the folder.
   * @example
   * ```ts
   * await myFolder.setSlug("new-folder-slug");
   * ```
   */
  setSlug(slug: string): Promise<null>;
  /**
   * Check if your folder has a parent folder, and if yes, get its details.
   * @example
   * ```ts
   *  myFolder.getParent().then((parentFolder) => {
   *   if (parentFolder) {
   *     console.log("Parent Folder Name:", parentFolder.getName());
   *   } else {
   *     console.log("No parent folder.");
   *   }
   * }).catch((error) => {
   *   console.error("Error while getting parent folder:", error);
   * });
   * ```
   */
  getParent(): Promise<null | Folder>;
  /**
   * Assign a new parent folder to your folder.
   * @param parent - The parent folder to set for the current folder.
   * @example
   * ```ts
   * await myFolder.setParent(parentFolder);
   * ```
   */
  setParent(parent: Folder): Promise<null>;
}

type PageMetadata = {
  name: string;
  slug: string;
  title: string;
  description: string;
  isDraft: boolean;
  usesTitleAsOpenGraphTitle: boolean;
  openGraphTitle: string;
  usesDescriptionAsOpenGraphDescription: boolean;
  openGraphDescription: string;
  openGraphImage: string;
  isExcludedFromSearch: boolean;
  usesTitleAsSearchTitle: boolean;
  searchTitle: string;
  usesDescriptionAsSearchDescription: boolean;
  searchDescription: string;
  usesOpenGraphImageAsSearchImage: boolean;
  searchImage: string;
};

interface Page {
  readonly id: PageId;
  readonly type: 'Page';

  /**
   * Retrieves the name of the page.
   * @example
   * ```ts
   * let pageName = await myPage.getName();
   * console.log("Page Name:", pageName);
   * ```
   */
  getName(): Promise<string>;
  /**
   * Sets the name of the page to the provided value.
   * @param name - The new name to set for the page.
   * @example
   * ```ts
   * await myPage.setName("New Page Name");
   * ```
   */
  setName(name: string): Promise<null>;
  getSlug(): Promise<string>;
  setSlug(slug: string): Promise<null>;
  getParent(): Promise<null | Folder>;
  setParent(parent: Folder): Promise<null>;
  /**
   * Sets the metadata of the page to the provided value;
   * @param metadata - object containing one or more metadata properties to update
   * @example
   * ```
   *  const updatedMetadata = await page.setMetadata({title: "New Page Title", isDraft: true, description: "New Page Description"});
   * ```
   */
  setMetadata(metadata: Partial<PageMetadata>): Promise<null>;
  /**
   * Retrieves the title of the page.
   * @example
   * ```ts
   * let pageTitle = await myPage.getTitle();
   * console.log("Page Title:", pageTitle);
   * ```
   */
  getTitle(): Promise<string>;
  /**
   * Sets the title of the page to the provided value.
   * @param title - The new title to set for the page. Passing null will unset the current value.
   * @example
   * ```ts
   * await myPage.setTitle("New Page Title");
   * ```
   */
  setTitle(title: string | null): Promise<null>;
  /**
   * Retrieves the description of the page.
   * @example
   * ```ts
   * let pageDescription = await myPage.getDescription();
   * console.log("Page Description:", pageDescription);
   * ```
   */
  getDescription(): Promise<string>;
  /**
   * Sets the description of the page to the provided value.
   * @param description - The new description to set for the page. Passing null will unset the current value.
   * @example
   * ```ts
   * await myPage.setDescription("New Page Description");
   * ```
   */
  setDescription(description: string | null): Promise<null>;
  /**
   * Checks if the page is in draft mode or not.
   * @example
   * ```ts
   * myPage.setDescription("New Page Description");
   * let isDraft = await myPage.isDraft();
   * console.log("Is Draft:", isDraft);
   * ```
   */
  isDraft(): Promise<boolean>;
  /**
   * Sets the draft mode of the page.
   * @param isDraft - Set to true to mark the page as a draft, false otherwise.
   * @example
   * ```ts
   * await myPage.setDraft(true);
   * ```
   */
  setDraft(isDraft: boolean): Promise<null>;
  /**
   * Checks if the page uses its title as the Open Graph title.
   * @example
   * ```ts
   * let usesTitleAsOpenGraphTitlegTitle = await myPage.usesTitleAsOpenGraphTitle();
   * console.log("Use Title as OG Title:", useTitleAsOpenGraphTitle);
   * ```
   */
  usesTitleAsOpenGraphTitle(): Promise<boolean>;
  /**
   * Sets whether the page should use its title as the Open Graph (OG) title.
   * @param use - Set to true to use the page title as the OG title, false otherwise.
   * @example
   * ```ts
   * await myPage.useTitleAsOpenGraphTitle(true);
   * ```
   */
  useTitleAsOpenGraphTitle(use: boolean): Promise<null>;
  /**
   * Retrieves the Open Graph title of the page.
   * @example
   * ```ts
   * let ogTitle = await myPage.getOpenGraphTitle();
   * console.log("OpenGraph Title:", ogTitle);
   * ```
   */
  getOpenGraphTitle(): Promise<string>;
  /**
   * Sets the Open Graph (OG) title of the page to the provided value.
   * @param title - The new OG title to set for the page. Passing null will unset the current value.
   * @example
   * ```ts
   * await myPage.setOpenGraphTitle("New OG Title");
   * ```
   */
  setOpenGraphTitle(title: string | null): Promise<null>;
  /**
   * Checks if the page uses its description as the Open Graph description.
   * @example
   * ```ts
   * let useDescriptionAsOpenGraphDescription = await myPage.usesDescriptionAsOpenGraphDescription();
   * console.log("Use Description as OG Description:", useDescriptionAsOpenGraphDescription);
   * ```
   */
  usesDescriptionAsOpenGraphDescription(): Promise<boolean>;
  /**
   * Sets whether the page should use its description as the Open Graph (OG) description.
   * @param use - Set to true to use the page description as the OG description, false otherwise.
   * @example
   * ```ts
   * myPage.useDescriptionAsOpenGraphDescription(true);
   * ```
   */
  useDescriptionAsOpenGraphDescription(use: boolean): Promise<null>;
  /**
   * Retrieves the Open Graph (OG) description of the page.
   * @example
   * ```ts
   * let ogDescription = await myPage.getOpenGraphDescription();
   * console.log("OG Description:", ogDescription);
   * ```
   */
  getOpenGraphDescription(): Promise<string>;
  /**
   * Sets the Open Graph (OG) description of the page to the provided value.
   * @param description - The new OG description to set for the page. Passing null will unset the current value.
   * @example
   * ```ts
   * myPage.setOpenGraphDescription("New OG Description");
   * ```
   */
  setOpenGraphDescription(description: string | null): Promise<null>;
  /**
   * Retrieves the URL of the Open Graph (OG) image associated with the page.
   * @example
   * ```ts
   * let ogImageUrl = await myPage.getOpenGraphImage();
   * console.log("OG Image URL:", ogImageUrl);
   * ```
   */
  getOpenGraphImage(): Promise<null | string>;
  /**
   * Sets the URL of the Open Graph (OG) image associated with the page.
   * @param url - The new URL of the OG image to set for the page. Passing null will unset the current value.
   * @example
   * ```ts
   * myPage.setOpenGraphImage("https://example.com/image.jpg");
   * ```
   */
  setOpenGraphImage(url: string | null): Promise<null>;
  /**
   * Checks if the page is excluded from search engine indexing.
   * @example
   * ```ts
   * let isExcluded = await myPage.isExcludedFromSearch();
   * console.log("Is Excluded from Search Indexing:", isExcluded);
   * ```
   */
  isExcludedFromSearch(): Promise<boolean>;
  /**
   * Sets whether the page should be excluded from search engine indexing.
   * @param shouldExclude - Set to true to exclude the page from search engine indexing, false otherwise.
   * @example
   * ```ts
   * myPage.excludeFromSearch(true);
   * ```
   */
  excludeFromSearch(shouldExclude: boolean): Promise<null>;
  /**
   * Checks if the page uses its title as the search engine title.
   * @example
   * ```ts
   * let useTitleAsSearchTitle = await myPage.usesTitleAsSearchTitle();
   * console.log("Use Title as Search Title:", useTitleAsSearchTitle);
   * ```
   */
  usesTitleAsSearchTitle(): Promise<boolean>;
  /**
   * Sets whether the page should use its title as the search engine title.
   * @param use - Set to true to use the page title as the search engine title, false otherwise.
   * @example
   * ```ts
   * myPage.useTitleAsSearchTitle(true);
   * ```
   */
  useTitleAsSearchTitle(use: boolean): Promise<null>;
  /**
   * Retrieves the search engine title of the page.
   * @example
   * ```ts
   * let searchEngineTitle = await myPage.getSearchTitle();
   * console.log("Search Engine Title:", searchEngineTitle);
   * ```
   */
  getSearchTitle(): Promise<string>;
  /**
   * Sets the search engine title of the page to the provided value.
   * @param title - The new search engine title to set for the page. Passing null will unset the current value.
   * @example
   * ```ts
   * myPage.setSearchTitle("New Search Engine Title");
   * ```
   */
  setSearchTitle(title: string | null): Promise<null>;
  /**
   * Checks if the page uses its description as the search engine description.
   * @example
   * ```ts
   * let useDescriptionAsSearchDescription = await myPage.usesDescriptionAsSearchDescription();
   * console.log("Use Description as Search Engine Description:", useDescriptionAsSearchDescription);
   * ```
   */
  usesDescriptionAsSearchDescription(): Promise<boolean>;
  /**
   * Sets whether the page should use its description as the search engine description.
   * @param use - Set to true to use the page description as the search engine description, false otherwise.
   * @example
   * ```ts
   * myPage.useDescriptionAsSearchDescription(true);
   * ```
   */
  useDescriptionAsSearchDescription(use: boolean): Promise<null>;
  /**
   * Retrieves the search engine description of the page.
   * @example
   * ```ts
   * let searchEngineDescription = await myPage.getSearchDescription();
   * console.log("Search Engine Description:", searchEngineDescription);
   * ```
   */
  getSearchDescription(): Promise<string>;
  /**
   * Sets the search engine description of the page to the provided value.
   * @param description - The new search engine description to set for the page. Passing null will unset the current value.
   * @example
   * ```ts
   * myPage.setSearchDescription("New Search Engine Description");
   * ```
   */
  setSearchDescription(description: string | null): Promise<null>;
  /**
   * Checks if the page uses its Open Graph (OG) image as the search engine image.
   * @example
   * ```ts
   * let useOpenGraphImageAsSearchImage = await myPage.usesOpenGraphImageAsSearchImage();
   * console.log("Use OG Image as Search Engine Image:", useOpenGraphImageAsSearchImage);
   * ```
   */
  usesOpenGraphImageAsSearchImage(): Promise<boolean>;
  /**
   * Sets whether the page should use its Open Graph (OG) image as the search engine image.
   * @param use - Set to true to use the Open Graph (OG) image as the search engine image, false otherwise.
   * @example
   * ```ts
   * myPage.useOpenGraphImageAsSearchImage(true);
   * ```
   */
  useOpenGraphImageAsSearchImage(use: boolean): Promise<null>;
  /**
   * Retrieves the search engine image URL of the page.
   * @example
   * ```ts
   * myPage.getSearchImage();
   * ```
   */
  getSearchImage(): Promise<string>;
  /**
   * Sets the search engine image URL of the page.
   * @param url - The new search engine image URL to set for the page. Passing null will unset the current value.
   * @example
   * ```ts
   * myPage.setSearchImage("https://example.com/image.jpg");
   * ```
   */
  setSearchImage(url: string | null): Promise<null>;
  /**
   * Checks if the page is password-protected.
   * @example
   * ```ts
   * let isProtected = await myPage.isPasswordProtected();
   * console.log("Is Password-Protected:", isProtected);
   * ```
   */
  isPasswordProtected(): Promise<boolean>;
  /**
   * Retrieves the utility page key, if available.
   * @example
   * ```ts
   * let utilityPageKey = await myPage.getUtilityPageKey();
   * console.log("Utility Page Key:", utilityPageKey);
   * ```
   */
  getUtilityPageKey(): Promise<null | string>;
  /**
   * Checks if the page is set as the homepage.
   * @example
   * ```ts
   * let isHomepage = await myPage.isHomepage();
   * console.log("Is Homepage:", isHomepage);
   * ```
   */
  isHomepage(): Promise<boolean>;
  /**
   * Retrieves the path that will be used when the page is published.
   * @example
   * ```ts
   * let publishPath = await myPage.getPublishPath();
   * console.log("Publish path: ", publishPath);
   * ```
   */
  getPublishPath(): Promise<null | string>;
  /**
   * Retrieves the collection ID for dynamic pages.
   * @example
   * ```ts
   * let collectionId = await myPage.getCollectionId();
   * console.log("Collection ID: ", collectionId);
   * ```
   */
  getCollectionId(): Promise<null | string>;
  /**
   * Retrieves the collection display name for dynamic pages.
   * @example
   * ```ts
   * let collectionName = await myPage.getCollectionName();
   * console.log("Collection name: ", collectionName);
   * ```
   */
  getCollectionName(): Promise<null | string>;
  /**
   * Retrieves the page kind.
   * @example
   * ```ts
   * let pageKind = await myPage.getKind();
   * console.log("Page kind: ", pageKind);
   * ```
   */
  getKind(): Promise<
    | 'static'
    | 'ecommerce'
    | 'cms'
    | 'userSystems'
    | 'utility'
    | 'staticTemplate'
  >;
}

type FolderId = string;
type PageId = string;
