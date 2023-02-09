export default defineEventHandler(event => {
  return sendRedirect(event, '/auth/signin');
});

