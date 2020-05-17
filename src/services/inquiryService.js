import http from "../http-common";

class inquiryService {
  inquire(data) {
    return http.post("/inquire", data);
  }
}

export default new inquiryService();
