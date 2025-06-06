const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

const BASE_URL = 'https://demoqa.com';

describe('Account API tests', () => {
  const password = 'Passw0rd!';
  let userId = null;    // Will store the created user's ID
  let username = null;  // Will store the created user's username
  let token = null;     // Will store the auth token after login

  // Test case: Create a new user with valid data
  test('POST /Account/v1/User - should create user with valid data', async () => {
    username = `user_${uuidv4()}`; // Generate unique username for isolation
    const response = await axios.post(`${BASE_URL}/Account/v1/User`, {
      userName: username,
      password,
    });
    expect(response.status).toBe(201);            // Expect HTTP 201 Created
    expect(response.data).toHaveProperty('userID'); // Response must include userID
    userId = response.data.userID;                // Save userID for further tests
  });

  // Test case: Fail to create user with empty password (negative test)
  test('POST /Account/v1/User - should fail creating user with empty password', async () => {
    try {
      await axios.post(`${BASE_URL}/Account/v1/User`, {
        userName: 'someuser',
        password: '', // Invalid empty password
      });
    } catch (error) {
      expect(error.response.status).toBe(400);      // Expect HTTP 400 Bad Request
      expect(error.response.data).toHaveProperty('message'); // Error message must be present
    }
  });

  // Test case: Generate auth token for the existing user (positive)
  test('POST /Account/v1/GenerateToken - should generate token for existing user', async () => {
    const response = await axios.post(`${BASE_URL}/Account/v1/GenerateToken`, {
      userName: username,
      password,
    });
    expect(response.status).toBe(200);          // Expect HTTP 200 OK
    expect(response.data).toHaveProperty('token'); // Response must contain token
    token = response.data.token;                 // Save token for authorized requests
  });

  // Test case: Fail to generate token with wrong password (negative)
  test('POST /Account/v1/GenerateToken - should fail with wrong password', async () => {
    try {
      await axios.post(`${BASE_URL}/Account/v1/GenerateToken`, {
        userName: username,
        password: 'WrongPass123', // Incorrect password
      });
    } catch (error) {
      expect(error.response.status).toBe(401);    // Expect HTTP 401 Unauthorized
      expect(error.response.data).toHaveProperty('message'); // Error message must be present
    }
  });

  // Test case: Get info about existing user (positive)
  test('GET /Account/v1/User/{UUID} - should get info about existing user', async () => {
    const response = await axios.get(`${BASE_URL}/Account/v1/User/${userId}`, {
      headers: { Authorization: `Bearer ${token}` }, // Pass auth token in header
    });
    expect(response.status).toBe(200);           // Expect HTTP 200 OK
    expect(response.data).toHaveProperty('userId', userId); // Validate correct user info returned
  });

  // Test case: Fail to get info for non-existent user (negative)
  test('GET /Account/v1/User/{UUID} - should fail for non-existent user', async () => {
    const fakeId = '00000000-0000-0000-0000-000000000000'; // Random non-existent UUID
    try {
      await axios.get(`${BASE_URL}/Account/v1/User/${fakeId}`, {
        headers: { Authorization: `Bearer ${token}` }, // Pass valid auth token
      });
    } catch (error) {
      // Log error details for debugging unexpected API behavior
      console.log('Error status:', error.response.status);
      console.log('Error data:', error.response.data);

      expect([401, 404]).toContain(error.response.status); // Allow either 401 or 404 as valid failure responses
      expect(error.response.data).toHaveProperty('message'); // Error message must be present
    }
  });

  // Test case: Delete existing user (positive)
  test('DELETE /Account/v1/User/{UUID} - should delete existing user', async () => {
    const response = await axios.delete(`${BASE_URL}/Account/v1/User/${userId}`, {
      headers: { Authorization: `Bearer ${token}` }, // Pass auth token
    });
    expect(response.status).toBe(204); // Expect HTTP 204 No Content on successful delete
  });

  // Test case: Fail to delete non-existent user (negative)
  test('DELETE /Account/v1/User/{UUID} - should fail deleting non-existent user', async () => {
    const fakeId = '00000000-0000-0000-0000-000000000000'; // Random non-existent UUID
    try {
      await axios.delete(`${BASE_URL}/Account/v1/User/${fakeId}`, {
        headers: { Authorization: `Bearer ${token}` }, // Pass auth token
      });
    } catch (error) {
      expect(error.response.status).toBe(404);          // Expect HTTP 404 Not Found
      expect(error.response.data).toHaveProperty('message'); // Error message must be present
    }
  });
});
