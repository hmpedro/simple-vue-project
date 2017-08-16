import Auth from './Auth'

class RequestService {
	
	constructor() {
        this.config = Auth.getAuthHeader();
	}

	create(url, data) {
		return axios.post(url, data, this.config);
	}

	retrieve(url, id, filters) {
		let methodConfig = this.config;

        methodConfig.params = filters || {};

		if(id) {
			url = url+'/'+id;
		}

		return axios.get(url, methodConfig);
	}

	update(url, id, data) {

		return axios.put(url+'/'+id, data), this.config;
	}

	delete(url, id) {
		return axios.get(url+'/'+id, this.config);
	}
}

export default RequestService;