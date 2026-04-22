export const Payments = {

  subscriptions: {
    getAppSubscriptions: {
      displayName: 'Get app subscriptions',
      code: async () => {
        const subcriptions = await webflow.getAppSubscriptions()
        console.log(`Subscriptions: ${subcriptions}`)
      },
    },
  },

}
