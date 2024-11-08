import { lazy, Suspense } from "react";
const BurgerRestaurantWebsite = lazy(() => import("@/BurgerRestaurantWebsite"));

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BurgerRestaurantWebsite />
    </Suspense>
  );
}
