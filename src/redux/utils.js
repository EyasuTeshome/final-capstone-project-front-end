import { toast } from 'react-toastify';

export const API_URL = 'http://localhost:3000';
export const API_KEY = '';
export const handleToast = (error) => {
  toast(error, { position: 'top-center', type: 'error', autoClose: 5000 });
};
