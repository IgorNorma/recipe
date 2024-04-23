import { ImageDataLike } from "gatsby-plugin-image"

export const getCorrectImage = (
  orientation: "desktop" | "mobile",
  gallery: { title: string; gatsbyImageData: ImageDataLike | undefined }[],
) => {
  return gallery.find(
    ({ title }) => title.split(" - ")[1].toLowerCase() === orientation,
  )
}
