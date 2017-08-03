class RequestService {
	
	constructor() {

	}

	create(url, data) {
		return axios.post(url, data);
	}

	retrieve(url, id, filters) {
		let config = {
			params: filters || {},
		};

		if(id) {
			url = url+'/'+id;
		}

		return axios.get(url, config);
	}

	update(url, id, data) {

		return axios.put(url+'/'+id, data);
	}

	delete(url, id) {

		return axios.get(url+'/'+id, config);
	}
}

export default RequestService;