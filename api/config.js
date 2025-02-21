import axios from "axios";
import { useQuery } from "react-query";

const apiConfig = axios.create({
	baseURL: "https://api-ecc.onrender.com/api/",
});

axios.defaults.withCredentials = true;

export const get = async (route, auth = {}, payload = {}) => {
	const res = await apiConfig.get(`/${route}`, auth);
	return { data: res.data, status: res.status };
};
export const post = async (route, auth = {}, data) => {
	const res = await apiConfig.post(`/${route}`, data, auth);
	return { data: res.data, status: res.status, test: res };
};
export const put = async (route, auth, data) => {
	const res = await apiConfig.put(`/${route}`, data, auth);
	return { data: res.data, status: res.status };
};
export const patch = async (route, auth, data) => {
	const res = await apiConfig.patch(`/${route}`, data, auth);
	return { data: res.data, status: res.status };
};
export const _delete = async (route, auth) => {
	const res = await apiConfig.delete(`/${route}`, auth);
	return { data: res.data, status: res.status };
};

export default apiConfig;
