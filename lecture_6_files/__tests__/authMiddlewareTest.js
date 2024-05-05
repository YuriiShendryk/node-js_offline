const jwt = require('jsonwebtoken');
require('dotenv').config();

const { authGuard } = require('../src/middlewares/authGuard');
const { UnauthorizedException } = require('../src/helpers/exceptions');
const { user, users } = require('../src/model/__mocks__/data');

jest.mock('../src/model/userModel.js');

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRATION_TIME = process.env.JWT_EXPIRATION_TIME;


const getUserById = jest.fn(id => {
  const user = users.find(el => String(el._id) === String(id));
  return user;
});


describe('Auth middleware test', () => {
  // run after each test case
  afterEach(() => (user.token = null));

    test('Token not found, shoud throw unanuthorized exception', async () => {
      const mockReq = {
        headers: {}
      };
      const mockRes = {};
      const mockNext = jest.fn();
      await authGuard(mockReq, mockRes, mockNext);
      expect(mockNext).toHaveBeenCalledWith(new UnauthorizedException());
    })


    test('Shoud get token from headers and call next with user id and user email', async () => {
      const generateToken = (payload, secret, expiresIn) => jwt.sign(payload, secret, { expiresIn });
      const token = generateToken({ id: user._id, email: user.email }, JWT_SECRET, JWT_EXPIRATION_TIME)
      const mockReq = {
        headers: {
          authorization: `Bearer ${token}`,
        },
      };
      const mockNext = jest.fn();
      const mockRes = {};
      const userInDB = getUserById(user._id);
      mockReq.user = user;
      await authGuard(mockReq, mockRes, mockNext);
      expect(userInDB).toBeTruthy();
      expect(mockReq.user._id).toEqual(userInDB._id);
      expect(mockNext).toHaveBeenCalled();
    
    });
  
  
      test('Should call next() with an error in case userInDb is absent', async () => {
    const fakeUser = {
      ...user,
      _id: '1',
    };
    const generateToken = (payload, secret) => jwt.sign(payload, secret);
    const token = generateToken({ id: fakeUser._id }, JWT_SECRET);
    fakeUser.token = token;
    const mockReq = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
    const mockRes = {};
    const mockNext = jest.fn();
    const userInDb = getUserById(fakeUser._id);
    await authGuard(mockReq, mockRes, mockNext);
    expect(userInDb).toBeFalsy();
    expect(mockNext).toHaveBeenCalledWith(
      new UnauthorizedException()
    );
  });

  test("Should call next() with an error in case userInDb's token isn't equal to authorization header token", async () => {
    const generateToken = (payload, secret) => jwt.sign(payload, secret);
    const token = generateToken({ id: user._id }, JWT_SECRET);
    const mockReq = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
    const mockRes = {};
    const mockNext = jest.fn();
    const userInDb = getUserById(user._id);
    await authGuard(mockReq, mockRes, mockNext);
    expect(userInDb.token).not.toEqual(token);
    expect(mockNext).toHaveBeenCalledWith(
      new UnauthorizedException()
    );
  });

  test('should call next() with an error when call authmiddleware', async () => {
    const generateToken = (payload, secret) => jwt.sign(payload, secret);
    const token = generateToken({ id: user._id }, JWT_SECRET);
    user.token = token;
    const mockReq = {};
    const mockRes = {};
    const mockNext = jest.fn();
    await authGuard(mockReq, mockRes, mockNext);
    expect(mockNext).toHaveBeenCalledTimes(1);
    expect(mockNext).toHaveBeenCalledWith(
      new UnauthorizedException()
    );
  });
  });
  