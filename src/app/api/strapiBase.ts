export const API_URL =
  (process.env.NEXT_PUBLIC_STRAPI_URL ?? "http://localhost:1337/") + "api";
export const BASE_URL = API_URL.replace("/api", "");

export function getImageUrl(foto: any, placeholder = "/placeholder.jpg"): string {
  const imageData = foto?.data?.attributes || foto?.attributes || foto;
  if (!imageData?.url) return placeholder;
  return imageData.url.startsWith("http")
    ? imageData.url
    : `${BASE_URL}${imageData.url}`;
}
