# Swiper 轮播

用于实现内容的轮播展示，支持水平/垂直方向、自动播放、循环播放等功能。

## 引入方式

### 全局引入

```vue
import { createApp } from 'vue'
import MinadUI from 'minad-ui'
import 'minad-ui/lib/style.css'

const app = createApp()
app.use(MinadUI)
```

### 按需引入

```vue
import { MdSwiper, MdSwiperItem } from 'minad-ui'
import 'minad-ui/lib/components/swiper/style.css'

app.component('MdSwiper', MdSwiper)
app.component('MdSwiperItem', MdSwiperItem)
```

## 基本用法

使用 `md-swiper` 和 `md-swiper-item` 组件创建轮播。

```vue
<template>
  <div class="swiper-demo">
    <md-swiper :height="200">
      <md-swiper-item>
        <view class="swiper-item red">轮播项 1</view>
      </md-swiper-item>
      <md-swiper-item>
        <view class="swiper-item blue">轮播项 2</view>
      </md-swiper-item>
      <md-swiper-item>
        <view class="swiper-item green">轮播项 3</view>
      </md-swiper-item>
    </md-swiper>
  </div>
</template>

<style scoped>
.swiper-demo {
  width: 100%;
}

.swiper-item {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 24px;
}

.red {
  background-color: #ff6b6b;
}

.blue {
  background-color: #4dabf7;
}

.green {
  background-color: #51cf66;
}
</style>
```

## 自动播放

使用 `autoplay` 属性开启自动播放，`interval` 属性设置播放间隔。

```vue
<template>
  <div class="swiper-demo">
    <md-swiper :height="200" autoplay :interval="2000">
      <md-swiper-item>
        <view class="swiper-item red">轮播项 1</view>
      </md-swiper-item>
      <md-swiper-item>
        <view class="swiper-item blue">轮播项 2</view>
      </md-swiper-item>
      <md-swiper-item>
        <view class="swiper-item green">轮播项 3</view>
      </md-swiper-item>
    </md-swiper>
  </div>
</template>
```

## 循环播放

使用 `loop` 属性开启循环播放。

```vue
<template>
  <div class="swiper-demo">
    <md-swiper :height="200" autoplay loop>
      <md-swiper-item>
        <view class="swiper-item red">轮播项 1</view>
      </md-swiper-item>
      <md-swiper-item>
        <view class="swiper-item blue">轮播项 2</view>
      </md-swiper-item>
      <md-swiper-item>
        <view class="swiper-item green">轮播项 3</view>
      </md-swiper-item>
    </md-swiper>
  </div>
</template>
```

## 显示箭头

使用 `arrow` 属性显示左右箭头。

```vue
<template>
  <div class="swiper-demo">
    <md-swiper :height="200" arrow>
      <md-swiper-item>
        <view class="swiper-item red">轮播项 1</view>
      </md-swiper-item>
      <md-swiper-item>
        <view class="swiper-item blue">轮播项 2</view>
      </md-swiper-item>
      <md-swiper-item>
        <view class="swiper-item green">轮播项 3</view>
      </md-swiper-item>
    </md-swiper>
  </div>
</template>
```

## 自定义指示器位置

使用 `indicatorPosition` 属性设置指示器的位置。

```vue
<template>
  <div class="swiper-demo">
    <md-swiper :height="200" indicatorPosition="top">
      <md-swiper-item>
        <view class="swiper-item red">顶部指示器</view>
      </md-swiper-item>
      <md-swiper-item>
        <view class="swiper-item blue">顶部指示器</view>
      </md-swiper-item>
      <md-swiper-item>
        <view class="swiper-item green">顶部指示器</view>
      </md-swiper-item>
    </md-swiper>
    
    <md-swiper :height="200" indicatorPosition="left">
      <md-swiper-item>
        <view class="swiper-item red">左侧指示器</view>
      </md-swiper-item>
      <md-swiper-item>
        <view class="swiper-item blue">左侧指示器</view>
      </md-swiper-item>
      <md-swiper-item>
        <view class="swiper-item green">左侧指示器</view>
      </md-swiper-item>
    </md-swiper>
  </div>
</template>
```

## 垂直方向

使用 `direction` 属性设置垂直方向的轮播。

```vue
<template>
  <div class="swiper-demo">
    <md-swiper :height="300" direction="vertical">
      <md-swiper-item>
        <view class="swiper-item red">垂直轮播 1</view>
      </md-swiper-item>
      <md-swiper-item>
        <view class="swiper-item blue">垂直轮播 2</view>
      </md-swiper-item>
      <md-swiper-item>
        <view class="swiper-item green">垂直轮播 3</view>
      </md-swiper-item>
    </md-swiper>
  </div>
</template>
```

## 自定义指示器

可以通过隐藏默认指示器，使用 `@change` 事件自定义指示器。

```vue
<template>
  <div class="swiper-demo">
    <md-swiper :height="200" :indicator="false" @change="onChange">
      <md-swiper-item>
        <view class="swiper-item red">轮播项 1</view>
      </md-swiper-item>
      <md-swiper-item>
        <view class="swiper-item blue">轮播项 2</view>
      </md-swiper-item>
      <md-swiper-item>
        <view class="swiper-item green">轮播项 3</view>
      </md-swiper-item>
    </md-swiper>
    
    <!-- 自定义指示器 -->
    <div class="custom-indicator">
      <view 
        v-for="(item, index) in 3" 
        :key="index"
        class="indicator-dot"
        :class="{ active: currentIndex === index }"
        @click="setActiveIndex(index)"
      ></view>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentIndex = ref(0)

const onChange = (index) => {
  currentIndex.value = index
}

const setActiveIndex = (index) => {
  currentIndex.value = index
  // 可以通过 v-model 控制轮播切换
}
</script>

<style scoped>
.custom-indicator {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  gap: 8px;
}

.indicator-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #ccc;
  cursor: pointer;
}

.indicator-dot.active {
  width: 20px;
  border-radius: 4px;
  background-color: #007aff;
}
</style>
```

## API

### Swiper Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| modelValue | 当前激活的滑块索引，支持 v-model | `number` | - | `0` |
| autoplay | 是否自动播放 | `boolean` | - | `false` |
| interval | 自动播放间隔时间（毫秒） | `number` | - | `3000` |
| loop | 是否循环播放 | `boolean` | - | `false` |
| indicator | 是否显示指示器 | `boolean` | - | `true` |
| indicatorPosition | 指示器位置 | `string` | `bottom`/`top`/`left`/`right` | `bottom` |
| arrow | 是否显示箭头 | `boolean` | - | `false` |
| width | 滑块宽度 | `string`/`number` | - | - |
| height | 滑块高度 | `string`/`number` | - | - |
| direction | 滑动方向 | `string` | `horizontal`/`vertical` | `horizontal` |
| customClass | 自定义类名 | `string` | - | - |
| customStyle | 自定义样式 | `object` | - | `{}` |

### Swiper Emits

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| update:modelValue | 滑块切换时触发 | `index: number` |
| change | 滑块切换时触发 | `index: number` |
| swiper | 滑动开始时触发 | `index: number` |
| swiperend | 滑动结束时触发 | `index: number` |

### SwiperItem Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| customClass | 自定义类名 | `string` | - | - |
| customStyle | 自定义样式 | `object` | - | `{}` |

## 样式变量

| 变量名 | 默认值 | 说明 |
| --- | --- | --- |
| $md-color-primary | `#007aff` | 激活状态的指示器颜色 |
| $md-transition | `all 0.3s ease` | 过渡动画 |
| $md-size-medium | `16px` | 箭头大小 |

## FAQ

### Q: 如何设置轮播的高度？

A: 使用 `height` 属性设置轮播的高度，可以是数字（像素）或字符串（如 `30vh`）。

```vue
<md-swiper :height="200">...</md-swiper>
<!-- 或 -->
<md-swiper height="30vh">...</md-swiper>
```

### Q: 如何控制自动播放的间隔时间？

A: 使用 `interval` 属性设置自动播放的间隔时间，单位为毫秒。

```vue
<md-swiper autoplay :interval="5000">...</md-swiper>
```

### Q: 如何禁止自动播放？

A: 将 `autoplay` 属性设置为 `false` 即可禁止自动播放。

```vue
<md-swiper :autoplay="false">...</md-swiper>
```

### Q: 如何获取当前轮播的索引？

A: 使用 `@change` 事件监听轮播切换，或通过 `v-model` 绑定当前索引。

```vue
<md-swiper v-model="currentIndex" @change="onChange">...</md-swiper>

<script setup>
import { ref } from 'vue'

const currentIndex = ref(0)

const onChange = (index) => {
  console.log('当前索引:', index)
}
</script>
```

## 浏览器兼容性

| 浏览器 | 版本 |
| --- | --- |
| Chrome | 60+ |
| Firefox | 55+ |
| Safari | 12+ |
| Edge | 79+ |

## 注意事项

1. 轮播容器默认宽度为 100%，高度需要手动设置，否则可能无法正常显示。
2. 当轮播项数量小于等于 1 时，指示器和箭头将不会显示。
3. 在触摸设备上，用户可以通过滑动手势切换轮播项。
4. 自动播放功能在用户交互（触摸或点击）后会暂停，离开页面后恢复。
5. 垂直方向的轮播需要确保容器有足够的高度。