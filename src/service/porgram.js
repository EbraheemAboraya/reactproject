import http from "../http-common";

const fetchProgramData = async () => {
  try {
    const response = await http.get("/volunteer/index");
    console.log("Response received:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching shelters:", error);
    throw error;
  }
};


const ShelterService = {
  fetchProgramData,
};

export default ShelterService;
