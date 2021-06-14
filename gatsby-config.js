/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Jayaraj J`,
    author: `Jayaraj J`,
    firstName: `Jayaraj`,
    lastName: `J`,
    description: `Jayaraj's personal site`,
    occupation: `Developer`,
    keywords: [
      `Jayaraj`,
      `J`,
      `Personal`,
      `Blog`,
      `Resume`,
      `Projects`,
      `Work`,
      "Jayaraj J",
      "jayaraj",
      "jyrj",
    ],
    siteUrl:
      process.env.URL || process.env.DEPLOY_URL || `http://localhost:8000`,
    unemployed: true,
    designations: [
      `Learn and build new stuffs`,
      `Hacker and maker`,
      `Volunteering to make a difference `,
      `FOSS Enthusiast`,
    ],
    readingList: [
      {
        title: `Rich Dad, Poor Dad`,
        author: `Robert T. Kiyosaki, Sharon Lechter`,
        link: `https://www.goodreads.com/book/show/69571.Rich_Dad_Poor_Dad`,
      },
      {
        title: `Wings of Fire: An Autobiography`,
        author: `A.P.J. Abdul Kalam`,
        link: `https://www.goodreads.com/book/show/634583.Wings_of_Fire`,
      },
      {
        title: `Think Like a Monk: Train Your Mind for Peace and Purpose Every Day`,
        author: `Jay Shetty`,
        link: `https://www.goodreads.com/book/show/51942513-think-like-a-monk`,
      },
    ],
    showsList: [
      {
        title: `Silicon Valley`,
        author: `John Altschuler, Mike Judge, Dave Krinsky`,
        link: `https://www.imdb.com/title/tt2575988/`,
      },
      {
        title: `The Big Bang Theory`,
        author: `Chuck Lorre, Bill Prady`,
        link: `https://www.imdb.com/title/tt0898266/`,
      },
      {
        title: `Family Guy`,
        author: `Seth MacFarlane, David Zuckerman`,
        link: `https://www.imdb.com/title/tt0182576/`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-preload-link-crossorigin`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 500,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jayaraj J's Personal Site`,
        short_name: `Jayaraj.J`,
        description: `This is my personal site.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `${__dirname}/static/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Raleway:300,400"],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
        showSpinner: true,
      },
    },
    {
      resolve: "gatsby-source-hashnode-devblog",
      options: {
        username: "jyrj", // Your username on hashnode without `@`.
      },
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: "devblogPost", // Created Node type name
        imagePath: "coverImage", // The image url name in test node type
      },
    },
  ],
}
