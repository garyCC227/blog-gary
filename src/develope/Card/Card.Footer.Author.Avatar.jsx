import React from 'react'
// import { Link as GLink } from 'gatsby'
import { Link, useThemeUI, get } from 'theme-ui'
import Avatar from '@components/Avatar'
import { buildResponsiveVariant as rv } from '../utils'

const authorImageSize = 48

const CardFooterAuthorAvatar = ({ variant, omitAuthor, author }) => {
  const context = useThemeUI()

  if (omitAuthor) return null

  const responsiveVariant = rv(variant, 'authorPhoto')

  const visibility = responsiveVariant.reduce(
    (mobileVisibility, variant) =>
      mobileVisibility === false &&
      get(context.theme, variant, {}).display === 'none'
        ? false
        : true,
    false
  )

  return visibility ? (
    author && author.thumbnail ? (
      <Link
        // as={GLink}
        to={author.slug}
        aria-label={author.name}
        sx={{ variant: responsiveVariant }}
      >
        <Avatar avatar={author.thumbnail} width={authorImageSize} simple />
      </Link>
    ) : null
  ) : null
}
export default CardFooterAuthorAvatar
