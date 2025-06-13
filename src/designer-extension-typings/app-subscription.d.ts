type AppSubscription = {
  appId: string;
  price: {
    value: number;
    unit: string;
    interval: 'ONE_TIME' | 'MONTHLY' | 'YEARLY';
  };
  accessGrant: {
    type: 'Site';
    id: string;
  };
  status: string;
  startsAt: string;
  endsAt: string;
};
