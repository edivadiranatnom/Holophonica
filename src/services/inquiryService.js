import http from "../http-common";

class inquiryService {
  inquire(data) {
    return http.post("/inquire", data, {
      headers: {
        "Content-type": "application/json"
      }
    });
  }
}

export default new inquiryService();
