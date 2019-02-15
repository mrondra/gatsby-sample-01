import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../../components/Layout2';
import Greeting from '../../components/greeting';

import gatsbyAstronaut from '../../images/gatsby-astronaut.png';

const Headline = styled.h1`
    color: #f00;
`;

const About = ({ data }) => (
    <Layout>
        <Headline>About page</Headline>
        <p>Lorem ipsum</p>
        <Greeting greeting="Hi" name={data.site.siteMetadata.author} />
        <img src={gatsbyAstronaut} alt="Gatsby astronaut" />
        <Link to="/">Back Home</Link>
    </Layout>
);

export const query = graphql`
    query {
        site {
            siteMetadata {
                author
            }
        }
    }
`;

export default About;
