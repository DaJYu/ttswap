const Mock = require('mockjs');
export default [{
	url: '/currency',
	type: 'get',
	response: () => {
		return {
			code: 20000,
			data: [{
				name: "USDT"
			}, {
				name: "USDD"
			}, {
				name: "BTC"
			}, {
				name: "ETH"
			}, {
				name: "HUSD"
			}, {
				name: "HT"
			}, {
				name: "USDC"
			}, {
				name: "FIAT"
			}]
		}
	}
}]
