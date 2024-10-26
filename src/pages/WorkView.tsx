import Landing from "./Landing"
import MyWork from "./MyWork"


const WorkView = () => {
    return (
        <Landing child={<MyWork />} />
    )
}

export default WorkView