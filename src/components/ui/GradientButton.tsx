import React from "react";
import {GradientButtonProps} from "@/types/components";


const GradientButton: React.FC<GradientButtonProps> = ({
                                                           children,
                                                           variant = "border",
                                                           size = "md",
                                                           className = "",
                                                           ...props
                                                       }) => {
    const sizeClasses = {
        sm: "px-5 py-2 text-sm",
        lg: "px-4 py-2 text-xl md:px-10 md:py-4 md:text-2xl",
    };

    if (variant === "border") {
        return (
            <div
                className="inline-block rounded-[60px] xl:rounded-[91px] p-[2px] bg-[linear-gradient(108.88deg,#B53EA4_-2.82%,#FC6F32_34.48%,#FF4A59_93.08%)]">
                <button
                    className={`rounded-[60px] xl:rounded-[91px] cursor-pointer bg-black text-white font-inter font-normal transition border-none hover:bg-[linear-gradient(106.2deg,#963488_-12.33%,#FC6F32_50.28%,#FF4A59_114.17%)] hover:text-white ${sizeClasses[size]} ${className}`}
                    type="button"
                    {...props}
                >
                    {children}
                </button>
            </div>
        );
    }

    return (
        <button
            className={`rounded-[60px] xl:rounded-[91px] cursor-pointer bg-transparent text-white font-inter font-normal transition border-none hover:bg-clip-text hover:text-transparent hover:[background-image:linear-gradient(106.2deg,#963488_-12.33%,#FC6F32_50.28%,#FF4A59_114.17%)] ${sizeClasses[size]} ${className}`}
            type="button"
            {...props}
        >
            {children}
        </button>
    );
};

export default GradientButton; 