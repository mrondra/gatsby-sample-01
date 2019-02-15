import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout2';

export default ({ data }) => (
    <Layout>
        <div>
            <h1>My Images</h1>
            <table>
                <thead>
                    <tr>
                        <th>relativePath</th>
                        <th>prettySize</th>
                        <th>extension</th>
                        <th>birthTime</th>
                    </tr>
                </thead>
                <tbody>
                    {data.allFile.edges.map(({ node }) => (
                        <tr key={node.id}>
                            <td>{node.relativePath}</td>
                            <td>{node.prettySize}</td>
                            <td>{node.extension}</td>
                            <td>{node.birthTime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </Layout>
);

export const query = graphql`
    query {
        allFile {
            totalCount
            edges {
                node {
                    id
                    relativePath
                    extension
                    prettySize
                    birthTime(fromNow: true)
                }
            }
        }
    }
`;
