export const getSlug = (title: string) => {
  return title.toLowerCase().split(" ").join("-")
}
