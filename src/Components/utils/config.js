const getToken = localStorage.getItem("token");
export const config = {headers : { Authorization: `Bearer ${getToken}` }};