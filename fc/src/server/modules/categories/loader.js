const CategoryLoader = client => {
  const loadAll = () => {
    return [loadById()];
  };

  const loadById = () => {
    return { name: "Piou" };
  };

  return {
    loadAll,
    loadById
  };
};

module.exports = {
  CategoryLoader
};
