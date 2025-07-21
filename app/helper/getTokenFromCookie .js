const getTokenFromCookie = () => {
  const cookies = document.cookie.split("; ");
  const tokenCookie = cookies.find((cookie) => cookie.startsWith("accessToken="));
  return tokenCookie ? tokenCookie.split("=")[1] : null;
};
export default getTokenFromCookie;
