import { ReactNode } from "react";

export interface IButtonProps {
icon: ReactNode,
label:string;
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