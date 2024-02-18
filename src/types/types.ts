import { ReactNode } from "react";

export interface IButtonProps {
icon?: ReactNode,
label:string;
handleClick?: () => void;
}

export interface IndicativeBoxProps{
    text:string;
}

export interface ArtIconProps{
    color:string;
}

export interface AboutMeCardProps{
    icon:ReactNode;
    title:string;
    url?:string | ReactNode;

}

export interface ProjectCardProps{
    url:string;
    stacks:string;
    gitHubUrl:string;
    image:string;
    title:string;
    
}
export interface ContactMeTypes{
    name:string;
    email:string;
    message:string;
}

export interface TechStackCardProps{
    images:string[],
    stacks:string[],
    description:string;
}

export interface LandingTypes {
    isResumeVisible:boolean;
    isHomeVisible:boolean;
    isWorkVisible:boolean;
    isExperienceVisible:boolean;
  }

  export interface Experience {
    companyName: string
    title: string
    companyDescription: string
    companyLink: string
    startYear: string
    endYear: string
    projects: Project[]
  }
  
  export interface Project {
    ProjectName: string
    location: string
    workType: string
    role: string
    startDate: string
    endDate: string
    projectDescription: string
    responsibility: string[]
    technologies: string
  }

  export interface ContactMeProps {
    targetRef: React.RefObject<HTMLDivElement>;
  }
  export interface HomeProps{
    handleSayHello: () => void;
  }