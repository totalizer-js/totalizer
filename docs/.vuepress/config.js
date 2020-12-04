module.exports = {
    title: 'Totalizer JS',
    description: 'Just playing around',
    themeConfig: {
        search: false,
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Document', link: '/document/' },
            { text: 'GitHub', link: 'https://google.com' },
        ],
        sidebar: {
            '/document/': [
                '',
                'propertys',
                'methods'
            ],

        }
    },

}