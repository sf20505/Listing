import axios from "axios";

// Base URL for the API (you can change it if needed)
const BASE_URL =
  "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json";

// Axios instance with default configuration
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to fetch data from the API
export const fetchData = async () => {
  try {
    const response = await apiClient.get();
    return response.data; // Return the response data
  } catch (error) {
    throw error; // Rethrow the error for handling in the component
  }
};
