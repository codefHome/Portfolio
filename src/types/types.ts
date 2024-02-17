import { ReactNode } from "react";

export interface IButtonProps {
icon: ReactNode,
label:string;
onEnter?: () => void;
onLeave?: () => void;
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