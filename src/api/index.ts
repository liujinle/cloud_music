import { http } from "@/utils/request";

export const getBanner = () => {
  return http.get("/banner");
};
