import React from 'react'
// import { Link as GLink } from 'gatsby'
import { Text, Link } from 'theme-ui'
import { buildResponsiveVariant as rv } from '../utils'

const styles = {
  author: {
    // pr: [3, 5],
    pr: 2
  }
}

const CardFooterAuthorName = ({ variant, omitAuthor, author }) =>
  !omitAuthor && author && author.slug ? (
    <Text sx={{ ...styles.author, variant: rv(variant, 'author') }}>
      <Link variant='mute' 
      // as={GLink} 
      to={author.slug}>
        <strong>{author.name}</strong>
      </Link>
    </Text>
  ) : null

export default CardFooterAuthorName
