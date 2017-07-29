class RequestService {
	
	constructor() {

	}

	create(requestParameters) {
		let url = requestParameters.url;
		let data = requestParameters.data;
		let onSuccess = requestParameters.onSuccess;
		let onFail = requestParameters.onFail;

		axios.post(url, data)
		  .then(function (response) {
		    onSuccess(response.data);
		  })
		  .catch(function (error) {
		    onFail(error.response.data);
		  });
	}

	retrieve(requestParameters) {
		let config = {
			params: requestParameters.filter
		};

		let id = requestParameters.id;
		let url = requestParameters.url;
		let onSuccess = requestParameters.onSuccess;
		let onFail = requestParameters.onFail;

		if(id) {
			url = url+'/'+id;
		}

		axios.get(url, config)
		  .then(function (response) {
		    onSuccess(response.data);
		  })
		  .catch(function (error) {
		    onFail(error.response.data);
		  });

	}

	update(requestParameters) {
		let id = requestParameters.id;
		let url = requestParameters.url;
		let data = requestParameters.data;
		let onSuccess = requestParameters.onSuccess;
		let onFail = requestParameters.onFail;

		axios.put(url+'/'+id, data)
		  .then(function (response) {
		    onSuccess(response.data);
		  })
		  .catch(function (error) {
		    onFail(error.response.data);
		  });
	}

	delete(requestParameters) {
		let id = requestParameters.id;
		let url = requestParameters.url;
		let onSuccess = requestParameters.onSuccess;
		let onFail = requestParameters.onFail;

		axios.get(url+'/'+id, config)
		  .then(function (response) {
		    onSuccess(response.data);
		  })
		  .catch(function (error) {
		    onFail(error.response.data);
		  });
	}
}

export default RequestService;