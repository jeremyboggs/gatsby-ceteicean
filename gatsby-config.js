// const {applyxslt} = require('./scripts/applyxslt')

module.exports = {
  pathPrefix: `/gatsby-ceteicean`,
  siteMetadata: {
    title: `Gatsby CETEIcean Workshop`,
    siteUrl: `https://jeremyboggs.github.io/gatsby-ceteicean/`,
    menuLinks: [
      {
        name: "Home",
        link: "/"
      },
      {
        name: "About",
        link: "/about"
      }
    ]
  },
  plugins: [
    // `gatsby-theme-ceteicean`, // USE THIS FOR SIMPLE USE CASES (TEI ONLY).
    // Use with additional namespaces:
    {
      resolve: `gatsby-theme-ceteicean`,
      options: {
        namespaces: {
          "http://www.tei-c.org/ns/1.0": "tei",
          "http://www.tei-c.org/ns/Examples": "teieg",
          "http://www.w3.org/2001/XInclude": "xi",
          "http://docbook.org/ns/docbook": "db",
          "http://www.w3.org/1999/xlink": "xlink",
          "http://www.digitalhumanities.org/ns/dhq": "dhq",
          "http://web.resource.org/cc/": "cc",
          "http://www.w3.org/1999/02/22-rdf-syntax-ns#": "rdf"

        }
      }
    },
    // ADVANCED USE EXAMPLE BELOW:
    // {
    //   resolve: `gatsby-theme-ceteicean`,
    //   options: {
    //     applyBefore: [(obj) => applyxslt(obj, "notenumbers.sef.json")],
    //     applyAfter: [],
    //     namespaces: {
    //       "http://www.tei-c.org/ns/1.0": "tei",
    //       "http://www.tei-c.org/ns/Examples": "teieg",
    //       "http://www.w3.org/2001/XInclude": "xi",
    //       "http://docbook.org/ns/docbook": "db",
    //       "http://www.w3.org/1999/xlink": "xlink",
    //     }
    //   }
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `static/tei`,
      },
    },
  ],
}
