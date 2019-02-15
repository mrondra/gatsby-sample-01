import React from 'react';
import PropTypes from 'prop-types';
import { Link, StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ListLink = props => (
    <li style={{ display: 'inline-block', marginRight: '1rem' }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
);

const Layout2 = ({ children }) => (
    <StaticQuery
        query={graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
                file(relativePath: { regex: "/gatsby-astronaut/" }) {
                    childImageSharp {
                        fluid(maxWidth: 1000) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `}
        render={data => (
            <div style={{ margin: '0 auto', maxWidth: '650px', padding: '0 1rem' }}>
                <header style={{ marginBottom: '1.5rem' }}>
                    <h3 style={{ display: 'inline' }}>{data.site.siteMetadata.title}</h3>
                    <ul style={{ listStyle: 'none', float: 'right' }}>
                        <ListLink to="/">Home</ListLink>
                        <ListLink to="/page-2">Page 2</ListLink>
                        <ListLink to="/info/about">About</ListLink>
                        <ListLink to="/blog">Blog</ListLink>
                    </ul>
                </header>
                {children}
                <Img fluid={data.file.childImageSharp.fluid} />
            </div>
        )}
    />
);

Layout2.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]).isRequired,
};

export default Layout2;
