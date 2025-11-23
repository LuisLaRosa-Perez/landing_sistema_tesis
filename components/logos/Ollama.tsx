import { type SVGProps } from 'react'

export default function Ollama(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            width="1em"
            style={{
                flex: 'none',
                lineHeight: 1,
            }}
            {...props}>
            <title>{'Ollama'}</title>
            <path d="M12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4Z" fill="#000000"/>
            <path d="M9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10V14C15 15.6569 13.6569 17 12 17C10.3431 17 9 15.6569 9 14V10Z" fill="#FFFFFF"/>
        </svg>
    )
}
