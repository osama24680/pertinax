import Home from "./Pages/Home/Home"
import Trainings from "./Pages/Trainings/Trainings"
import ExerciseDetails from "./Pages/ExerciseDetails/ExerciseDetails"
import { Routes, Route } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="Trainings" element={<Trainings />} />
        <Route path="ExerciseDetails/:id" element={<ExerciseDetails />} />
      </Routes>

    </div>
  );
}

export default App;


// trainings => useEffect
// Muscles => useEffect
// Muscles => useEffect
// ExerciseDetails => useEffect