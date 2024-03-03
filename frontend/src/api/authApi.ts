import axios from 'axios';
import { User } from '../models/user';

const BASE_URL = 'http://localhost:5000/api/users';


export const requestRegister = async (userData: Partial<User>) => {
  try {
    const response = await axios.post(`${BASE_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    throw error
  }
};

export const requestUpdateUser = async (userData: Partial<User>) => {
  try {
    const response = await axios.put(`${BASE_URL}/profile/${userData._id}`, userData);
    return response.data;
  } catch (error) {
    throw error
  }
};

export const requestLogin = async (credentials: Partial<User>) => {
  try {
    const response = await axios.post(`${BASE_URL}/signin`, credentials);
    return response.data;
  } catch (error) {
    throw error
  };
};

export const requestLogout = async () => {
  try {
    const response = await axios.post(`${BASE_URL}/logout`);
    return response.data;
  } catch (error) {
    throw error
  }
};