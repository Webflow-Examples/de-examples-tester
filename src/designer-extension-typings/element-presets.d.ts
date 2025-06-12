/// <reference path="./element-presets-generated.d.ts" />

interface ElementPreset<elementType> {
  readonly [brand]: 'ElementPreset';
  readonly id: [PluginId, ElementPresetId];
  readonly create: (elementData: {
    id: FullElementId;
    type: [PluginId, ComponentId];
  }) => elementType;
}

type ElementPresetId = string;
