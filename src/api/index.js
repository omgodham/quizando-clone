import axios from 'axios';

// export const apiBaseUrl = 'http://13.235.90.125:8118/';
// var value="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVmZjE4NDJmYmIwYmIyYTgzMDM1YmIwOSIsInBob25lIjoiOTU5OTgyNzE3MyIsInJvbGUiOiJhZG1pbiJ9LCJpYXQiOjE2MDk2NjM2MzV9.AjnZUsKkOOGf4oGxb09OLcXn8r1PGm03EKLRRv7wV6U";
// localStorage.setItem('token', value)
// localStorage.getItem('token')
const instance = axios.create({
    baseURL: "http://13.235.90.125:8118",
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVmZjE4NDJmYmIwYmIyYTgzMDM1YmIwOSIsInBob25lIjoiOTU5OTgyNzE3MyIsInJvbGUiOiJhZG1pbiJ9LCJpYXQiOjE2MDk2NjM2MzV9.AjnZUsKkOOGf4oGxb09OLcXn8r1PGm03EKLRRv7wV6U'
      }
  });

  export default instance;
