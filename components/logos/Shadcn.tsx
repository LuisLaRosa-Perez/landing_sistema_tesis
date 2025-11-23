import { type SVGProps } from 'react'

export default function Shadcn(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
                flex: 'none',
                lineHeight: 1,
            }}
            {...props}>
            <title>{'Shadcn UI'}</title>
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.05 19.44 4 16.07 4 12C4 7.93 7.05 4.56 11 4.07V19.93ZM13 4.07V19.93C16.95 19.44 20 16.07 20 12C20 7.93 16.95 4.56 13 4.07Z" fill="currentColor"/>
        </svg>
    )
}
