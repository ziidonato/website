import { AboutView, ExperienceView, HomeView, ProjectsView } from './components/Views'
import './styles/globals.scss'

function App() {
  return (
    <div className={"w-full h-full items-center overflow-y-scroll"}>
      <HomeView />
      <ExperienceView />
      <ProjectsView />
      <AboutView />
    </div>
  )
}

export default App
