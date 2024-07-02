# WorkIndia-Apis
Hey there, Mr. X. You have been appointed to design an InShorts-like platform, where users can browse through various shorts (news, articles, posts, etc.).


```markdown
# Node.js MVC Application

This is a Node.js application with a Model-View-Controller (MVC) architecture for handling user authentication and news shorts creation.

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/nodejs-mvc-app.git
   ```

2. Install dependencies:
   ```bash
   cd nodejs-mvc-app
   npm install
   ```

3. Set up the MySQL database:
   - Create a database named `inshorts`
   - Update the database configuration in `config.js`

4. Start the server:
   ```bash
   npm start
   ```

## Routes

- POST /api/signup: Create a new user account
- POST /api/login: User login
- POST /api/shorts/create: Create a new news short
- GET /api/shorts: Get all news shorts

## Tests (Optional)

To run tests, you can use a testing framework like Jest or Mocha. Here is an example using Jest:

1. Install Jest:
   ```bash
   npm install --save-dev jest
   ```

2. Create test files in the `tests` directory.

3. Run tests:
   ```bash
   npm test
   

   ```
![image](https://github.com/tejasrocksHere/WorkIndia-Apis/assets/114760784/b3da9b9f-2775-4ec9-b8e4-516f278df2b8)

![image](https://github.com/tejasrocksHere/WorkIndia-Apis/assets/114760784/6835095f-0165-4cd4-934b-be917e67b919)

![image](https://github.com/tejasrocksHere/WorkIndia-Apis/assets/114760784/c24718ce-9532-444c-96e8-2de7549b0ac9)

## Assumptions

- The MySQL database is running locally on the default port.
- JWT secret key and API key are hardcoded for simplicity.
- Error handling in controllers is minimal for demonstration purposes.

