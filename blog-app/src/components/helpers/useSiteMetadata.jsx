import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadata = () => {
  const { site } = useStaticQuery(siteMetadataQuery)
  return site.siteMetadata
}

const siteMetadataQuery = graphql`
  query SiteMetadataQuery {
    site {
      ...SiteMetadata
    }
  }
`
export default useSiteMetadata
