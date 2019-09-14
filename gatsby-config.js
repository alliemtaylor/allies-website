module.exports = {
  siteMetadata: {
    title: 'Design+Code 3',
    description: 'Complete courses about the best tools and design systems. Prototype and build apps with React and swift. 60 hours of video content and resource materials. No coding experience required.',
    keywords: 'react course, react for designers, ios development, sketsch app, swift app course, arkit2, after effects, create sketch plug in'
  },
  plugins: [
    'gatsby-plugin-react-helmet', 
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'jukr7hhqwo7a',
        accessToken: 'sV_PF63URCqBOfoRxRkmwu8O9HKuerqzkjD21TPxGBU'
      }
    }
  ],
}

