export const Payments = {

    subscriptions: {
        getAppSubscriptions: async () => {

            const subcriptions = await webflow.getAppSubscriptions()
            console.log(`Subscriptions: ${subcriptions}`)

        },
    },

}