const getUniqueId = key => {
  const posts = JSON.parse(localStorage.getItem(key));

  return posts
    ? posts.reduce((acc, { id }) => {
        return id > acc ? id : acc;
      }, 0)
    : 0;
};

export default getUniqueId;
