const Mock = require('mockjs');
export default [
    // 站点信息
    {
        url: '/investment/tab',
        type: 'get',
        response: () => {
            return {
                code: 20000,
                data: [
                    {
                        id: 1,
                        name: 'ETH/BTC',
                        gmv: '200.000.00',
                        tr: '8,000.00',
                        roi: '40%'
                    },
                    {
                        id: 2,
                        name: 'ETH/NNC',
                        gmv: '200.000.00',
                        tr: '8,000.00',
                        roi: '40%'
                    },
                    {
                        id: 3,
                        name: 'ETH/USD',
                        gmv: '200.000.00',
                        tr: '8,000.00',
                        roi: '40%'
                    },
                    {
                        id: 4,
                        name: 'ETH/USC',
                        gmv: '200.000.00',
                        tr: '8,000.00',
                        roi: '40%'
                    }]
            }
        }
    },
    // 站点社交信息
    {
        url: '/transaction/tab',
        type: 'get',
        response: () => {
            return {
                code: 20000,
                data: [{
                        id: 1,
                        name: 'ETH/BTC',
                        zl: '200.000.00',
                        tl: '8,000.00',
                        syl: 0.4
                    },{
                        id: 2,
                        name: 'ETH/USD',
                        zl: '200.000.00',
                        tl: '8,000.00',
                        syl: -0.1
                    },{
                        id: 3,
                        name: 'ETH/USC',
                        zl: '200.000.00',
                        tl: '8,000.00',
                        syl: 0.2
                    },{
                        id: 4,
                        name: 'ETH/NDC',
                        zl: '200.000.00',
                        tl: '8,000.00',
                        syl: -0.0356
                    }
                ]
            }
        }
    }
]