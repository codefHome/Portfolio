
import Landing from './Landing'
import MyResume from './MyResume'

const ResumeView = () => {
    return (
        <Landing child={<MyResume />} />
    )
}

export default ResumeView