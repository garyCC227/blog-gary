export default image => ({
  ...image,
  sizes: '',
  aspectRatio:
    image.aspectRatio ||
    (image.height && image.width && image.width / image.height)
})
