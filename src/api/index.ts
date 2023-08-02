import { http } from "@/utils/request";

export const getBanner = () => {
  return http.get("/banner");
};


export const getExclusive = () => {
  return http.get("/personalized?limit=10");
}