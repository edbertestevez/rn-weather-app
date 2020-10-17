import { Alert } from 'react-native';
import { BASE_API_URL } from '../config/main';

interface IApiParam {
	method?: string;
	url?: string;
	body?: object;
	token?: string;
}

enum Methods {
	GET = 'GET',
	POST = 'POST',
	PATCH = 'PATCH',
	DELETE = 'DELETE'
}

export type ApiServiceType = {
	get: <T>(param: IApiParam) => Promise<T>;
	post: <T>(param: IApiParam) => Promise<T>;
	patch: <T>(param: IApiParam) => Promise<T>;
	remove: <T>(param: IApiParam) => Promise<T>;
};

export const ApiService = {
	get: (params: IApiParam | void) => {
		return ApiCall({ ...params, method: Methods.GET });
	},

	post: (params: IApiParam | void) => {
		return ApiCall({ ...params, method: Methods.POST });
	},

	patch: (params: IApiParam | void) => {
		return ApiCall({ ...params, method: Methods.PATCH });
	},

	remove: (params: IApiParam | void) => {
		return ApiCall({ ...params, method: Methods.DELETE });
	}
};

const ApiCall = async (params: IApiParam) => {
	let excludeBody = params.method === Methods.GET || params.method === Methods.DELETE;
	let url = BASE_API_URL;

	if (params && params.url) {
		url = params.url;
	}

	let options = {
		method: params.method,
		headers: {
			Authorization: `Bearer ${params.token}`,
			'Content-Type': 'application/json'
		}
	};

	let response = await fetch(url, excludeBody ? options : { ...options, body: JSON.stringify(params.body) });
	
	let result = await response.json();
	
	return result;
};
