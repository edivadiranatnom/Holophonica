import http from "../http-common";

class newsletterService {
  subscribe(data) {
    return http.post("/subscribe", data);
  }
}

export default new newsletterService();
