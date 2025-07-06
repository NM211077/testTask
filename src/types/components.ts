import {ButtonHTMLAttributes, ReactNode} from "react";

export type HeroSectionProps = {
    handleSectionChange: (id: string) => void;
    scrollDirection: 'up' | 'down' | null;
    activeSection: string;
};

export type StaticButtonsSectionProps = {
    show?: boolean;
};

export type GradientButtonProps = {
    children: ReactNode;
    variant?: "border" | "text";
    size?: "sm" | "lg";
    className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type DeviceType = "sm" | "md" | "lg" | "xl" | "2xl";

export type ObserverSectionProps = {
    id: string;
    onInView: (id: string, inView: boolean) => void;
    children: ReactNode;
    className?: string;
}