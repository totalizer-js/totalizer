module.exports = {
    title: 'Totalizer',
    description: 'JavaScript 动画迭代器引擎',
    themeConfig: {
        search: false,
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Document', link: '/document/' },
            { text: 'GitHub', link: 'https://github.com/Z8264/totalizer' },
        ],
        sidebar: {
            '/document/': [
                {
                    title: '指南',   // 必要的
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        '',
                        'Installation',
                        'Started',
                        'Property',
                        'Method'
                    ]
                },
                {
                    title: '进阶',   // 必要的
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        'Continuous',
                        'Staggering',
                        'SVG',
                        'Parallax'
                    ]
                },
            ]
        }
    },
}