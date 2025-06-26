---
layout: false
---

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // 立即重定向到demo应用
  if (typeof window !== 'undefined') {
    window.location.replace('/demo.html')
  }
})
</script>

<template>
  <div style="
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  ">
    <div style="text-align: center; max-width: 400px; padding: 2rem;">
      <div style="
        width: 40px;
        height: 40px;
        border: 4px solid rgba(255, 255, 255, 0.3);
        border-top: 4px solid white;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin: 0 auto 1rem;
      "></div>
      <h2 style="font-size: 1.5rem; margin: 1rem 0; font-weight: 300;">正在跳转到Todo应用...</h2>
      <p style="font-size: 1rem; opacity: 0.8; margin: 1rem 0;">
        如果没有自动跳转，请<a href="/demo.html" style="color: white; text-decoration: underline;">点击这里</a>
      </p>
    </div>
  </div>
</template>

<style>
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* 隐藏VitePress的默认布局 */
.VPNav, .VPLocalNav, .VPFooter, .VPSidebar {
  display: none !important;
}

body {
  margin: 0 !important;
  padding: 0 !important;
}
</style>
