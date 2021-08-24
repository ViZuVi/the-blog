<template>
  <main class="layout__main login">
    <h1 class="layout__title">{{ modeTitle }}</h1>
    <form class="form" @submit.prevent="authorizeUser">
      <div class="form__control-wrapper">
        <label class="form__label" for="email">Email</label>
        <input
          class="form__input"
          type="email"
          name="email"
          id="email"
          @change="SET_USER({ field: 'email', value: $event.target.value })"
        />
      </div>
      <div class="form__control-wrapper">
        <label class="form__label" for="password">Password</label>
        <input
          class="form__input"
          type="password"
          name="password"
          id="password"
          @change="SET_USER({ field: 'password', value: $event.target.value })"
        />
      </div>
      <button class="form__button">{{ modeTitle }}</button>
      <div class="login__btn-wrapper">
        <a
          class="login__link"
          @click="toggleAuthMode"
          >Switch to {{ mode === "sign-in" ? "Sign up" : "Sign in" }}</a
        >
        <a class="login__link">forgot password?</a>
      </div>
    </form>
  </main>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

export default {
  layout: "short",
  data() {
    return {
      mode: "sign-in",
    };
  },
  computed: {
    modeTitle() {
      return this.mode === "sign-in" ? "Sign in" : "Sign up";
    },
  },
  methods: {
    ...mapMutations("user", ["SET_USER", "UPDATE_AUHT_URL"]),
    ...mapActions("user", ["authorize"]),
    toggleAuthMode() {
      this.mode === 'sign-in' ? (this.mode = 'sign-up') : (this.mode = 'sign-in');
      this.UPDATE_AUHT_URL(this.mode);
    },
    authorizeUser() {
      this.authorize().then(() => this.$router.push("/"))
    }
  },
};
</script>

<style scoped>
.login__btn-wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.login__link {
  text-decoration: underline;
  cursor: pointer;
}
</style>