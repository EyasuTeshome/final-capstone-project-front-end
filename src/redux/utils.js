import { toast } from "react-toastify";

export const API_URL = "http://localhost:3000";
export const API_KEY = "";
export const handleToast = (error, type = "success") => toast(error, { position: "top-center", type, autoClose: 5000 });
