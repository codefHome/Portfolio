import { Suspense } from "react"
import Landing from "./Landing"
import MyExperience from "./MyExperience"


const ExperienceView = () => {
    return (
       <Suspense>
<Landing child={<MyExperience />} />
       </Suspense> 
    )
}

export default ExperienceView