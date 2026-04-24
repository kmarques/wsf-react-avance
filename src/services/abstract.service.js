class AbstractService {
  constructor(url) {
    this.url = url;
  }

  async getAll() {
    try {
      const response = await fetch(this.url);
      return await response.json();
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }

  async create(data) {
    try {
      const response = await fetch(this.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return await response.json();
    } catch (error) {
      console.error("Error creating data:", error);
      throw error;
    }
  }

  async update(id, data) {
    try {
      const response = await fetch(`${this.url}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return await response.json();
    } catch (error) {
      console.error("Error updating data:", error);
      throw error;
    }
  }

  async delete(id) {
    try {
      await fetch(`${this.url}/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error("Error deleting data:", error);
      throw error;
    }
  }
}

export default AbstractService;
