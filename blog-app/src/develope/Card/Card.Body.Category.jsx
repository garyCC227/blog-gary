import React from 'react'
// import { Link } from 'gatsby'
import { Box, Badge } from 'theme-ui'
import { getReadableColor, buildResponsiveVariant as rv } from '../utils'

const styles = {
  badge: {
    mb: 3
  }
}

const CardBodyCategory = ({ variant, category, omitCategory }) =>
  !omitCategory && category && category.slug ? (
    <Box sx={{ variant: rv(variant, 'category') }}>
      <Box sx={styles.badge}>
        <Badge
          variant='tag'
          // as={Link}
          to={category.slug}
          sx={
            category.color && {
              bg: category.color,
              color: getReadableColor(category.color)
            }
          }
        >
          {category.name}
        </Badge>
      </Box>
    </Box>
  ) : null

export default CardBodyCategory
