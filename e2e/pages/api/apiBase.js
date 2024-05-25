require('dotenv').config();
class ApiBase {
  async getUser(username) {
    try {
      const response = await fetch(`${process.env.BASE_API_URL}users/${username}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch user ${username}. Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching user:", error);
      throw error;
    }
  }
}  

module.exports = ApiBase;
