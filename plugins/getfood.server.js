// file naming with .server to tell nuxt to execute this on the server while building the website

export default async ({ store }) => {
    await store.dispatch('getFoodData')
}
