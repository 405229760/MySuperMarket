import {
	request
} from './request.js'

export function getHomeBannersData() {
	return request({
		url: '/home/multidata'
	})
}

export function getHomeGoodsData(type, page) {
	return request({
		url: '/home/data',
		params: {
			//sell、pop、new
			type,
			page
		}
	})
}
