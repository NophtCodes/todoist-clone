import React, {useState} from 'react';
import { useSelectedProjectValue, useProjectsValue } from '../context';
import { IndividualProject } from './IndividualProject';
export const Projects = ({activeValue = null}) => {
    const [active, setActive] = useState(activeValue);
    const {setSelectedProject} = useSelectedProjectValue();
    const { projects } = useProjectsValue();
    
    return(
        projects &&
        projects.map(project => (
            <li key={project.projectId}
            data-doc-id={project.docId}
            data-testid='project-action'
            className={active === project.projectId ? 'active sidebar__project' : 'sidebar__project'} 
            onClick={() => {
                setActive(project.projectId);
                setSelectedProject(project.projectId);
            }}
            onKeyDown={() => {
                setActive(project.projectId);
                setSelectedProject(project.projectId);
            }}><IndividualProject project={project} /></li>
        ))
    )
};

export default Projects;