export const divIdFormatter = (name: string) => {
  const nameArray = name.split(" ").map((el) => el.toLowerCase());
  return nameArray.join("-");
};
