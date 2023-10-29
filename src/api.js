import axios from "axios";

const BASE_URL = "https://swapi.dev/api/";

export const fetchResourceList = async (resource) => {
  try {
    const response = await axios.get(`${BASE_URL}${resource}`);
    return response.data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchResourceDetail = async (resource, id) => {
  try {
    const response = await axios.get(`${BASE_URL}${resource}/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
