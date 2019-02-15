import React from 'react';
import { graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Layout from '../../components/Layout2';

const Headline = styled.h1`
    display: inline-block;
    color: cornflowerblue;
`;

export default ({ data }) => (
    <Layout>
        <div>
            <Helmet>
                <meta charset="UTF-8" />
                <title>My Blog Posts Overview</title>
                <meta name="description" content="Free Web Tutorials" />
                <meta name="keywords" content="React, Gatsby, Javascript" />
                <meta name="author" content="Ondřej Zeman" />
            </Helmet>
            <Headline>My Blog Posts</Headline>
            <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <div key={node.id}>
                    <hr />
                    <Link to={node.fields.slug} style={{ textDecoration: 'none' }}>
                        <h3>{node.frontmatter.title}</h3>
                        <p>{node.frontmatter.date}</p>
                        <p>{node.exceprt}</p>
                    </Link>
                </div>
            ))}
        </div>
    </Layout>
);

export const query = graphql`
    query {
        allMarkdownRemark {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date
                    }
                    excerpt
                    fields {
                        slug
                    }
                }
            }
        }
    }
`;
