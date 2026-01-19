import { createApp } from 'vue'
import App from './App.vue'
import FoodItem from './components/FoodItem.vue'
import Anime from './components/Anime.vue'
import Pfp from './components/PersonalProfile.vue'
const app = createApp(App)
app.component('pfp', Pfp)
app.component('food-item', FoodItem)
app.component('anime', Anime)
app.mount('#app')
