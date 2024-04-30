require('dotenv').config();

class ApiBase {
  constructor(page) {
    this.page = page;
    this.baseApiUrl = process.env.BASE_API_URL;
  }

  async getSingleUser(userId) {
    try {
      const response = await this.page.goto(`${this.baseApiUrl}/users/${userId}`, {
        waitUntil: "networkidle",
      });

      if (!response.ok()) {
        throw new Error(`Failed to fetch user ${userId}. Status: ${response.status()}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Error fetching user:", error);
      throw error;
    }
  }

  async createUser(user) {
    const responseBody = JSON.stringify(user);
    await this.page.route("**/users", (route) => {
      route.fulfill({
        status: 201,
        contentType: "application/json",
        body: responseBody, 
      });
    });
    return user;
  }
}  

module.exports = ApiBase;
