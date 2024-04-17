export const Payments = {

    getAppSubscriptions: async () => {

        const subcriptions = await webflow.getAppSubscriptions()
        console.log(`Subscriptions: ${subcriptions}`)

    },
}