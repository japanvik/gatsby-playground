import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"


class ArticleCard extends React.Component {
    render() {
        const node = this.props.node
        const title = node.frontmatter.title || node.fields.slug
        return (
        <article key={node.fields.slug}>
            <header>
                <span className="date">{node.frontmatter.date}</span>
                <h2><Link to={node.fields.slug}>{title}</Link></h2>
            </header>
            <Link to={node.fields.slug} className="image fit">
                <Img fixed={node.frontmatter.featuredImage.childImageSharp.fixed}
                    objectFit="cover"
                    objectPosition="50% 50%"
                />
            </Link>
            <p
            dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
            }}
            />
            <ul className="actions special">
                <li><Link className="button large" to={node.fields.slug}>Full Story</Link></li>
            </ul>
        </article>
        )
    }
}

export default ArticleCard

