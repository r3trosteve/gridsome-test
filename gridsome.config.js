// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Forge',
  icon: {
    favicon: './src/assets/favicon.png',
    touchicon: './src/assets/favicon.png'
  },
  siteUrl: (process.env.SITE_URL ? process.env.SITE_URL : 'https://docs.getforge.com'),
  settings: {
    web: process.env.URL_WEB || false,
    twitter: process.env.URL_TWITTER || false,
    github: process.env.URL_GITHUB || false,
    nav: {
      links: [
        { path: '/docs/', title: 'Docs' }
      ]
    },
    sidebar: [
      {
        name: 'docs',
        sections: [
          {
            title: 'Getting Started',
            items: [
              '/docs/',
              '/docs/installation/',
              '/docs/writing-content/',
              '/docs/deploying/',
            ]
          },
          {
            title: 'Deployments',
            items: [
              '/docs/deployments/',
              '/docs/deployments/troubleshooting/'
            ]
          },
          {
            title: 'Custom Domains',
            items: [
              '/docs/custom-domains/',
              '/docs/custom-domains/troubleshooting/',
              '/docs/custom-domains/namecheap/',
              '/docs/custom-domains/hover/'
            ]
          },
          {
            title: 'Forge Forms',
            items: [
              '/docs/forms/'
            ]
          },
          {
            title: 'Cloud Builds',
            items: [
              '/docs/cloud-builds/',
              '/docs/cloud-builds/webpack/',
              '/docs/cloud-builds/jekyll/',
              '/docs/cloud-builds/middleman/',
              '/docs/cloud-builds/hammer/'
            ]
          },
          {
            title: 'Webhooks',
            items: [
              '/docs/webhooks/'
            ]
          },
          {
            title: 'Forge CLI',
            items: [
              '/docs/cli/'
            ]
          },
          {
            title: 'Forge Server',
            items: [
              '/docs/forge-server/'
            ]
          },
          {
            title: 'TurboJS',
            items: [
              '/docs/turbojs/'
            ]
          },
          {
            title: 'Forge Apps',
            items: [
              '/docs/apps/'
            ]
          },
          {
            title: 'Configuration',
            items: [
              '/docs/settings/',
              '/docs/sidebar/',
            ]
          }
        ]
      }
    ]
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        baseDir: './content',
        path: '**/*.md',
        typeName: 'MarkdownPage',
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['noopener', 'noreferrer'],
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        }
      }
    },

    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {
          // Prevent purging of prism classes.
          whitelistPatternsChildren: [
            /token$/
          ]
        }
      }
    },

    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: (process.env.GA_ID ? process.env.GA_ID : 'XX-999999999-9')
      }
    },

    {
      use: '@gridsome/plugin-sitemap',
      options: {
      }
    }

  ]
}
