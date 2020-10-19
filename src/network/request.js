import axios from 'axios'

export function request(config) {
	/* 1.创建axios的实例 */
	const instance = axios.create({
		baseURL: 'http://123.207.32.32:8000',
		timeout: 5000
	})

	//这里instance()返回值本就是一个promise
	//直接返回相当于上面request2的promise
	//config里是传入的url
	return instance(config)
}


/* 拦截器 */
export function requestInterceptors(config) {
	/* 1.创建axios的实例 */
	const instance = axios.create({
		baseURL: 'http://123.207.32.32:8000',
		timeout: 5000
	})

	/* 对请求进行拦截 */
	instance.interceptors.request.use(config => {
		console.log('对请求拦截成功', config)
		//这里拦截成功后，config就不会传出去勒，需要手动return
		return config
	}, err => {
		console.log('对请求拦截失败', err)
	})

	/* 2.对响应进行拦截 */
	instance.interceptors.response.use(res => {
		console.log('对响应拦截器成功', res);
		// 这里会把传递的数据拦截下来，必须手动返回
		return res.data //这里数据实际上在.data中
	}, err => {
		console.log('对响应拦截器失败', err);
	})


	return instance(config)
}
