const delRepeated = (user, users) => {
  return users.filter(elem => {
    if (elem.name === user.name && elem.password === user.password) {
      return false;
    } else {
      return true;
    }
  });
};

export default delRepeated;
