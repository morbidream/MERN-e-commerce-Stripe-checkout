import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDAyZDQ1Mzk1YWM3MWE4MDc5ZDA2NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODQxNzc2OSwiZXhwIjoxNjUxMDA5NzY5fQ.HkWxrw7HXA8ALG1zcSqQPfPFELdSBKovQeFOKA-UzZc";
export const publicRequest = axios.create({
    baseURL: BASE_URL, 
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}` },
});