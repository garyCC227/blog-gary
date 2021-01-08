import React from 'react'
import SVG from 'react-inlinesvg'
import { Flex, Box, Text, css } from 'theme-ui'
import MemphisPattern from '@components/MemphisPattern'
import { getReadableColor, buildResponsiveVariant as rv } from '../utils'

const styles = {
  iconBox: color => ({
    bg: color || 'omegaDark',
    height: `full`
  }),
  iconAndText: color => ({
    flexDirection: `column`,
    justifyContent: `center`,
    alignItems: `center`,
    color: color ? getReadableColor(color) : `omegaLighter`,
    position: `relative`,
    height: `full`,
    zIndex: 2,
    px: 2,
    lineHeight: 1.33,
    svg: {
      pb: 2
    }
  }),
  pattern: {
    opacity: 0.07,
    borderRadius: `default`
  }
}

const CardMediaIcon = ({ variant, thumbnailText, category }) =>
  category && category.icon && category.name ? (
    <Box
      sx={{
        ...styles.iconBox(category.color),
        variant: rv(variant, 'iconBox')
      }}
    >
      <Flex sx={styles.iconAndText(category.color)}>
        <SVG src={category.icon} css={css({ variant: rv(variant, 'icon') })} />
        <Text sx={{ variant: rv(variant, 'iconText') }}>
          {thumbnailText || category.name}
        </Text>
      </Flex>
      <MemphisPattern sx={styles.pattern} />
    </Box>
  ) : null

export default CardMediaIcon
