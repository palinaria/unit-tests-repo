const nock = require('nock');
const axios = require('axios');

const BASE_URL = 'https://api.example.com';

describe('Mock API User Endpoint Tests', () => {

  afterEach(() => {
    nock.cleanAll();
  });

  const userMock = {
    id: 1,
    name: "Palina Dolbik",
    email: "palina.dolbik@example.com",
    username: "palinad",
    phone: "+370-600-12345",
    address: {
      street: "Gedimino pr. 1",
      city: "Vilnius",
      state: "Vilnius County",
      zipcode: "01103",
      country: "Lithuania"
    },
    company: {
      name: "Digital Creators Hub",
      industry: "IT & Design",
      position: "UX/UI Designer"
    },
    dob: "2006-01-31",
    profile_picture_url: "https://example.com/images/palinadolbik.jpg",
    is_active: true,
    created_at: "2023-01-01T12:00:00Z",
    updated_at: "2025-01-01T12:00:00Z",
    preferences: {
      language: "en",
      timezone: "Europe/Vilnius",
      notifications_enabled: true
    }
  };

  //  Success (200) mock
  it('should return a valid user object for ID 1 (200)', async () => {
    nock(BASE_URL)
      .get('/users/1')
      .reply(200, userMock);

    const response = await axios.get(`${BASE_URL}/users/1`);
    const data = response.data;

    expect(response.status).toBe(200);
    expect(data).toHaveProperty('id');
    expect(data).toHaveProperty('email');
    expect(typeof data.id).toBe('number');
    expect(typeof data.name).toBe('string');
    expect(typeof data.address).toBe('object');
  });

  //  No Content (204)
  it('should return 204 No Content for a deleted user', async () => {
    nock(BASE_URL)
      .get('/users/9999')
      .reply(204);

    const response = await axios.get(`${BASE_URL}/users/9999`);
    expect(response.status).toBe(204);
    expect(response.data).toBe('');
  });

  //  Forbidden (403)
  it('should return 403 Forbidden if unauthorized', async () => {
    nock(BASE_URL)
      .get('/users/1')
      .reply(403, {
        error: 'Forbidden',
        details: 'You do not have access to this resource.'
      });

    try {
      await axios.get(`${BASE_URL}/users/1`);
    } catch (error) {
      expect(error.response.status).toBe(403);
      expect(error.response.data).toHaveProperty('error');
      expect(error.response.data).toHaveProperty('details');
    }
  });

  //  Not Found (404)
  it('should return 404 Not Found for invalid user', async () => {
    nock(BASE_URL)
      .get('/users/999')
      .reply(404, {
        error: 'Not Found',
        details: 'User not found.'
      });

    try {
      await axios.get(`${BASE_URL}/users/999`);
    } catch (error) {
      expect(error.response.status).toBe(404);
      expect(error.response.data).toHaveProperty('error');
      expect(error.response.data).toHaveProperty('details');
    }
  });

  //  Bad Gateway (502)
  it('should return 502 Bad Gateway on server error', async () => {
    nock(BASE_URL)
      .get('/users/1')
      .reply(502, {
        error: 'Bad Gateway',
        details: 'Server is unavailable.'
      });

    try {
      await axios.get(`${BASE_URL}/users/1`);
    } catch (error) {
      expect(error.response.status).toBe(502);
      expect(error.response.data.error).toBe('Bad Gateway');
    }
  });
});
