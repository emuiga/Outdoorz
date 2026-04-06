import createImageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "./client";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const imageBuilder = createImageUrlBuilder(sanityClient as any);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return imageBuilder.image(source);
}
