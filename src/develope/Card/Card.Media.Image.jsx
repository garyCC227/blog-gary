import React from 'react'
import Img from 'gatsby-image'
import { css } from 'theme-ui'
import { buildResponsiveVariant as rv, normalizeImage } from '../utils'

const CardMediaImage = ({ variant, loading, image }) => (
  <Img
    fluid={normalizeImage(image)}
    loading={loading}
    fadeIn={loading === 'lazy' ? true : false}
    css={css({
      height: `full`,
      bg: `omegaLighter`,
      variant: rv(variant, 'image')
    })}
  />
)
CardMediaImage.defaultProps = {
  loading: 'lazy'
}

export default CardMediaImage
