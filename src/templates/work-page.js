import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'
import WorkTemplate from '../components/WorkTemplate'
import SE0 from '../components/SEO'
import Layout from '../components/Layout'

const WorkPage = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <section className='section'>
        <SE0
          title={post.frontmatter.title}
          meta_title={post.frontmatter.meta_title}
          meta_desc={post.frontmatter.meta_description}
          cover={post.frontmatter.cover}
          slug={post.fields.slug}
          date={post.frontmatter.date}
        />
        <div className='container content'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <WorkTemplate
                content={post.html}
                contentComponent={HTMLContent}
                cover={post.frontmatter.cover}
                meta_title={post.frontmatter.meta_title}
                meta_desc={post.frontmatter.meta_description}
                tags={post.frontmatter.tags}
                title={post.frontmatter.title}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

WorkPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default WorkPage

export const pageQuery = graphql`
  query WorkByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
            slug
          }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        cover
        meta_title
        meta_description
        tags
      }
    }
  }
`
