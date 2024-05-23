import { get } from "http";
import { resolve } from "path";
import { getAccessToken } from "../lib/actions";

const apiService = {
  get: async function (url: string): Promise<any> {
    console.log("GET: " + url);

    const token = await getAccessToken();

    return new Promise((resolve, reject) => {
      fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log("response", json);
          resolve(json);
        })
        .catch((error) => {
          console.log("error", error);
          reject(error);
        });
    });
  },

  postWithoutToken: async function (url: string, data: any): Promise<any> {
    console.log("POST: ", url, data);

    return new Promise((resolve, reject) => {
      fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((json) => {
          console.log("response", json);
          resolve(json);
        })
        .catch((error) => {
          console.log("error", error);
          reject(error);
        });
    });
  },

  post: async function (url: string, data: any): Promise<any> {
    console.log("POST: ", url, data);

    const token = await getAccessToken();

    return new Promise((resolve, reject) => {
      fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: data,
      })
        .then((response) => response.json())
        .then((json) => {
          console.log("response", json);
          resolve(json);
        })
        .catch((error) => {
          console.log("error", error);
          reject(error);
        });
    });
  },
};

export default apiService;
