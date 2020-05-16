import http from "../http-common";

class packsService {
  getAll() {
    return http.get("/packs");
  }

  get(id) {
    return http.get(`/packs/${id}`);
  }

  create(data) {
    return http.post("/packs", data);
  }

  update(id, data) {
    return http.put(`/packs/${id}`, data);
  }

  delete(id) {
    return http.delete(`/packs/${id}`);
  }

  deleteAll() {
    return http.delete(`/packs`);
  }

  findByTitle(title) {
    return http.get(`/packs?title=${title}`);
  }
}

export default new packsService();
