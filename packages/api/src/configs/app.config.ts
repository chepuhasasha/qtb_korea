export default () => ({
  appSecret: process.env.APP_SECRET,
  jwtLife: 60 * 5, // - seconds
});
