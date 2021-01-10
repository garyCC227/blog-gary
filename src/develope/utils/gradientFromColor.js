const adjustColor = (color, adjust = 0) =>
  '#' +
  color
    .replace(/^#/, '')
    .replace(/../g, color =>
      (
        '0' +
        Math.min(255, Math.max(0, parseInt(color, 16) + adjust)).toString(16)
      ).substr(-2)
    )

export default color =>
  `linear-gradient(
		200deg,
		${color} 0%,
		${adjustColor(color, -30)} 100%
	)`
