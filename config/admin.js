module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a810b5c22cd6271a885bb1a86f0822e7'),
  },
});
