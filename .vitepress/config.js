import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'UINeed Todo AE 文档',
  description: '专为AE设计师打造的待办事项扩展文档',
  
  // 基础配置
  base: '/Uiineed-Todo-List-For-AE/',
  lang: 'zh-CN',

  // SEO配置
  sitemap: {
    hostname: 'https://yancongya.github.io/Uiineed-Todo-List-For-AE'
  },

  // 网站图标和meta信息
  head: [
    ['link', { rel: 'icon', href: '/Uiineed-Todo-List-For-AE/img/favicon.png' }],
    ['link', { rel: 'shortcut icon', href: '/Uiineed-Todo-List-For-AE/img/favicon.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/Uiineed-Todo-List-For-AE/img/apple-touch-icon.png' }],
    ['meta', { name: 'theme-color', content: '#646cff' }],
    ['meta', { name: 'keywords', content: 'Adobe After Effects, AE扩展, 待办事项, Todo, 任务管理, 设计师工具, CEP扩展' }],
    ['meta', { name: 'author', content: '烟囱鸭' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'zh-CN' }],
    ['meta', { name: 'og:site_name', content: 'UINeed Todo AE 文档' }],
    ['meta', { name: 'og:title', content: 'UINeed Todo AE - 专为AE设计师打造的待办事项扩展' }],
    ['meta', { name: 'og:description', content: '专为Adobe After Effects设计师打造的待办事项扩展插件，支持流畅动效和本地数据存储，提升AE工作效率' }],
    ['meta', { name: 'og:image', content: 'https://yancongya.github.io/Uiineed-Todo-List-For-AE/img/sc/screenshot-main.jpg' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'UINeed Todo AE - 专为AE设计师打造的待办事项扩展' }],
    ['meta', { name: 'twitter:description', content: '专为Adobe After Effects设计师打造的待办事项扩展插件' }],
    ['script', { src: '/Uiineed-Todo-List-For-AE/js/about-panel.js' }]
  ],
  
  // 主题配置
  themeConfig: {
    // 网站标题和Logo
    siteTitle: 'UINeed Todo AE',
    logo: '/Uiineed-Todo-List-For-AE/img/logo.png',
    
    // 导航栏
    nav: [
      { text: '指南', link: '/guide/introduction' },
      { text: '功能特性', link: '/features/' },
      { text: '开发文档', link: '/development/' },
      { 
        text: '相关链接', 
        items: [
          { text: '在线演示', link: '/demo' },
          { text: 'GitHub', link: 'https://github.com/yancongya/Uiineed-Todo-List-For-AE' },
          { text: '扩展源码', link: 'https://github.com/yancongya/Uiineed-Todo-List-For-AE-Extension' },
          { text: '问题反馈', link: 'https://github.com/yancongya/Uiineed-Todo-List-For-AE/issues' }
        ]
      }
    ],
    
    // 侧边栏
    sidebar: {
      '/guide/': [
        {
          text: '开始使用',
          items: [
            { text: '项目介绍', link: '/guide/introduction' },
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '安装教程', link: '/guide/installation' },
            { text: '使用教程', link: '/guide/tutorial' },
            { text: '常见问题', link: '/guide/faq' }
          ]
        }
      ],
      '/features/': [
        {
          text: '功能特性',
          items: [
            { text: '功能概览', link: '/features/' }
          ]
        }
      ],
      '/development/': [
        {
          text: '开发文档',
          items: [
            { text: '开发指南', link: '/development/' }
          ]
        }
      ]
    },
    
    // 社交链接
    socialLinks: [
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>'
        },
        link: 'javascript:void(0)',
        ariaLabel: '关于我'
      }
    ],
    
    // 页脚
    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright © 2024-2025 UINeed Todo AE'
    },
    
    // 搜索
    search: {
      provider: 'local'
    },
    
    // 编辑链接
    editLink: {
      pattern: 'https://github.com/yancongya/Uiineed-Todo-List-For-AE/edit/main/:path',
      text: '在 GitHub 上编辑此页'
    },
    
    // 最后更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    }
  },
  

  
  // 构建配置
  outDir: './.vitepress/dist',
  cacheDir: './.vitepress/cache',

  // 排除public/demo目录和README文件，但允许处理demo/index.md
  srcExclude: ['**/public/demo/**', 'README.md', 'README.en.md'],

  // 忽略死链接检查，因为demo目录在public下会自动复制
  ignoreDeadLinks: [
    '/demo',
    '/demo/',
    /^\/demo\//
  ],
  
  // Markdown配置
  markdown: {
    lineNumbers: true,
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  },

  // Vite配置
  vite: {
    server: {
      middlewareMode: false,
      // 添加中间件来处理/demo路由
      configureServer(server) {
        server.middlewares.use('/demo', (req, res, next) => {
          // 如果请求的是/demo（不带斜杠），重定向到/demo/index.html
          if (req.url === '/demo' || req.url === '/demo/') {
            res.writeHead(302, { 'Location': '/demo/index.html' });
            res.end();
            return;
          }
          next();
        });
      }
    }
  }
})
