export const NavigationUtil = (param: string) => {
  //   window.scrollTo(0, 0);
  const newUrl = `${window.location.origin}/?page=${param}`;
  window.location.href = newUrl;
};
