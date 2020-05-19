import http from "../http-common";

class newsletterService {
  subscribe(data) {
    return http.post("/subscribe", data, {
      headers: {
        "Content-type": "application/json"
      }
    });
  }
}

export default new newsletterService();
