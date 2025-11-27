<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-11-19 22:06:05
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-11-27 18:13:58
 * @FilePath: \minad-ui\src\App.vue
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
-->
<script setup lang="ts">
import {   MdButton,
  MdInput,
  MdRow,
  MdCol } from "@/components/index";
</script>

<template>
  <header>
    <md-button type="primary">主要按钮</md-button>

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
