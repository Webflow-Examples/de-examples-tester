interface BuilderElement {
  readonly [brand]: 'BuilderElement';

  readonly id: ElementId;
  readonly builderElement: boolean;
  readonly textContent: true;

  getTag(): null | string;
  setTag(tag: string): null;
  append(child: ElementPreset<AnyElement>): BuilderElement;
  setAttribute(name: string, value: string): null;
  setStyles(styles: Array<Style>): null;
  setTextContent(content: string): null;
}
