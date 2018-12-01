<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Главная</router-link> | 
      <router-link to="/page/repair">Ремонт</router-link> | 
      <router-link to="/page/sewing">Пошив</router-link> | 
      <router-link to="/page/price">Цены</router-link> | 
      <router-link to="/page/contacts">Контакты</router-link> | 
      <router-link to="/page/work">Работы</router-link> | 
      <router-link to="/page/vacancy">Вакансии</router-link> | 
      <router-link to="/page/about">О нас</router-link> | 

    </div>
    <router-view/>
  </div>
</template>

<style>
</style>
