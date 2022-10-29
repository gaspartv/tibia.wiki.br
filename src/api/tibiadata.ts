import { apiTibiaData } from "./api"

export const getCreatures = async () => {
    const response = await apiTibiaData.get("/creatures")
    return response.data
}