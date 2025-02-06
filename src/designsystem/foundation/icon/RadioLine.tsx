import {SVGProps} from "react";

export default function RadioLine(props: SVGProps<SVGSVGElement>) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="current" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M21 11.636C21 16.6066 16.9706 20.636 12 20.636C7.02944 20.636 3 16.6066 3 11.636C3 6.66548 7.02944 2.63605 12 2.63605C16.9706 2.63605 21 6.66548 21 11.636ZM12 19.136C16.1421 19.136 19.5 15.7782 19.5 11.636C19.5 7.49391 16.1421 4.13605 12 4.13605C7.85786 4.13605 4.5 7.49391 4.5 11.636C4.5 15.7782 7.85786 19.136 12 19.136Z"
                  fill="current"/>
        </svg>
    )
}