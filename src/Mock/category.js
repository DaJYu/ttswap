const Mock = require('mockjs');
export default [
    {
        url: '/category',
        type: 'get',
        response: () => {
            return {
                code: 20000,
                data: [
                    {
                        id: "home",
                        title: '首页',
                        href: '/'
                    },
                    {
                        id: "investment",
                        title: '投资',
                        href: '/investment',
                    },
                    {
                        id: "transaction",
                        title: '交易',
                        href: '/transaction'
                    },
                    {
                        id: "whitePaper",
                        title: '白皮书',
                        href: '/whitePaper'
                    },
                    {
                        id: "help",
                        title: '帮助',
                        href: '/help'
                    }
                ]
            }
        }
    }
]