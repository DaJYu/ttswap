import request from '@/utils/request'

export function fetchList(params) {
	return request({
		url: '/post/list',
		method: 'get',
		params: params
	})
}

export function fetchFocus() {
	return request({
		url: '/focus/list',
		method: 'get',
		params: {}
	})
}

export function fetchCategory() {
	return request({
		url: '/category',
		method: 'get',
		params: {}
	})
}

export function fetchFriend() {
	return request({
		url: '/friend',
		method: 'get',
		params: {}
	})
}

export function fetchSocial() {
	return request({
		url: '/social',
		method: 'get',
		params: {}
	});
}

export function fetchSiteInfo() {
	return request({
		url: '/site',
		method: 'get',
		params: {}
	})
}

export function fetchComment() {
	return request({
		url: '/comment',
		method: 'get',
		params: {}
	})
}

//请求mock的数据
export function getMinute_k() {
	return request({
		url: "/kline/minute_k",
		method: "post",
		params: {}
	})
	// return new Promise((resolve,reject)=>{
	//     instance({
	//         url: "/kline/minute_k",
	//         method: "post"
	//     }).then(response=>{
	//         resolve(response.data)
	//     }).catch(err=>{
	//         reject(err)
	//     })
// })
}

//默认数据
export function getMarket() {
	return request({
		url: "/kline/market",
		method: "post",
		params: {}
	})
	// return new Promise((resolve,reject)=>{
	//     instance({
	//         url: "/kline/market",
	//         method: "post"
	//     }).then(response=>{
	//         resolve(response.data)
	//     }).catch(err=>{
	//         reject(err)
	//     })
	// })
}

//日k
export function getDay_k() {
	return request({
		url: "/kline/day_k",
		method: "get",
		params: {}
	})
	// return new Promise((resolve,reject)=>{
	//     instance({
	//         url: "/kline/day_k",
	//         method: "get"
	//     }).then(response=>{
	//         resolve(response.data)
	//     }).catch(err=>{
	//         reject(err)
	//     })
	// })
}

//周k
export function getWeek_k() {
	return request({
		url: "/kline/week_k",
		method: "get",
		params: {}
	})
	// return new Promise((resolve,reject)=>{
	//     instance({
	//         url: "/kline/week_k",
	//         method: "get"
	//     }).then(response=>{
	//         resolve(response.data)
	//     }).catch(err=>{
	//         reject(err)
	//     })
	// })
}

//月k
export function getMonth_k() {
	return request({
		url: "/kline/month_k",
		method: "get",
		params: {}
	})
	// return new Promise((resolve,reject)=>{
	//     instance({
	//         url: "/kline/month_k",
	//         method: "get"
	//     }).then(response=>{
	//         resolve(response.data)
	//     }).catch(err=>{
	//         reject(err)
	//     })
	// })
}
