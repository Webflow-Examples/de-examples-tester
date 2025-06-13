// This file was automatically generated. See designer-extensions docs.

type InsertOrMoveElement = <
  el extends AnyElement,
  target extends el | ElementPreset<el> | Component | BuilderElement,
>(
  this: {id: FullElementId},
  that: target
) => Promise<
  target extends AnyElement
    ? target
    : target extends ElementPreset<infer elementType>
      ? elementType
      : target extends Component
        ? ComponentElement
        : AnyElement
>;

interface WebflowElement {
  readonly [brand]: 'Element';
  readonly builderElement: false;
  remove(this: {id: FullElementId}): Promise<null>;
  readonly before: InsertOrMoveElement;
  readonly after: InsertOrMoveElement;
}

interface CustomAttributes {
  readonly customAttributes: true;
  getCustomAttribute(
    this: {id: FullElementId},
    name: string
  ): Promise<null | string>;
  setCustomAttribute(
    this: {id: FullElementId},
    name: string,
    value: string
  ): Promise<null>;
  removeCustomAttribute(this: {id: FullElementId}, name: string): Promise<null>;
  getAllCustomAttributes(this: {
    id: FullElementId;
  }): Promise<Array<NamedValue> | null>;
}

interface NoCustomAttributes {
  readonly customAttributes: false;
}

interface DomId {
  readonly domId: true;
  getDomId(this: {id: FullElementId}): Promise<null | string>;
  setDomId(this: {id: FullElementId}, domId: string): Promise<null>;
}

interface NoDomId {
  readonly domId: false;
}

interface Styles {
  readonly styles: true;
  getStyles(this: {id: FullElementId}): Promise<Array<Style | null> | null>;
  setStyles(this: {id: FullElementId}, styles: Array<Style>): Promise<null>;
}

interface NoStyles {
  readonly styles: false;
}

interface TextContent {
  readonly textContent: true;
  setTextContent(this: {id: FullElementId}, content: string): Promise<null>;
}

interface NoTextContent {
  readonly textContent: false;
}

interface Children {
  readonly children: true;
  getChildren(this: {id: FullElementId}): Promise<Array<AnyElement>>;
  readonly append: InsertOrMoveElement;
  readonly prepend: InsertOrMoveElement;
}

interface NoChildren {
  readonly children: false;
}

interface AppConnections {
  readonly appConnections: true;
  setAppConnection(this: {id: FullElementId}, value: string): Promise<null>;
  removeAppConnection(this: {id: FullElementId}, value: string): Promise<null>;
  getAppConnections(this: {id: FullElementId}): Promise<Array<string>>;
}

interface NoAppConnections {
  readonly appConnections: false;
}

interface ComponentElement
  extends WebflowElement,
    NoCustomAttributes,
    NoDomId,
    NoStyles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'ComponentInstance';
  readonly plugin: '';
  getComponent(): Promise<Component>;
}

interface UnknownElement
  extends WebflowElement,
    NoCustomAttributes,
    NoDomId,
    NoStyles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: '';
  readonly plugin: '';
}

interface DOMElement
  extends WebflowElement,
    NoCustomAttributes,
    NoDomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'DOM';
  readonly plugin: 'Builtin';
  getTag(): Promise<null | string>;
  setTag(tag: string): Promise<null>;
  getAttribute(name: string): Promise<null | string>;
  setAttribute(name: string, value: string): Promise<null>;
  getAllAttributes(): Promise<Array<NamedValue> | null>;
  removeAttribute(name: string): Promise<null>;
}

interface AnimationElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Animation';
  readonly plugin: 'Animation';
}

interface SplineElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Spline';
  readonly plugin: 'Animation';
}

interface SearchFormElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'SearchForm';
  readonly plugin: 'Search';
}

interface SearchInputElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'SearchInput';
  readonly plugin: 'Search';
}

interface SearchButtonElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'SearchButton';
  readonly plugin: 'Search';
}

interface SearchResultEmptyElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'SearchResultEmpty';
  readonly plugin: 'Search';
}

interface SearchResultWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'SearchResultWrapper';
  readonly plugin: 'Search';
}

interface SearchResultListElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'SearchResultList';
  readonly plugin: 'Search';
}

interface SearchResultItemElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'SearchResultItem';
  readonly plugin: 'Search';
}

interface BlockElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Block';
  readonly plugin: 'Basic';
}

interface BlockquoteElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Blockquote';
  readonly plugin: 'Basic';
}

interface CodeBlockElement
  extends WebflowElement,
    NoCustomAttributes,
    NoDomId,
    NoStyles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CodeBlock';
  readonly plugin: 'Basic';
}

interface EmphasizedElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Emphasized';
  readonly plugin: 'Basic';
}

interface FigcaptionElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Figcaption';
  readonly plugin: 'Basic';
}

interface FigureElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Figure';
  readonly plugin: 'Basic';
}

interface HeadingElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Heading';
  readonly plugin: 'Basic';
  getHeadingLevel(): Promise<null | 1 | 2 | 3 | 4 | 5 | 6>;
  setHeadingLevel(level: 1 | 2 | 3 | 4 | 5 | 6): Promise<null>;
}

interface IframeElement
  extends WebflowElement,
    NoCustomAttributes,
    NoDomId,
    NoStyles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Iframe';
  readonly plugin: 'Basic';
}

interface ImageElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    AppConnections {
  readonly id: FullElementId;
  readonly type: 'Image';
  readonly plugin: 'Basic';
  getAltText(): Promise<string>;
  setAltText(altText: string | null): Promise<null>;
  setAsset(asset: Asset | null): Promise<null>;
  getAsset(): Promise<null | Asset>;
}

interface LinkElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Link';
  readonly plugin: 'Basic';
  setSettings(
    mode: 'url' | 'page' | 'pageSection' | 'email' | 'phone' | 'file',
    target: string | Page | AnyElement | Asset,
    metadata?: {openInNewTab?: boolean; subject?: string}
  ): Promise<null>;
  getTarget(): Promise<null | string | Page | AnyElement | Asset>;
}

interface ListElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'List';
  readonly plugin: 'Basic';
}

interface ListItemElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'ListItem';
  readonly plugin: 'Basic';
}

interface ParagraphElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Paragraph';
  readonly plugin: 'Basic';
}

interface RichTextElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'RichText';
  readonly plugin: 'Basic';
}

interface SpanElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Span';
  readonly plugin: 'Basic';
}

interface StringElement
  extends WebflowElement,
    NoCustomAttributes,
    NoDomId,
    NoStyles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'String';
  readonly plugin: 'Basic';
  getText(): Promise<null | string>;
  setText(text: string): Promise<null>;
}

interface StrongElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Strong';
  readonly plugin: 'Basic';
}

interface SuperscriptElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Superscript';
  readonly plugin: 'Basic';
}

interface SubscriptElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Subscript';
  readonly plugin: 'Basic';
}

interface InlineCodeElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'InlineCode';
  readonly plugin: 'Basic';
}

interface BackgroundVideoWrapperElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'BackgroundVideoWrapper';
  readonly plugin: 'BackgroundVideo';
}

interface BackgroundVideoPlayPauseButtonElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'BackgroundVideoPlayPauseButton';
  readonly plugin: 'BackgroundVideo';
}

interface BackgroundVideoPlayPauseButtonPlayingElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'BackgroundVideoPlayPauseButtonPlaying';
  readonly plugin: 'BackgroundVideo';
}

interface BackgroundVideoPlayPauseButtonPausedElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'BackgroundVideoPlayPauseButtonPaused';
  readonly plugin: 'BackgroundVideo';
}

interface BodyElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    NoStyles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Body';
  readonly plugin: 'Body';
}

interface CommerceAddToCartFormElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceAddToCartForm';
  readonly plugin: 'Commerce';
}

interface CommerceAddToCartButtonElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceAddToCartButton';
  readonly plugin: 'Commerce';
}

interface CommerceAddToCartWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceAddToCartWrapper';
  readonly plugin: 'Commerce';
}

interface CommerceAddToCartQuantityInputElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceAddToCartQuantityInput';
  readonly plugin: 'Commerce';
}

interface CommerceAddToCartErrorElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceAddToCartError';
  readonly plugin: 'Commerce';
}

interface CommerceAddToCartOutOfStockElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceAddToCartOutOfStock';
  readonly plugin: 'Commerce';
}

interface CommerceAddToCartOptionListElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceAddToCartOptionList';
  readonly plugin: 'Commerce';
}

interface CommerceAddToCartOptionListWithSelectorTypesElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceAddToCartOptionListWithSelectorTypes';
  readonly plugin: 'Commerce';
}

interface CommerceAddToCartOptionElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceAddToCartOption';
  readonly plugin: 'Commerce';
}

interface CommerceAddToCartOptionLabelElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceAddToCartOptionLabel';
  readonly plugin: 'Commerce';
}

interface CommerceAddToCartOptionSelectElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceAddToCartOptionSelect';
  readonly plugin: 'Commerce';
}

interface CommerceAddToCartOptionPillGroupElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceAddToCartOptionPillGroup';
  readonly plugin: 'Commerce';
}

interface CommerceAddToCartOptionPillElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceAddToCartOptionPill';
  readonly plugin: 'Commerce';
}

interface CommerceBuyNowButtonElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceBuyNowButton';
  readonly plugin: 'Commerce';
}

interface CommerceCartWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartWrapper';
  readonly plugin: 'Commerce';
}

interface CommerceCartOpenLinkElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartOpenLink';
  readonly plugin: 'Commerce';
}

interface CommerceCartOpenLinkCountElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartOpenLinkCount';
  readonly plugin: 'Commerce';
}

interface CommerceCartOpenLinkIconElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartOpenLinkIcon';
  readonly plugin: 'Commerce';
}

interface CommerceCartContainerWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartContainerWrapper';
  readonly plugin: 'Commerce';
}

interface CommerceCartContainerElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartContainer';
  readonly plugin: 'Commerce';
}

interface CommerceCartHeaderElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartHeader';
  readonly plugin: 'Commerce';
}

interface CommerceCartHeadingElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartHeading';
  readonly plugin: 'Commerce';
}

interface CommerceCartFormWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartFormWrapper';
  readonly plugin: 'Commerce';
}

interface CommerceCartFormElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartForm';
  readonly plugin: 'Commerce';
}

interface CommerceCartEmptyStateElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartEmptyState';
  readonly plugin: 'Commerce';
}

interface CommerceCartErrorStateElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartErrorState';
  readonly plugin: 'Commerce';
}

interface CommerceCartListElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartList';
  readonly plugin: 'Commerce';
}

interface CommerceCartFooterElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartFooter';
  readonly plugin: 'Commerce';
}

interface CommerceCartLineItemElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartLineItem';
  readonly plugin: 'Commerce';
}

interface CommerceCartCheckoutButtonElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartCheckoutButton';
  readonly plugin: 'Commerce';
}

interface CommerceCartItemElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartItem';
  readonly plugin: 'Commerce';
}

interface CommerceCartItemImageElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartItemImage';
  readonly plugin: 'Commerce';
}

interface CommerceCartItemInfoElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartItemInfo';
  readonly plugin: 'Commerce';
}

interface CommerceCartProductNameElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartProductName';
  readonly plugin: 'Commerce';
}

interface CommerceCartProductPriceElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartProductPrice';
  readonly plugin: 'Commerce';
}

interface CommerceCartQuantityElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartQuantity';
  readonly plugin: 'Commerce';
}

interface CommerceCartCloseLinkElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartCloseLink';
  readonly plugin: 'Commerce';
}

interface CommerceCartCloseLinkIconElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartCloseLinkIcon';
  readonly plugin: 'Commerce';
}

interface CommerceCartRemoveLinkElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartRemoveLink';
  readonly plugin: 'Commerce';
}

interface CommerceCartOrderValueElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartOrderValue';
  readonly plugin: 'Commerce';
}

interface CommerceCartCheckoutActionsElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartCheckoutActions';
  readonly plugin: 'Commerce';
}

interface CommerceCartOptionListElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartOptionList';
  readonly plugin: 'Commerce';
}

interface CommerceCartOptionListItemElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartOptionListItem';
  readonly plugin: 'Commerce';
}

interface CommerceCartOptionListItemLabelElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartOptionListItemLabel';
  readonly plugin: 'Commerce';
}

interface CommerceCartOptionListItemValueElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartOptionListItemValue';
  readonly plugin: 'Commerce';
}

interface CommerceCartQuickCheckoutActionsElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartQuickCheckoutActions';
  readonly plugin: 'Commerce';
}

interface CommerceCartQuickCheckoutButtonElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartQuickCheckoutButton';
  readonly plugin: 'Commerce';
}

interface CommerceCartApplePayButtonElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartApplePayButton';
  readonly plugin: 'Commerce';
}

interface CommerceCartApplePayIconElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartApplePayIcon';
  readonly plugin: 'Commerce';
}

interface CommerceQuickCheckoutGoogleIconElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceQuickCheckoutGoogleIcon';
  readonly plugin: 'Commerce';
}

interface CommerceQuickCheckoutMicrosoftIconElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceQuickCheckoutMicrosoftIcon';
  readonly plugin: 'Commerce';
}

interface CommercePayPalCheckoutButtonElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommercePayPalCheckoutButton';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutBlockContentElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutBlockContent';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutBlockHeaderElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutBlockHeader';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutColumnElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutColumn';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutFormContainerElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutFormContainer';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutRowElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutRow';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutLabelElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutLabel';
  readonly plugin: 'Commerce';
}

interface CommerceLabelElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceLabel';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutCardExpirationDateElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutCardExpirationDate';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutCardNumberElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutCardNumber';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutCardSecurityCodeElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutCardSecurityCode';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutCustomerInfoWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutCustomerInfoWrapper';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutErrorStateElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutErrorState';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutPaymentInfoWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutPaymentInfoWrapper';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutPlaceOrderButtonElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutPlaceOrderButton';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutEmailInputElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutEmailInput';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutShippingAddressWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutShippingAddressWrapper';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutShippingCountrySelectorElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutShippingCountrySelector';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutShippingFullNameElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutShippingFullName';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutShippingStreetAddressElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutShippingStreetAddress';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutShippingStreetAddressOptionalElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutShippingStreetAddressOptional';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutShippingCityElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutShippingCity';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutShippingZipPostalCodeElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutShippingZipPostalCode';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutShippingStateProvinceElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutShippingStateProvince';
  readonly plugin: 'Commerce';
}

interface CommerceOrderConfirmationElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceOrderConfirmation';
  readonly plugin: 'Commerce';
}

interface CommerceOrderConfirmationContainerElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceOrderConfirmationContainer';
  readonly plugin: 'Commerce';
}

interface CommerceOrderConfirmationHeaderWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceOrderConfirmationHeaderWrapper';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutBillingAddressWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutBillingAddressWrapper';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutBillingCountrySelectorElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutBillingCountrySelector';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutBillingFullNameElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutBillingFullName';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutBillingStreetAddressElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutBillingStreetAddress';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutBillingStreetAddressOptionalElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutBillingStreetAddressOptional';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutBillingCityElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutBillingCity';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutBillingZipPostalCodeElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutBillingZipPostalCode';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutBillingStateProvinceElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutBillingStateProvince';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutBillingAddressToggleWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutBillingAddressToggleWrapper';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutBillingAddressToggleCheckboxElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutBillingAddressToggleCheckbox';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutBillingAddressToggleLabelElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutBillingAddressToggleLabel';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutOrderItemsWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutOrderItemsWrapper';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutOrderItemsListElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutOrderItemsList';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutOrderItemElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutOrderItem';
  readonly plugin: 'Commerce';
}

interface CommerceBoldTextBlockElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceBoldTextBlock';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutOrderItemDescriptionWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutOrderItemDescriptionWrapper';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutOrderItemQuantityWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutOrderItemQuantityWrapper';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutOrderItemOptionListElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutOrderItemOptionList';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutOrderItemOptionListItemElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutOrderItemOptionListItem';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutOrderItemOptionListItemLabelElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutOrderItemOptionListItemLabel';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutOrderItemOptionListItemValueElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutOrderItemOptionListItemValue';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutOrderItemTrialTextWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutOrderItemTrialTextWrapper';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutShippingMethodsWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutShippingMethodsWrapper';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutShippingMethodsEmptyStateElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutShippingMethodsEmptyState';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutShippingMethodsListElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutShippingMethodsList';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutShippingMethodItemElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutShippingMethodItem';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutShippingMethodRadioButtonElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutShippingMethodRadioButton';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutShippingMethodDescriptionBlockElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutShippingMethodDescriptionBlock';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutShippingMethodNameBlockElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutShippingMethodNameBlock';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutShippingMethodBlockWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutShippingMethodBlockWrapper';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutCustomerInfoSummaryWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutCustomerInfoSummaryWrapper';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutShippingSummaryWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutShippingSummaryWrapper';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutPaymentSummaryWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutPaymentSummaryWrapper';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutOrderSummaryWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutOrderSummaryWrapper';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutSummaryItemElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutSummaryItem';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutSummaryLabelElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutSummaryLabel';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutSummaryBlockHeaderElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutSummaryBlockHeader';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutSummaryLineItemElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutSummaryLineItem';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutSummaryTotalElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutSummaryTotal';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutSummaryTextSpacingOnDivElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutSummaryTextSpacingOnDiv';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutSummaryFlexBoxDivElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutSummaryFlexBoxDiv';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutOrderItemDescriptionPriceElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutOrderItemDescriptionPrice';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutOrderSummaryExtraItemsListElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutOrderSummaryExtraItemsList';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutOrderSummaryExtraItemsListItemElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutOrderSummaryExtraItemsListItem';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutErrorMsgElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutErrorMsg';
  readonly plugin: 'Commerce';
}

interface CommerceCartErrorMsgElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartErrorMsg';
  readonly plugin: 'Commerce';
}

interface CommerceAddToCartErrorMsgElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceAddToCartErrorMsg';
  readonly plugin: 'Commerce';
}

interface CommerceLayoutMainElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceLayoutMain';
  readonly plugin: 'Commerce';
}

interface CommerceLayoutSidebarElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceLayoutSidebar';
  readonly plugin: 'Commerce';
}

interface CommerceLayoutContainerElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceLayoutContainer';
  readonly plugin: 'Commerce';
}

interface CommercePaypalCheckoutFormContainerElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommercePaypalCheckoutFormContainer';
  readonly plugin: 'Commerce';
}

interface CommercePaypalCheckoutErrorStateElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommercePaypalCheckoutErrorState';
  readonly plugin: 'Commerce';
}

interface CommercePaypalCheckoutErrorMessageElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommercePaypalCheckoutErrorMessage';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutAdditionalInputsContainerElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutAdditionalInputsContainer';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutAdditionalInfoSummaryWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutAdditionalInfoSummaryWrapper';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutAdditionalTextAreaElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutAdditionalTextArea';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutAdditionalTextInputElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutAdditionalTextInput';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutAdditionalCheckboxElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutAdditionalCheckbox';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutAdditionalCheckboxWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutAdditionalCheckboxWrapper';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutDiscountsElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutDiscounts';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutDiscountsButtonElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutDiscountsButton';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutDiscountsInputElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutDiscountsInput';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutDiscountsLabelElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutDiscountsLabel';
  readonly plugin: 'Commerce';
}

interface CommerceDownloadsWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceDownloadsWrapper';
  readonly plugin: 'Commerce';
}

interface CommerceDownloadsListElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceDownloadsList';
  readonly plugin: 'Commerce';
}

interface CommerceDownloadsItemElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceDownloadsItem';
  readonly plugin: 'Commerce';
}

interface DropdownLinkElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'DropdownLink';
  readonly plugin: 'Dropdown';
}

interface DropdownListElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'DropdownList';
  readonly plugin: 'Dropdown';
}

interface DropdownToggleElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'DropdownToggle';
  readonly plugin: 'Dropdown';
}

interface DropdownWrapperElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'DropdownWrapper';
  readonly plugin: 'Dropdown';
}

interface DynamoWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'DynamoWrapper';
  readonly plugin: 'Dynamo';
}

interface DynamoListElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'DynamoList';
  readonly plugin: 'Dynamo';
}

interface DynamoItemElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'DynamoItem';
  readonly plugin: 'Dynamo';
}

interface DynamoEmptyElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'DynamoEmpty';
  readonly plugin: 'Dynamo';
}

interface HtmlEmbedElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'HtmlEmbed';
  readonly plugin: 'Embed';
}

interface VideoElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Video';
  readonly plugin: 'Embed';
}

interface YouTubeVideoElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'YouTubeVideo';
  readonly plugin: 'Embed';
}

interface LightboxWrapperElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'LightboxWrapper';
  readonly plugin: 'Lightbox';
}

interface FormBlockLabelElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormBlockLabel';
  readonly plugin: 'Form';
}

interface FormButtonElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormButton';
  readonly plugin: 'Form';
}

interface FormCheckboxInputElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormCheckboxInput';
  readonly plugin: 'Form';
  getName(): Promise<string>;
  setName(name: string): Promise<null>;
  getRequired(): Promise<boolean>;
  setRequired(value: boolean): Promise<null>;
}

interface FormCheckboxWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormCheckboxWrapper';
  readonly plugin: 'Form';
}

interface FormErrorMessageElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormErrorMessage';
  readonly plugin: 'Form';
}

interface FormFormElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    NoTextContent,
    AppConnections {
  readonly id: FullElementId;
  readonly type: 'FormForm';
  readonly plugin: 'Form';
  getName(): Promise<string>;
  setName(name: string): Promise<null>;
  getSettings(): Promise<FormSettings>;
  setSettings(settings: Partial<FormSettings>): Promise<null>;
}

interface FormInlineLabelElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormInlineLabel';
  readonly plugin: 'Form';
}

interface FormRadioInputElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormRadioInput';
  readonly plugin: 'Form';
  getName(): Promise<string>;
  setName(name: string): Promise<null>;
  getRequired(): Promise<boolean>;
  setRequired(value: boolean): Promise<null>;
}

interface FormRadioWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormRadioWrapper';
  readonly plugin: 'Form';
}

interface FormSelectElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormSelect';
  readonly plugin: 'Form';
  getName(): Promise<string>;
  setName(name: string): Promise<null>;
  getRequired(): Promise<boolean>;
  setRequired(value: boolean): Promise<null>;
}

interface FormSuccessMessageElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormSuccessMessage';
  readonly plugin: 'Form';
}

interface FormTextareaElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormTextarea';
  readonly plugin: 'Form';
  getName(): Promise<string>;
  setName(name: string): Promise<null>;
  getRequired(): Promise<boolean>;
  setRequired(value: boolean): Promise<null>;
}

interface FormTextInputElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormTextInput';
  readonly plugin: 'Form';
  getName(): Promise<string>;
  setName(name: string): Promise<null>;
  getRequired(): Promise<boolean>;
  setRequired(value: boolean): Promise<null>;
}

interface FormWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    AppConnections {
  readonly id: FullElementId;
  readonly type: 'FormWrapper';
  readonly plugin: 'Form';
  getName(): Promise<string>;
  setName(name: string): Promise<null>;
  getSettings(): Promise<FormSettings>;
  setSettings(settings: Partial<FormSettings>): Promise<null>;
}

interface FormReCaptchaElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormReCaptcha';
  readonly plugin: 'Form';
}

interface FormFileUploadWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormFileUploadWrapper';
  readonly plugin: 'Form';
  getName(): Promise<string>;
  setName(name: string): Promise<null>;
  getRequired(): Promise<boolean>;
  setRequired(value: boolean): Promise<null>;
}

interface FormFileUploadDefaultElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormFileUploadDefault';
  readonly plugin: 'Form';
}

interface FormFileUploadUploadingElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormFileUploadUploading';
  readonly plugin: 'Form';
}

interface FormFileUploadUploadingBtnElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormFileUploadUploadingBtn';
  readonly plugin: 'Form';
}

interface FormFileUploadUploadingIconElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormFileUploadUploadingIcon';
  readonly plugin: 'Form';
}

interface FormFileUploadSuccessElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormFileUploadSuccess';
  readonly plugin: 'Form';
}

interface FormFileUploadFileElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormFileUploadFile';
  readonly plugin: 'Form';
}

interface FormFileUploadFileNameElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormFileUploadFileName';
  readonly plugin: 'Form';
}

interface FormFileUploadRemoveLinkElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormFileUploadRemoveLink';
  readonly plugin: 'Form';
}

interface FormFileUploadErrorElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormFileUploadError';
  readonly plugin: 'Form';
}

interface FormFileUploadErrorMsgElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormFileUploadErrorMsg';
  readonly plugin: 'Form';
}

interface UserFormUploadErrorMsgElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserFormUploadErrorMsg';
  readonly plugin: 'Form';
}

interface FormFileUploadInputElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormFileUploadInput';
  readonly plugin: 'Form';
}

interface FormFileUploadLabelElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormFileUploadLabel';
  readonly plugin: 'Form';
}

interface FormFileUploadInfoElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormFileUploadInfo';
  readonly plugin: 'Form';
}

interface FormFileUploadTextElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormFileUploadText';
  readonly plugin: 'Form';
}

interface IconElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Icon';
  readonly plugin: 'Icon';
}

interface HreflangsElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Hreflangs';
  readonly plugin: 'Localization';
}

interface LocalesWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'LocalesWrapper';
  readonly plugin: 'Localization';
}

interface LocalesEmptyElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'LocalesEmpty';
  readonly plugin: 'Localization';
}

interface LocalesListElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'LocalesList';
  readonly plugin: 'Localization';
}

interface LocalesItemElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'LocalesItem';
  readonly plugin: 'Localization';
}

interface ContainerElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Container';
  readonly plugin: 'Layout';
}

interface RowElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Row';
  readonly plugin: 'Layout';
}

interface ColumnElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Column';
  readonly plugin: 'Layout';
}

interface SectionElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Section';
  readonly plugin: 'Layout';
}

interface GridElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Grid';
  readonly plugin: 'Layout';
}

interface LayoutElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Layout';
  readonly plugin: 'Layout';
}

interface CellElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Cell';
  readonly plugin: 'Layout';
}

interface BlockContainerElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'BlockContainer';
  readonly plugin: 'Layout';
}

interface VFlexElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'VFlex';
  readonly plugin: 'Layout';
}

interface HFlexElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'HFlex';
  readonly plugin: 'Layout';
}

interface NavbarBrandElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'NavbarBrand';
  readonly plugin: 'Navbar';
}

interface NavbarButtonElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'NavbarButton';
  readonly plugin: 'Navbar';
}

interface NavbarContainerElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'NavbarContainer';
  readonly plugin: 'Navbar';
}

interface NavbarLinkElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'NavbarLink';
  readonly plugin: 'Navbar';
}

interface NavbarMenuElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'NavbarMenu';
  readonly plugin: 'Navbar';
}

interface NavbarWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'NavbarWrapper';
  readonly plugin: 'Navbar';
}

interface PaginationElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Pagination';
  readonly plugin: 'Pagination';
}

interface PaginationPreviousElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'PaginationPrevious';
  readonly plugin: 'Pagination';
}

interface PaginationNextElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'PaginationNext';
  readonly plugin: 'Pagination';
}

interface PaginationPreviousIconElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'PaginationPreviousIcon';
  readonly plugin: 'Pagination';
}

interface PaginationNextIconElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'PaginationNextIcon';
  readonly plugin: 'Pagination';
}

interface PaginationCountElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'PaginationCount';
  readonly plugin: 'Pagination';
}

interface SliderArrowElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'SliderArrow';
  readonly plugin: 'Slider';
}

interface SliderMaskElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'SliderMask';
  readonly plugin: 'Slider';
}

interface SliderNavElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'SliderNav';
  readonly plugin: 'Slider';
}

interface SliderSlideElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'SliderSlide';
  readonly plugin: 'Slider';
}

interface SliderWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'SliderWrapper';
  readonly plugin: 'Slider';
}

interface MetaElement
  extends WebflowElement,
    NoCustomAttributes,
    NoDomId,
    NoStyles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Meta';
  readonly plugin: 'Ssr';
}

interface TitleElement
  extends WebflowElement,
    NoCustomAttributes,
    NoDomId,
    NoStyles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Title';
  readonly plugin: 'Ssr';
}

interface CustomCodeElement
  extends WebflowElement,
    NoCustomAttributes,
    NoDomId,
    NoStyles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CustomCode';
  readonly plugin: 'Ssr';
}

interface CommentElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Comment';
  readonly plugin: 'Ssr';
}

interface FacebookPixelElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FacebookPixel';
  readonly plugin: 'Ssr';
}

interface GoogleAnalyticsElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'GoogleAnalytics';
  readonly plugin: 'Ssr';
}

interface TabsContentElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'TabsContent';
  readonly plugin: 'Tabs';
}

interface TabsLinkElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'TabsLink';
  readonly plugin: 'Tabs';
}

interface TabsMenuElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'TabsMenu';
  readonly plugin: 'Tabs';
}

interface TabsPaneElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'TabsPane';
  readonly plugin: 'Tabs';
}

interface TabsWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'TabsWrapper';
  readonly plugin: 'Tabs';
}

interface FacebookElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Facebook';
  readonly plugin: 'Widget';
}

interface MapWidgetElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'MapWidget';
  readonly plugin: 'Widget';
}

interface TwitterElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Twitter';
  readonly plugin: 'Widget';
}

interface GooglePlusElement
  extends WebflowElement,
    NoCustomAttributes,
    NoDomId,
    NoStyles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'GooglePlus';
  readonly plugin: 'Widget';
}

interface UserAccountWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserAccountWrapper';
  readonly plugin: 'Users';
}

interface UserAccountFormWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserAccountFormWrapper';
  readonly plugin: 'Users';
}

interface UserAccountFormElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserAccountForm';
  readonly plugin: 'Users';
}

interface UserAccountFormSaveButtonElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserAccountFormSaveButton';
  readonly plugin: 'Users';
}

interface UserAccountFormCancelButtonElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserAccountFormCancelButton';
  readonly plugin: 'Users';
}

interface UserAccountSubscriptionListWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserAccountSubscriptionListWrapper';
  readonly plugin: 'Users';
}

interface UserAccountSubscriptionListEmptyElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserAccountSubscriptionListEmpty';
  readonly plugin: 'Users';
}

interface UserAccountSubscriptionListElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserAccountSubscriptionList';
  readonly plugin: 'Users';
}

interface UserAccountSubscriptionListItemElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserAccountSubscriptionListItem';
  readonly plugin: 'Users';
}

interface UserAccountSubscriptionListItemInfoElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserAccountSubscriptionListItemInfo';
  readonly plugin: 'Users';
}

interface UserAccountSubscriptionCancelButtonElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserAccountSubscriptionCancelButton';
  readonly plugin: 'Users';
}

interface UserSignUpFormWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserSignUpFormWrapper';
  readonly plugin: 'Users';
}

interface UserSignUpFormElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserSignUpForm';
  readonly plugin: 'Users';
}

interface UserSignUpVerificationMessageElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserSignUpVerificationMessage';
  readonly plugin: 'Users';
}

interface UserSignUpRedirectWrapperElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserSignUpRedirectWrapper';
  readonly plugin: 'Users';
}

interface UserSignUpTermsOfServiceWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserSignUpTermsOfServiceWrapper';
  readonly plugin: 'Users';
}

interface UserSignUpTermsOfServiceCheckboxInputElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserSignUpTermsOfServiceCheckboxInput';
  readonly plugin: 'Users';
}

interface UserLogInFormWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserLogInFormWrapper';
  readonly plugin: 'Users';
}

interface UserLogInFormElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserLogInForm';
  readonly plugin: 'Users';
}

interface UserUpdatePasswordFormWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserUpdatePasswordFormWrapper';
  readonly plugin: 'Users';
}

interface UserUpdatePasswordFormElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserUpdatePasswordForm';
  readonly plugin: 'Users';
}

interface UserResetPasswordFormWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserResetPasswordFormWrapper';
  readonly plugin: 'Users';
}

interface UserResetPasswordFormElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserResetPasswordForm';
  readonly plugin: 'Users';
}

interface UserLogOutLogInElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserLogOutLogIn';
  readonly plugin: 'Users';
}

interface UserFormBlockLabelElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserFormBlockLabel';
  readonly plugin: 'Users';
}

interface UserFormButtonElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserFormButton';
  readonly plugin: 'Users';
}

interface UserFormCheckboxInputElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserFormCheckboxInput';
  readonly plugin: 'Users';
}

interface UserFormTextInputElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserFormTextInput';
  readonly plugin: 'Users';
}

interface UserFormEmailInputElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserFormEmailInput';
  readonly plugin: 'Users';
}

interface UserFormNameInputElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserFormNameInput';
  readonly plugin: 'Users';
}

interface UserFormPasswordInputElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserFormPasswordInput';
  readonly plugin: 'Users';
}

interface UserFormSelectElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserFormSelect';
  readonly plugin: 'Users';
}

interface UserFormNumberInputElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserFormNumberInput';
  readonly plugin: 'Users';
}

interface UserFormFileUploadInputElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserFormFileUploadInput';
  readonly plugin: 'Users';
}

interface UserFormUploadNameElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserFormUploadName';
  readonly plugin: 'Users';
}

interface UserFormHeaderElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserFormHeader';
  readonly plugin: 'Users';
}

interface UserFormFooterElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserFormFooter';
  readonly plugin: 'Users';
}

interface UserFormPageWrapElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserFormPageWrap';
  readonly plugin: 'Users';
}

interface BlockContentElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'BlockContent';
  readonly plugin: 'Users';
}

interface BlockHeaderElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'BlockHeader';
  readonly plugin: 'Users';
}

interface FlexColumnElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FlexColumn';
  readonly plugin: 'Users';
}

interface GridRowElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'GridRow';
  readonly plugin: 'Users';
}

interface UserFormSuccessStateElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserFormSuccessState';
  readonly plugin: 'Users';
}

interface UserFormErrorStateElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserFormErrorState';
  readonly plugin: 'Users';
}

interface UserFormErrorStateStyleVariant1Element
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserFormErrorStateStyleVariant1';
  readonly plugin: 'Users';
}

interface UserLogInErrorMsgElement
  extends WebflowElement,
    NoCustomAttributes,
    NoDomId,
    NoStyles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserLogInErrorMsg';
  readonly plugin: 'Users';
}

interface UserSignUpErrorMsgElement
  extends WebflowElement,
    NoCustomAttributes,
    NoDomId,
    NoStyles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserSignUpErrorMsg';
  readonly plugin: 'Users';
}

interface UserResetPasswordErrorMsgElement
  extends WebflowElement,
    NoCustomAttributes,
    NoDomId,
    NoStyles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserResetPasswordErrorMsg';
  readonly plugin: 'Users';
}

interface UserUpdatePasswordErrorMsgElement
  extends WebflowElement,
    NoCustomAttributes,
    NoDomId,
    NoStyles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserUpdatePasswordErrorMsg';
  readonly plugin: 'Users';
}

interface UserErrorMsgElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserErrorMsg';
  readonly plugin: 'Users';
}

interface CodeIslandElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CodeIsland';
  readonly plugin: 'Code';
}

type AnyElement =
  | ComponentElement
  | UnknownElement
  | DOMElement
  | AnimationElement
  | SplineElement
  | SearchFormElement
  | SearchInputElement
  | SearchButtonElement
  | SearchResultEmptyElement
  | SearchResultWrapperElement
  | SearchResultListElement
  | SearchResultItemElement
  | BlockElement
  | BlockquoteElement
  | CodeBlockElement
  | EmphasizedElement
  | FigcaptionElement
  | FigureElement
  | HeadingElement
  | IframeElement
  | ImageElement
  | LinkElement
  | ListElement
  | ListItemElement
  | ParagraphElement
  | RichTextElement
  | SpanElement
  | StringElement
  | StrongElement
  | SuperscriptElement
  | SubscriptElement
  | InlineCodeElement
  | BackgroundVideoWrapperElement
  | BackgroundVideoPlayPauseButtonElement
  | BackgroundVideoPlayPauseButtonPlayingElement
  | BackgroundVideoPlayPauseButtonPausedElement
  | BodyElement
  | CommerceAddToCartFormElement
  | CommerceAddToCartButtonElement
  | CommerceAddToCartWrapperElement
  | CommerceAddToCartQuantityInputElement
  | CommerceAddToCartErrorElement
  | CommerceAddToCartOutOfStockElement
  | CommerceAddToCartOptionListElement
  | CommerceAddToCartOptionListWithSelectorTypesElement
  | CommerceAddToCartOptionElement
  | CommerceAddToCartOptionLabelElement
  | CommerceAddToCartOptionSelectElement
  | CommerceAddToCartOptionPillGroupElement
  | CommerceAddToCartOptionPillElement
  | CommerceBuyNowButtonElement
  | CommerceCartWrapperElement
  | CommerceCartOpenLinkElement
  | CommerceCartOpenLinkCountElement
  | CommerceCartOpenLinkIconElement
  | CommerceCartContainerWrapperElement
  | CommerceCartContainerElement
  | CommerceCartHeaderElement
  | CommerceCartHeadingElement
  | CommerceCartFormWrapperElement
  | CommerceCartFormElement
  | CommerceCartEmptyStateElement
  | CommerceCartErrorStateElement
  | CommerceCartListElement
  | CommerceCartFooterElement
  | CommerceCartLineItemElement
  | CommerceCartCheckoutButtonElement
  | CommerceCartItemElement
  | CommerceCartItemImageElement
  | CommerceCartItemInfoElement
  | CommerceCartProductNameElement
  | CommerceCartProductPriceElement
  | CommerceCartQuantityElement
  | CommerceCartCloseLinkElement
  | CommerceCartCloseLinkIconElement
  | CommerceCartRemoveLinkElement
  | CommerceCartOrderValueElement
  | CommerceCartCheckoutActionsElement
  | CommerceCartOptionListElement
  | CommerceCartOptionListItemElement
  | CommerceCartOptionListItemLabelElement
  | CommerceCartOptionListItemValueElement
  | CommerceCartQuickCheckoutActionsElement
  | CommerceCartQuickCheckoutButtonElement
  | CommerceCartApplePayButtonElement
  | CommerceCartApplePayIconElement
  | CommerceQuickCheckoutGoogleIconElement
  | CommerceQuickCheckoutMicrosoftIconElement
  | CommercePayPalCheckoutButtonElement
  | CommerceCheckoutBlockContentElement
  | CommerceCheckoutBlockHeaderElement
  | CommerceCheckoutColumnElement
  | CommerceCheckoutFormContainerElement
  | CommerceCheckoutRowElement
  | CommerceCheckoutLabelElement
  | CommerceLabelElement
  | CommerceCheckoutCardExpirationDateElement
  | CommerceCheckoutCardNumberElement
  | CommerceCheckoutCardSecurityCodeElement
  | CommerceCheckoutCustomerInfoWrapperElement
  | CommerceCheckoutErrorStateElement
  | CommerceCheckoutPaymentInfoWrapperElement
  | CommerceCheckoutPlaceOrderButtonElement
  | CommerceCheckoutEmailInputElement
  | CommerceCheckoutShippingAddressWrapperElement
  | CommerceCheckoutShippingCountrySelectorElement
  | CommerceCheckoutShippingFullNameElement
  | CommerceCheckoutShippingStreetAddressElement
  | CommerceCheckoutShippingStreetAddressOptionalElement
  | CommerceCheckoutShippingCityElement
  | CommerceCheckoutShippingZipPostalCodeElement
  | CommerceCheckoutShippingStateProvinceElement
  | CommerceOrderConfirmationElement
  | CommerceOrderConfirmationContainerElement
  | CommerceOrderConfirmationHeaderWrapperElement
  | CommerceCheckoutBillingAddressWrapperElement
  | CommerceCheckoutBillingCountrySelectorElement
  | CommerceCheckoutBillingFullNameElement
  | CommerceCheckoutBillingStreetAddressElement
  | CommerceCheckoutBillingStreetAddressOptionalElement
  | CommerceCheckoutBillingCityElement
  | CommerceCheckoutBillingZipPostalCodeElement
  | CommerceCheckoutBillingStateProvinceElement
  | CommerceCheckoutBillingAddressToggleWrapperElement
  | CommerceCheckoutBillingAddressToggleCheckboxElement
  | CommerceCheckoutBillingAddressToggleLabelElement
  | CommerceCheckoutOrderItemsWrapperElement
  | CommerceCheckoutOrderItemsListElement
  | CommerceCheckoutOrderItemElement
  | CommerceBoldTextBlockElement
  | CommerceCheckoutOrderItemDescriptionWrapperElement
  | CommerceCheckoutOrderItemQuantityWrapperElement
  | CommerceCheckoutOrderItemOptionListElement
  | CommerceCheckoutOrderItemOptionListItemElement
  | CommerceCheckoutOrderItemOptionListItemLabelElement
  | CommerceCheckoutOrderItemOptionListItemValueElement
  | CommerceCheckoutOrderItemTrialTextWrapperElement
  | CommerceCheckoutShippingMethodsWrapperElement
  | CommerceCheckoutShippingMethodsEmptyStateElement
  | CommerceCheckoutShippingMethodsListElement
  | CommerceCheckoutShippingMethodItemElement
  | CommerceCheckoutShippingMethodRadioButtonElement
  | CommerceCheckoutShippingMethodDescriptionBlockElement
  | CommerceCheckoutShippingMethodNameBlockElement
  | CommerceCheckoutShippingMethodBlockWrapperElement
  | CommerceCheckoutCustomerInfoSummaryWrapperElement
  | CommerceCheckoutShippingSummaryWrapperElement
  | CommerceCheckoutPaymentSummaryWrapperElement
  | CommerceCheckoutOrderSummaryWrapperElement
  | CommerceCheckoutSummaryItemElement
  | CommerceCheckoutSummaryLabelElement
  | CommerceCheckoutSummaryBlockHeaderElement
  | CommerceCheckoutSummaryLineItemElement
  | CommerceCheckoutSummaryTotalElement
  | CommerceCheckoutSummaryTextSpacingOnDivElement
  | CommerceCheckoutSummaryFlexBoxDivElement
  | CommerceCheckoutOrderItemDescriptionPriceElement
  | CommerceCheckoutOrderSummaryExtraItemsListElement
  | CommerceCheckoutOrderSummaryExtraItemsListItemElement
  | CommerceCheckoutErrorMsgElement
  | CommerceCartErrorMsgElement
  | CommerceAddToCartErrorMsgElement
  | CommerceLayoutMainElement
  | CommerceLayoutSidebarElement
  | CommerceLayoutContainerElement
  | CommercePaypalCheckoutFormContainerElement
  | CommercePaypalCheckoutErrorStateElement
  | CommercePaypalCheckoutErrorMessageElement
  | CommerceCheckoutAdditionalInputsContainerElement
  | CommerceCheckoutAdditionalInfoSummaryWrapperElement
  | CommerceCheckoutAdditionalTextAreaElement
  | CommerceCheckoutAdditionalTextInputElement
  | CommerceCheckoutAdditionalCheckboxElement
  | CommerceCheckoutAdditionalCheckboxWrapperElement
  | CommerceCheckoutDiscountsElement
  | CommerceCheckoutDiscountsButtonElement
  | CommerceCheckoutDiscountsInputElement
  | CommerceCheckoutDiscountsLabelElement
  | CommerceDownloadsWrapperElement
  | CommerceDownloadsListElement
  | CommerceDownloadsItemElement
  | DropdownLinkElement
  | DropdownListElement
  | DropdownToggleElement
  | DropdownWrapperElement
  | DynamoWrapperElement
  | DynamoListElement
  | DynamoItemElement
  | DynamoEmptyElement
  | HtmlEmbedElement
  | VideoElement
  | YouTubeVideoElement
  | LightboxWrapperElement
  | FormBlockLabelElement
  | FormButtonElement
  | FormCheckboxInputElement
  | FormCheckboxWrapperElement
  | FormErrorMessageElement
  | FormFormElement
  | FormInlineLabelElement
  | FormRadioInputElement
  | FormRadioWrapperElement
  | FormSelectElement
  | FormSuccessMessageElement
  | FormTextareaElement
  | FormTextInputElement
  | FormWrapperElement
  | FormReCaptchaElement
  | FormFileUploadWrapperElement
  | FormFileUploadDefaultElement
  | FormFileUploadUploadingElement
  | FormFileUploadUploadingBtnElement
  | FormFileUploadUploadingIconElement
  | FormFileUploadSuccessElement
  | FormFileUploadFileElement
  | FormFileUploadFileNameElement
  | FormFileUploadRemoveLinkElement
  | FormFileUploadErrorElement
  | FormFileUploadErrorMsgElement
  | UserFormUploadErrorMsgElement
  | FormFileUploadInputElement
  | FormFileUploadLabelElement
  | FormFileUploadInfoElement
  | FormFileUploadTextElement
  | IconElement
  | HreflangsElement
  | LocalesWrapperElement
  | LocalesEmptyElement
  | LocalesListElement
  | LocalesItemElement
  | ContainerElement
  | RowElement
  | ColumnElement
  | SectionElement
  | GridElement
  | LayoutElement
  | CellElement
  | BlockContainerElement
  | VFlexElement
  | HFlexElement
  | NavbarBrandElement
  | NavbarButtonElement
  | NavbarContainerElement
  | NavbarLinkElement
  | NavbarMenuElement
  | NavbarWrapperElement
  | PaginationElement
  | PaginationPreviousElement
  | PaginationNextElement
  | PaginationPreviousIconElement
  | PaginationNextIconElement
  | PaginationCountElement
  | SliderArrowElement
  | SliderMaskElement
  | SliderNavElement
  | SliderSlideElement
  | SliderWrapperElement
  | MetaElement
  | TitleElement
  | CustomCodeElement
  | CommentElement
  | FacebookPixelElement
  | GoogleAnalyticsElement
  | TabsContentElement
  | TabsLinkElement
  | TabsMenuElement
  | TabsPaneElement
  | TabsWrapperElement
  | FacebookElement
  | MapWidgetElement
  | TwitterElement
  | GooglePlusElement
  | UserAccountWrapperElement
  | UserAccountFormWrapperElement
  | UserAccountFormElement
  | UserAccountFormSaveButtonElement
  | UserAccountFormCancelButtonElement
  | UserAccountSubscriptionListWrapperElement
  | UserAccountSubscriptionListEmptyElement
  | UserAccountSubscriptionListElement
  | UserAccountSubscriptionListItemElement
  | UserAccountSubscriptionListItemInfoElement
  | UserAccountSubscriptionCancelButtonElement
  | UserSignUpFormWrapperElement
  | UserSignUpFormElement
  | UserSignUpVerificationMessageElement
  | UserSignUpRedirectWrapperElement
  | UserSignUpTermsOfServiceWrapperElement
  | UserSignUpTermsOfServiceCheckboxInputElement
  | UserLogInFormWrapperElement
  | UserLogInFormElement
  | UserUpdatePasswordFormWrapperElement
  | UserUpdatePasswordFormElement
  | UserResetPasswordFormWrapperElement
  | UserResetPasswordFormElement
  | UserLogOutLogInElement
  | UserFormBlockLabelElement
  | UserFormButtonElement
  | UserFormCheckboxInputElement
  | UserFormTextInputElement
  | UserFormEmailInputElement
  | UserFormNameInputElement
  | UserFormPasswordInputElement
  | UserFormSelectElement
  | UserFormNumberInputElement
  | UserFormFileUploadInputElement
  | UserFormUploadNameElement
  | UserFormHeaderElement
  | UserFormFooterElement
  | UserFormPageWrapElement
  | BlockContentElement
  | BlockHeaderElement
  | FlexColumnElement
  | GridRowElement
  | UserFormSuccessStateElement
  | UserFormErrorStateElement
  | UserFormErrorStateStyleVariant1Element
  | UserLogInErrorMsgElement
  | UserSignUpErrorMsgElement
  | UserResetPasswordErrorMsgElement
  | UserUpdatePasswordErrorMsgElement
  | UserErrorMsgElement
  | CodeIslandElement;
