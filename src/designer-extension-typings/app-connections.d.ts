type AppConnectionResource = {
  type: 'Element';
  value: AnyElement;
};

type LaunchContext = {
  type: 'AppConnection' | 'AppIntent' | 'DeepLink';
  value: null | string | {[key in 'form' | 'image']?: 'create' | 'manage'};
};
