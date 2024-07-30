// data.js
let users = [];

export const getUsers = () => users;

export const addUser = (user) => {
  users.push(user);
};

export const findUser = (username, password) => {
  return users.find(
    (user) => user.username === username && user.password === password
  );
};
