const findUserById = (id, users) => {
  const [findedUser] = users.filter(user => user.id === id);
  return findedUser;
};

export default findUserById;
