import { createApp } from 'vue'
import App from './App.vue'
import FoodItem from './components/FoodItem.vue'
import Anime from './components/Anime.vue'
const app = createApp(App)
app.component('food-item', FoodItem)
app.component('anime', Anime)
app.mount('#app')
