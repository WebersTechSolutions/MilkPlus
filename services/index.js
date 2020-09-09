import { fetch } from "whatwg-fetch";
import base64 from "base-64";
import { searchUrl, userName, password, domain, categoriesUrl, aboutUsUrl } from "../constants";

class services {
	static async searchAppAction(searchText) {
		let resp;
		try {
			let header = new Headers();
			header.append('Accept', 'application/json');
			let encoded = base64.encode(`${userName}:${password}`);
			let auth = 'Basic ' + encoded;
			header.append('Authorization', auth );
			resp = await fetch(`${searchUrl}${searchText}`, {
				method: 'GET',
				headers: header,
			}).then((res) => res.json())
			.then((jsonResp) => jsonResp.results);
		} catch (e) {
			console.log(e);
		}
		return resp;
	}

	static async getRelevantAppAction(selectedItemId) {
		let resp;
		try {
			let header = new Headers();
			header.append('Accept', 'application/json');
			let encoded = base64.encode(`${userName}:${password}`);
			let auth = 'Basic ' + encoded;
			header.append('Authorization', auth );
			resp = await fetch(`${domain}/${selectedItemId}`, {
				method: 'GET',
				headers: header,
			}).then((res) => res.json())
			.then((jsonResp) => jsonResp);
		} catch (e) {
			console.log(e);
		}
		return resp;
	}

	static async getCategories() {
		let resp;
		try {
			let header = new Headers();
			header.append('Accept', 'application/json');
			let encoded = base64.encode(`${userName}:${password}`);
			let auth = 'Basic ' + encoded;
			header.append('Authorization', auth );
			resp = await fetch(`${categoriesUrl}`, {
				method: 'GET',
				headers: header,
			}).then((res) => res.json())
			.then((jsonResp) => jsonResp);
		} catch (e) {
			console.log(e);
		}
		return resp.results;
	}

	static async aboutUs() {
		let resp;
		try {
			let header = new Headers();
			header.append('Accept', 'application/json');
			let encoded = base64.encode(`${userName}:${password}`);
			let auth = 'Basic ' + encoded;
			header.append('Authorization', auth );
			resp = await fetch(`${aboutUsUrl}`, {
				method: 'GET',
				headers: header,
			}).then((res) => res.json())
			.then((jsonResp) => jsonResp);
		} catch (e) {
			console.log(e);
		}
		return resp.results;
	}
}

export default services;