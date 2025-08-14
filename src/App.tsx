import { Header } from "./components/header";
import { WorkoutCard } from "./components/workout-card";

function App() {
  return (
    <>
      <Header />
      <WorkoutCard
          id="1"
          title="FitDance"
          date="20/02/2026"
          durationMinutes={60}
          intensity={4}
        />
    </>
  );
}

export default App;
