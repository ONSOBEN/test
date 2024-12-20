import { istadLmsApi } from "@/redux/api";

export const bannerAdApi = istadLmsApi.injectEndpoints({
    endpoints: (builder) => ({
        getBannerAds: builder.query<any, void>({
            query: () =>
                `/portals/banners`,
        }),

    })
})

export const {
    useGetBannerAdsQuery
} = bannerAdApi;