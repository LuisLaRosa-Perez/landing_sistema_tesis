import { type SVGProps } from 'react'

export default function Google(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            style={{
                flex: 'none',
                lineHeight: 1,
            }}
            {...props}>
            <title>{'Google'}</title>
            <path
                fill="#4285F4"
                d="M12.24 10.24v3.52h4.8c-.2.96-.84 2.32-2.04 3.24-1.24.96-2.88 1.48-4.32 1.48-3.68 0-6.64-2.96-6.64-6.64s2.96-6.64 6.64-6.64c2.04 0 3.48.84 4.28 1.6l3.08-3.08c-1.92-1.8-4.4-2.92-7.36-2.92-6.08 0-11 4.92-11 11s4.92 11 11 11c6.2 0 10.56-4.36 10.56-10.64 0-.72-.08-1.4-.2-2.04h-10.36z"
            />
            <path fill="#34A853" d="M12.24 10.24h-6.64v3.52h6.64z" />
            <path fill="#FBBC05" d="M12.24 6.72v3.52h-6.64v-3.52z" />
            <path fill="#EA4335" d="M12.24 13.76v3.52h-6.64v-3.52z" />
        </svg>
    )
}
