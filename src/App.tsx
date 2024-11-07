import BurgerRestaurantWebsite from './BurgerRestaurantWebsite.tsx'
// i don't even know why i have this config here
const theme = {
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true
  }
}

export default function App() {
  return (
    <BurgerRestaurantWebsite />
  )
}
