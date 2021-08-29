export default function (context) {
  context.store.dispatch("user/initAuth", context.req);
};