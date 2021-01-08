import React from 'react'
import { Flex, Box } from 'theme-ui'
import { buildResponsiveVariant as rv } from '../utils'
// import AuthorAvatar from './Card.Footer.Author.Avatar'
import AuthorName from './Card.Footer.Author.Name'
// import Info from './Card.Footer.Info'

const styles = {
  wrapper: {
    alignItems: `center`
  },
  postInfo: {
    flex: 1,
    flexWrap: `wrap`,
    justifyContent: `space-between`,
    color: `omega`
  }
}

const CardFooter = ({ omitFooter, ...props }) =>
  !omitFooter && (
    <Box sx={{ variant: rv(props.variant, 'footer') }}>
      <Flex sx={styles.wrapper}>
        {/* <AuthorAvatar {...props} /> */}
        <Flex sx={styles.postInfo}>
          <AuthorName {...props} />
          {/* <Info {...props} /> */}
        </Flex>
      </Flex>
    </Box>
  )
export default CardFooter
