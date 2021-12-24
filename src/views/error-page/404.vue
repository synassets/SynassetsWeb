<template>
  <div style="margin-top: -20px;">
    <p style="text-align: center;font-size: 0.96rem;margin-top: 1rem;">404</p>
    <p style="text-align: center;font-size: 0.2rem; margin-top: 0.1rem;cursor: pointer; text-decoration: underline" @click="handleGoBack">Go Back</p>
  </div>
</template>

<script>

export default {
  name: 'page404',
  data() {
    return {
    };
  },
  methods: {
    handleGoBack() {
      const to = sessionStorage.getItem('afterRouteName') || 'index';
      this.$router.push({ name: to });
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
