import { getLuminance } from 'polished'

export default bgColor => {
  const light = `rgba(255,255,255,0.9)`
  const dark = `rgba(0,0,0,0.4)`

  if (!bgColor) return `rgba(255,255,255,0.9)`

  const colorLuminance = getLuminance(bgColor)

  return colorLuminance >= 0.7 ? dark : light
}
