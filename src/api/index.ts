import { http } from "@/utils/request";

export const getBanner = () => {
  return http.get("/banner");
};

export const getExclusive = () => {
  return http.get("/personalized?limit=10");
};

export const getSong = () => {
  return http.get("/song/url/v1");
};

export const getListwithId = (id: string) => {
  return http.get(`/playlist/track/all?id=${id}`);
};

export const getSongListDetail = (id: number) => {
  return http.get(`/playlist/detail?id=${id}`);
};
