import React from 'react'
// import { Link as GLink } from 'gatsby'
import { Link, Box, useThemeUI, get } from 'theme-ui'
import { buildResponsiveVariant as rv } from '../utils'
import CardMediaIcon from './Card.Media.Icon'
import CardMediaImage from './Card.Media.Image'

const DEFAULT_IMAGE_VARIANT = 'vertical'

const styles = {
  link: {
    userSelect: `none`,
    textAlign: `center`,
    position: `relative`,
    display: `block`,
    height: `full`
  }
}

const CardMedia = ({
  imageVariant,
  omitMedia,
  mediaType,
  title,
  slug,
  link,
  ...props
}) => {
  const context = useThemeUI()

  if (omitMedia) return null

  const { variant, thumbnail, thumbnailText } = props

  const imageVar =
    imageVariant ||
    get(context.theme, rv(variant, 'imageVariant')[0]) ||
    DEFAULT_IMAGE_VARIANT

  const image = thumbnail && thumbnail[imageVar]

  const linkProps = link
    ? {
        as: 'a',
        href: link,
        target: '_blank',
        rel: 'noopener noreferrer'
      }
    : {
        // as: GLink,
        to: slug
      }

  return (
    <Box sx={{ variant: rv(variant, 'media') }}>
      <Link {...linkProps} sx={styles.link} aria-label={title}>
        {mediaType === 'image' && image && (
          <CardMediaImage image={image} {...props} />
        )}
        {(mediaType === 'icon' || (!image && thumbnailText)) && (
          <CardMediaIcon {...props} />
        )}
        {/* {featured && (
				<Badge variant="featured">
					<FaStar />
				</Badge>
			)} */}
      </Link>
    </Box>
  )
}

CardMedia.defaultProps = {
  mediaType: 'image'
}

export default CardMedia
