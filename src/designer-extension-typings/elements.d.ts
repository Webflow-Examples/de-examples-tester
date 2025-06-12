/// <reference path="./styles.d.ts" />
/// <reference path="./elements-generated.d.ts" />

type ElementId = string;
type FullElementId = {component: ComponentId; element: ElementId};
type PluginId = string;
type NamedValue = {
  name: string;
  value: string;
};

type FormState = 'normal' | 'success' | 'error';

type FormMethod = 'get' | 'post';

type FormSettings = {
  state: FormState;
  name: string;
  redirect: string;
  action: string;
  method: FormMethod;
};
