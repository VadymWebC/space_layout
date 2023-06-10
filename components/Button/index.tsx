import React, { ReactNode } from 'react'
import Link from 'next/link'
import styles from './style.module.scss'

interface ButtonProps {
    onClick: () => void
    children: ReactNode
}

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
    return <button onClick={onClick}>{children}</button>
}

// interface ButtonProps {}

// export const Button: React.FC<ButtonProps> = () => {
//     return (
//         <div>
//             <span></span>
//         </div>
//     )
// }
