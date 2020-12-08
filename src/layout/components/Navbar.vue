<template>
  <div class="navbar">
    <router-link to='/'><img src="~@/assets/images/logo.png"
           class="logo"></router-link>
    <div class="right-menu">
      <div class="userinfo">
        <img src="~@/assets/images/portrait.png">
        <p>
          <span>润泰环保</span><br>
          <span class="themeFcolor">18518511159</span>
        </p>
      </div>
      <p class="themeFcolor logout">退出</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'

export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  computed: {
    ...mapGetters(['sidebar', 'avatar'])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 11px;
  .logo {
    height: 40px;
  }
  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;
    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }
  .right-menu {
    display: flex;
    align-items: center;
    font-size: 14px;
    .themeFcolor {
      color: $themeColor;
    }
    .logout {
      cursor: pointer;
    }
    .userinfo {
      margin-right: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      line-height: 20px;
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
      }
    }
  }
}
</style>
