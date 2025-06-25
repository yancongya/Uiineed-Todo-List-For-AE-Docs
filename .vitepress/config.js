import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'UINeed Todo AE 文档',
  description: '专为AE设计师打造的待办事项扩展文档',
  
  // 基础配置
  base: '/',
  lang: 'zh-CN',
  
  // 主题配置
  themeConfig: {
    // 网站标题和Logo
    siteTitle: 'UINeed Todo AE',
    logo: '/logo.png',
    
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
      { icon: 'github', link: 'https://github.com/yancongya/Uiineed-Todo-List-For-AE' }
    ],
    
    // 页脚
    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright © 2024 UINeed Todo AE'
    },
    
    // 搜索
    search: {
      provider: 'local'
    },
    
    // 编辑链接
    editLink: {
      pattern: 'https://github.com/yancongya/Uiineed-Todo-List-For-AE-Docs/edit/main/:path',
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
  
  // Head配置
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
    ['meta', { name: 'theme-color', content: '#646cff' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'zh-CN' }],
    ['meta', { name: 'og:site_name', content: 'UINeed Todo AE 文档' }],
    ['meta', { name: 'og:image', content: 'https://docs.xn--jcs561df75a.space/screenshot-main.jpg' }]
  ],
  
  // 构建配置
  outDir: '../dist',
  cacheDir: './.vitepress/cache',

  // 重定向配置
  rewrites: {
    'index.html': 'demo/redirect.html?to=%2Fdemo%2F'
  },
  
  // Markdown配置
  markdown: {
    lineNumbers: true,
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  }
})
