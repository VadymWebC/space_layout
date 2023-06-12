import React, { ReactNode } from 'react'
import Link from 'next/link'
import styles from './style.module.scss'

interface ButtonProps {
    onClick: () => void
    children: ReactNode
}

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
    return (
        <button className={styles.button} onClick={onClick}>
            <span className={styles.buttonText}>{children}</span>
            <svg viewBox="0 0 31.96 55.75" className={styles.buttonBorderLeft}>
                <path
                    className={styles.buttonLine}
                    d="M31.95,54.75h-2.19s-8-4.5-8-4.5H1V5.75H31.95"
                />
                <path
                    className={styles.buttonArrow}
                    d="M4,8.83s1.23,0,12.22,0L4,20.54s0-11.71,0-11.71Z"
                />
            </svg>
        </button>
    )
}
