import { graphql } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';
import { axios } from 'helpers/axios';
import React from 'react';

import Achievements from 'components/pages/contributors/achievements';
import Hero from 'components/pages/contributors/hero';
import HowItWorks from 'components/pages/contributors/how-it-works/how-it-works';
import GetStarted from 'components/shared/get-started';
import Issues from 'components/shared/issues';
import Layout from 'components/shared/layout';
import Separator from 'components/shared/separator';

const ContributorsPage = ({
  data: { ogImage },
  serverData: {
    contributors: { list },
    issues,
  },
}) => {
  const SEO = {
    title: 'Novu - Contributors',
    description:
      'The ultimate library for managing multi-channel transactional notifications with a single API.',
    slug: '/contributors/',
    ogImage: getSrc(ogImage.childImageSharp),
  };

  return (
    <Layout seo={SEO}>
      <Hero />
      <Achievements list={list} />
      <HowItWorks />
      <Issues className="py-40 lg:py-32 md:py-20 sm:py-16" issues={issues} />
      <GetStarted />
      <Separator backgroundColor="black" />
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    ogImage: file(relativePath: { eq: "contributors/social-preview.jpg" }) {
      childImageSharp {
        gatsbyImageData(formats: [JPG], width: 1200, height: 630)
      }
    }
  }
`;

export default ContributorsPage;

export async function getServerData() {
  try {
    const contributors = await axios.get(`/contributors`);
    const issues = await axios.get(`/issues`);

    return {
      props: {
        contributors: contributors.data,
        issues: issues.data.issues,
      },
    };
  } catch (err) {
    console.log(err);
  }
}
