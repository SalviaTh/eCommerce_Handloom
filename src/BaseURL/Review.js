import { Axios } from "../../api";

export async function createReview(formData) {
  const response = await Axios.post("/commentrating/comment", formData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(response?.data);
  return response.data;
}
