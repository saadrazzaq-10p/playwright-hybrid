require('dotenv').config();
const { request } = require('@playwright/test');

class ApiBase {
  constructor() {
    this.baseApiUrl = process.env.BASE_API_URL;
  }

  async getUser(username) {
    try {
      const response = await request.newContext().then(context => 
        context.get(`${this.baseApiUrl}users/${username}`)
      );

      if (!response.ok()) {
        throw new Error(`Failed to fetch user ${username}. Status: ${response.status()}`);
      }

      return {
        status: response.status(),
        body: await response.json(),
      };
    } catch (error) {
      console.error("Error fetching user:", error);
      throw error;
    }
  }
}

module.exports = ApiBase;
