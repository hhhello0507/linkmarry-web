import {SVGProps} from "react";

export default function HeartLine(props: SVGProps<SVGSVGElement>) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="current" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M11.3717 6.19187C9.9062 4.15715 7.12261 3.84893 5.28455 5.48953C3.40776 7.16469 3.29227 10.1685 5.04169 11.9959L12.4 19.4144L19.7582 11.9959C21.5077 10.1685 21.3922 7.1647 19.5154 5.48954C17.6773 3.84892 14.8938 4.15715 13.4283 6.19188L13.1303 6.60565C12.9611 6.84047 12.6894 6.97964 12.4 6.97964C12.1106 6.97964 11.8388 6.84047 11.6697 6.60565L11.3717 6.19187ZM12.4 4.60418C14.5675 2.20308 18.2392 1.93773 20.714 4.14664C23.3575 6.50614 23.5088 10.6892 21.0517 13.2476L21.0416 13.258L13.57 20.7909C12.9262 21.4543 11.8737 21.4543 11.23 20.7909L3.75836 13.258L3.7482 13.2476C1.29122 10.6892 1.44244 6.50615 4.08594 4.14665C6.56072 1.93772 10.2325 2.20308 12.4 4.60418Z"
                  fill="current"/>
        </svg>
    )
}