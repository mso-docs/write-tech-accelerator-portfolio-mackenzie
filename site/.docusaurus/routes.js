import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/about',
    component: ComponentCreator('/about', 'c49'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/portfolio',
    component: ComponentCreator('/portfolio', 'b94'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '353'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '9bd'),
        routes: [
          {
            path: '/docs/tags',
            component: ComponentCreator('/docs/tags', 'fce'),
            exact: true
          },
          {
            path: '/docs/tags/airflow',
            component: ComponentCreator('/docs/tags/airflow', '33f'),
            exact: true
          },
          {
            path: '/docs/tags/astro',
            component: ComponentCreator('/docs/tags/astro', '597'),
            exact: true
          },
          {
            path: '/docs/tags/astronomer',
            component: ComponentCreator('/docs/tags/astronomer', 'bd3'),
            exact: true
          },
          {
            path: '/docs/tags/audit',
            component: ComponentCreator('/docs/tags/audit', 'c6e'),
            exact: true
          },
          {
            path: '/docs/tags/documentation',
            component: ComponentCreator('/docs/tags/documentation', 'a92'),
            exact: true
          },
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'b1b'),
            routes: [
              {
                path: '/docs/documentation-tooling/',
                component: ComponentCreator('/docs/documentation-tooling/', '9c8'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/docs/documentation-tooling/astronomer-documentation-audit',
                component: ComponentCreator('/docs/documentation-tooling/astronomer-documentation-audit', 'fe9'),
                exact: true
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '416'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/tutorial-basics/congratulations', '70e'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '70e'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/tutorial-basics/create-a-document', 'c64'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/tutorial-basics/create-a-page', '9f6'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', '3cd'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/tutorial-basics/markdown-features', '116'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', 'a34'),
                exact: true
              },
              {
                path: '/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/tutorial-extras/translate-your-site', '739'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
