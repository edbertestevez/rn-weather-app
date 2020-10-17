import { BASE_API_URL } from '../config/main';

interface ICallParam {
	method: string;
	url?: string;
	body?: object;
}

enum Methods {
	GET = 'GET',
	POST = 'POST',
	PATCH = 'PATCH',
	DELETE = 'DELETE'
}

export type ApiServiceType = {
	get: (url?: string, body?: object) => Promise<Response>;
	post: (url?: string, body?: object) => Promise<Response>;
	patch: (url?: string, body?: object) => Promise<Response>;
	remove: (url?: string, body?: object) => Promise<Response>;
};

export const ApiService = {
	get: (url?: string, body?: object) => {
		return ApiCall({ url, body, method: Methods.GET });
	},

	post: (url?: string, body?: object) => {
		return ApiCall({ url, body, method: Methods.POST });
	},

	patch: (url?: string, body?: object) => {
		return ApiCall({ url, body, method: Methods.PATCH });
	},

	remove: (url?: string, body?: object) => {
		return ApiCall({ url, body, method: Methods.DELETE });
	}
};

const ApiCall = (params: ICallParam) => {
	let excludeBody = params.method === Methods.GET || params.method === Methods.DELETE;
    
    //Default API URL on config
    let url = BASE_API_URL;

    if(params.url){
        url = params.url
    }

	let options = {
		method: params.method,
		headers: {
			Authorization: `Bearer: `,
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	};

	return fetch(url, excludeBody ? options : { ...options, body: JSON.stringify(params.body) });
};
