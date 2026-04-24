import AbstractService from "./abstract.service";

const URL = "http://localhost:3333/users";

class UserService extends AbstractService {
  async login(credentials) {
    const response = await fetch(
      `${URL}?email=${credentials.email}&password=${credentials.password}`,
    );
    const users = await response.json();
    if (users.length > 0) {
      return users[0]; // Assuming email is unique and returns one user
    } else {
      throw new Error("Invalid email or password");
    }
  }
}

export default new UserService(URL);
