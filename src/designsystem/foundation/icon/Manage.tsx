import {SVGProps} from "react";

export default function Manage(props: SVGProps<SVGSVGElement>) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="current" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M4 6.28571C4 5.02335 5.02335 4 6.28571 4H10.8571V10.8571H4V6.28571Z" fill="current"/>
            <path d="M13.1429 4H17.7143C18.9767 4 20 5.02335 20 6.28571V10.8571H13.1429V4Z" fill="current"/>
            <path d="M4 13.1429H10.8571V20H6.28571C5.02335 20 4 18.9767 4 17.7143V13.1429Z" fill="current"/>
            <path
                d="M13.1429 16.5714C13.1429 14.6779 14.6779 13.1429 16.5714 13.1429C18.465 13.1429 20 14.6779 20 16.5714C20 18.465 18.465 20 16.5714 20C14.6779 20 13.1429 18.465 13.1429 16.5714Z"
                fill="current"/>
        </svg>
    )
}