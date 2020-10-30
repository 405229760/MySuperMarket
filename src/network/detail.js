import {
	request
} from './request.js'

export function getDetailGoodsInfo(iid) {
	return request({
		url: '/detail',
		params: {
			iid,
		}
	})
}

export function getRecommend() {
	return request({
		url: '/recommend'
	})
}

export class Goods {
	constructor(itemInfo, columns, services) {
		this.title = itemInfo.title;
		this.nowPrice = itemInfo.lowNowPrice;
		this.oldPrice = itemInfo.oldPrice;
		this.discountDesc = itemInfo.discountDesc;
		this.discountBgColor = itemInfo.discountBgColor;
		this.columns = columns;
		this.services = services;
		// 加入购物车时使用
		this.desc = itemInfo.desc;
	}
}

export class Shop {
	constructor(shopInfo) {
		this.logo = shopInfo.shopLogo;
		this.name = shopInfo.name;
		this.fans = shopInfo.cFans;
		this.sells = shopInfo.cSells;
		this.score = shopInfo.score;
		this.goodsCount = shopInfo.cGoods;

	}
}

export class GoodsParam {
	constructor(info, rule) {
		// images可能没有值
		// this.images = info.images ? info.images[0] : '';
		this.infos = info.set;
		this.sizes = rule.tables[0];
	}
}

export class GoodsComment {
	constructor(rate) {
		// 注意可能没有评论，需要判断一下
		this.commentNum = rate.cRate;
		this.userIcon = rate.cRate > 0 ? rate.list[0].user.avatar : '';
		this.userName = rate.cRate > 0 ? rate.list[0].user.uname : '';
		this.content = rate.cRate > 0 ? rate.list[0].content : '';
		this.commentDate = rate.cRate > 0 ? rate.list[0].created : 0;
		this.style = rate.cRate > 0 ? rate.list[0].style : '';
		this.commentImg = rate.cRate > 0 ? rate.list[0].user.profileUrl : '';
	}
}
