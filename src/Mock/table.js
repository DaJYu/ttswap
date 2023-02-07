const Mock = require('mockjs');
export default [
	// 热币榜
	{
		url: '/table/hotCoin',
		type: 'get',
		response: () => {
			return {
				code: 20000,
				data: [{
					pair: 'BTC',
					last_price: '21214.98',
					cgabge: '-0.43%',
					high: '21358.04',
					low: '20769.00',
					day_vol: '6872.26',
					day_turnover: '$ 1.45亿'
				}, {
					pair: 'ETH',
					last_price: '21214.98',
					cgabge: '-0.43%',
					high: '21358.04',
					low: '20769.00',
					day_vol: '6872.26',
					day_turnover: '$ 1.45亿'
				}, {
					pair: 'HT',
					last_price: '21214.98',
					cgabge: '-0.43%',
					high: '21358.04',
					low: '20769.00',
					day_vol: '6872.26',
					day_turnover: '$ 1.45亿'
				}, {
					pair: 'DOT',
					last_price: '21214.98',
					cgabge: '-0.43%',
					high: '21358.04',
					low: '20769.00',
					day_vol: '6872.26',
					day_turnover: '$ 1.45亿'
				}]
			}
		}
	},
	// 新币榜
	{
		url: '/table/newCoin',
		type: 'get',
		response: () => {
			return {
				code: 20000,
				data: [{
						header: [{
							id: 'address_notes',
							name: '名称'
						}, {
							id: 'last_price',
							name: '最新价'
						}, {
							id: 'cgabge',
							name: '涨跌幅'
						}, ]
					},
					{
						cont: [{
							address_notes: 'BTC',
							last_price: '$21214.98',
							cgabge: '-0.43%',
						}, {
							address_notes: 'ETH',
							last_price: '$21214.98',
							cgabge: '-0.43%'
						}, {
							address_notes: 'HT',
							last_price: '$21214.98',
							cgabge: '-0.43%'
						}, {
							address_notes: 'DOT',
							last_price: '$21214.98',
							cgabge: '-0.43%'
						}]
					}
				]
			}
		}
	},
	// 成交额榜
	{
		url: '/table/turnover',
		type: 'get',
		response: () => {
			return {
				code: 20000,
				data: [{
						header: [{
							id: 'address_notes',
							name: '名称'
						}, {
							id: 'last_price',
							name: '最新价'
						}, {
							id: 'TotalDayVol',
							name: '24H总成交额'
						}]
					},
					{
						cont: [{
							address_notes: 'BTC',
							last_price: '$21214.98',
							TotalDayVol: '$1.26亿',
						}, {
							address_notes: 'ETH',
							last_price: '$21214.98',
							TotalDayVol: '$1.07亿'
						}, {
							address_notes: 'HT',
							last_price: '$21214.98',
							TotalDayVol: '$1336.5万'
						}, {
							address_notes: 'DOT',
							last_price: '$21214.98',
							TotalDayVol: '$789.35万'
						}]
					}
				]
			}
		}
	},
	// 热门合约榜
	{
		url: '/table/contracts',
		type: 'get',
		response: () => {
			return {
				code: 20000,
				data: [{
						header: [{
							id: 'futures',
							name: '合约'
						}, {
							id: 'lastPrice',
							name: '最新价'
						}, {
							id: 'cgabge',
							name: '涨幅'
						}, {
							id: 'high',
							name: '最高价'
						}, {
							id: 'low',
							name: '最低价'
						}, {
							id: 'openInterest',
							name: '持仓量'
						}, {
							id: 'dayVol',
							name: '24H量'
						}, {
							id: 'dayTurnover',
							name: '24H成交额'
						}]
					},
					{
						cont: [{
							futures: 'BTC/USDT当周0826',
							lastPrice: ' $21214.98',
							cgabge: '-0.43%',
							high: '21358.04',
							low: '20769.00',
							openInterest: '6872.26',
							dayVol: '6872.26',
							dayTurnover: '$ 1.45亿'
						}, {
							futures: 'BTC/USDT当周0826',
							lastPrice: ' $21214.98',
							cgabge: '-0.43%',
							high: '21358.04',
							low: '20769.00',
							openInterest: '6872.26',
							dayVol: '6872.26',
							dayTurnover: '$ 1.45亿'
						}, {
							futures: 'BTC/USDT当周0826',
							lastPrice: ' $21214.98',
							cgabge: '-0.43%',
							high: '21358.04',
							low: '20769.00',
							openInterest: '6872.26',
							dayVol: '6872.26',
							dayTurnover: '$ 1.45亿'
						}, {
							futures: 'BTC/USDT当周0826',
							lastPrice: ' $21214.98',
							cgabge: '-0.43%',
							high: '21358.04',
							low: '20769.00',
							openInterest: '6872.26',
							dayVol: '6872.26',
							dayTurnover: '$ 1.45亿'
						}, {
							futures: 'BTC/USDT当周0826',
							lastPrice: ' $21214.98',
							cgabge: '-0.43%',
							high: '21358.04',
							low: '20769.00',
							openInterest: '6872.26',
							dayVol: '6872.26',
							dayTurnover: '$ 1.45亿'
						}]
					}
				]
			}
		}
	},
	// 日涨幅榜
	{
		url: '/table/cgabge',
		type: 'get',
		response: () => {
			return {
				code: 20000,
				data: [{
						header: [{
							id: 'pair',
							name: '交易对'
						}, {
							id: 'last_price',
							name: '最新价'
						}, {
							id: 'cgabge',
							name: '涨跌幅'
						}, ]
					},
					{
						cont: [{
							pair: 'BTC',
							last_price: '$21214.98',
							cgabge: '-0.43%',
						}, {
							pair: 'ETH',
							last_price: '$21214.98',
							cgabge: '-0.43%'
						}, {
							pair: 'HT',
							last_price: '$21214.98',
							cgabge: '-0.43%'
						}, {
							pair: 'DOT',
							last_price: '$21214.98',
							cgabge: '-0.43%'
						}]
					}
				]
			}
		}
	},
	// 交易币对记录
	{
		url: '/table/swapCion',
		type: 'get',
		response: () => {
			return {
				code: 20000,
				data: [{
						header: [{
							id: 'pair',
							name: '交易对'
						}, {
							id: 'sum_price',
							name: '总价值'
						}, {
							id: 'cion1',
							name: '代币数量'
						}, {
							id: 'cion2',
							name: '代币数量'
						}, {
							id: 'users',
							name: '账户'
						}, {
							id: 'times',
							name: '时间'
						}]
					},
					{
						cont: [{
							pair: 'DOT/USDT',
							sum_price: '$214.98',
							cion1: '100DOT',
							cion2: '214.98USDT',
							users: '0d0asr...534as',
							times: '1分钟前'
						}, {
							pair: 'ETH/USDT',
							sum_price: '$3050.35',
							cion1: '2ETH',
							cion2: '3050.35USDT',
							users: '0d0asr...534as',
							times: '1分钟前'
						}, {
							pair: 'DOT/USDT',
							sum_price: '$214.98',
							cion1: '100DOT',
							cion2: '214.98USDT',
							users: '0d0asr...534as',
							times: '5分钟前'
						}, {
							pair: 'DOT/USDT',
							sum_price: '$214.98',
							cion1: '100DOT',
							cion2: '214.98USDT',
							users: '0d0asr...534as',
							times: '5分钟前'
						}]
					}
				]
			}
		}
	},
	// 交易币对记录
	{
		url: '/table/business',
		type: 'get',
		response: () => {
			return {
				code: 20000,
				data: [{
						header: [{
							id: 'pair',
							name: '交易情况'
						}, {
							id: 'sum_price',
							name: '价值'
						}, {
							id: 'cion1',
							name: '代币数量'
						}, {
							id: 'users',
							name: '账户'
						}, {
							id: 'times',
							name: '时间'
						}]
					},
					{
						cont: [{
							pair: '买入',
							sum_price: '$214.98',
							cion1: '100DOT',
							users: '0d0asr...534as',
							times: '1分钟前'
						}, {
							pair: '卖出',
							sum_price: '$3050.35',
							cion1: '2ETH',
							users: '0d0asr...534as',
							times: '1分钟前'
						}, {
							pair: '买入',
							sum_price: '$214.98',
							cion1: '100DOT',
							users: '0d0asr...534as',
							times: '5分钟前'
						}, {
							pair: '卖出',
							sum_price: '$214.98',
							cion1: '100DOT',
							users: '0d0asr...534as',
							times: '5分钟前'
						}]
					}
				]
			}
		}
	},
	// 交易对
	{
		url: '/investment/investment-pool',
		type: 'get',
		response: () => {
			return {
				code: 20000,
				data: [{
						header: [{
							id: 'pair',
							name: '交易情况'
						}, {
							id: 'sum_price',
							name: '价值'
						}, {
							id: 'cion1',
							name: '代币数量'
						}, {
							id: 'users',
							name: '账户'
						}, {
							id: 'times',
							name: '时间'
						}]
					},
					{
						cont: [{
							pair: '买入',
							sum_price: '$214.98',
							cion1: '100DOT',
							users: '0d0asr...534as',
							times: '1分钟前'
						}, {
							pair: '卖出',
							sum_price: '$3050.35',
							cion1: '2ETH',
							users: '0d0asr...534as',
							times: '1分钟前'
						}, {
							pair: '买入',
							sum_price: '$214.98',
							cion1: '100DOT',
							users: '0d0asr...534as',
							times: '5分钟前'
						}, {
							pair: '卖出',
							sum_price: '$214.98',
							cion1: '100DOT',
							users: '0d0asr...534as',
							times: '5分钟前'
						}]
					}
				]
			}
		}
	},
	// 交易详情交易量
	{
		url: '/transaction/transaction-volume',
		type: 'get',
		response: () => {
			return {
				code: 20000,
				data: [{
					mr: [{
						jg:1902.2,
						sl:0.325,
						lj:6.235
					},{
						jg:1902.2,
						sl:0.325,
						lj:6.235
					},{
						jg:1902.2,
						sl:0.325,
						lj:6.235
					},{
						jg:1902.2,
						sl:0.325,
						lj:6.235
					},{
						jg:1902.2,
						sl:0.325,
						lj:6.235
					},{
						jg:1902.2,
						sl:0.325,
						lj:6.235
					},{
						jg:1902.2,
						sl:0.325,
						lj:6.235
					},{
						jg:1902.2,
						sl:0.325,
						lj:6.235
					},{
						jg:1902.2,
						sl:0.325,
						lj:6.235
					},{
						jg:1902.2,
						sl:0.325,
						lj:6.235
					}],
					mc:[{
						jg:1902.2,
						sl:0.325,
						lj:6.235
					},{
						jg:1902.2,
						sl:0.325,
						lj:6.235
					},{
						jg:1902.2,
						sl:0.325,
						lj:6.235
					},{
						jg:1902.2,
						sl:0.325,
						lj:6.235
					},{
						jg:1902.2,
						sl:0.325,
						lj:6.235
					},{
						jg:1902.2,
						sl:0.325,
						lj:6.235
					},{
						jg:1902.2,
						sl:0.325,
						lj:6.235
					},{
						jg:1902.2,
						sl:0.325,
						lj:6.235
					},{
						jg:1902.2,
						sl:0.325,
						lj:6.235
					},{
						jg:1902.2,
						sl:0.325,
						lj:6.235
					}]
				}]
			}
		}
	}
]
