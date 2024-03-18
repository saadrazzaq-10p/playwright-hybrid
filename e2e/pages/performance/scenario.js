module.exports = [
  {
    name: "Perform GET request",
    flow: [
      {
        get: {
          url: "/api/users/1"
        }
      }
    ]
  },
  {
    name: "Perform POST request",
    flow: [
      {
        post: {
          url: "/api/users",
          json: {
            name: "John",
            job: "Tester"
          }
        }
      }
    ]
  }
];
