import React from 'react'

const defaultWidth = "2rem"
const defaultHeight = "2rem"

export function ArrowDown({ width = defaultWidth, height = defaultHeight }) {
    return (
        <svg className="svg-icon svg-arrow-down" width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 12L18.59 10.59L13 16.17V4H11V16.17L5.42 10.58L4 12L12 20L20 12Z" fill="#4F4F4F" />
        </svg>

    )
}

export function ArrowUp({ width = defaultWidth, height = defaultHeight }) {
    return (
        <svg className="svg-icon svg-arrow-up" width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12L5.41 13.41L11 7.83V20H13V7.83L18.58 13.42L20 12L12 4L4 12Z" fill="#4F4F4F" />
        </svg>

    )
}

export function CaretUp({ width = defaultWidth, height = defaultHeight }) {
    return (
        <svg className="svg-icon svg-caret-up" width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.41 15.7049L12 11.1249L16.59 15.7049L18 14.2949L12 8.29492L6 14.2949L7.41 15.7049Z" fill="#4F4F4F" />
        </svg>
    )
}

export const CaretDown = ({ width = defaultWidth, height = defaultHeight }) => (
    <svg className="svg-icon svg-caret-down" width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.41 8.29492L12 12.8749L16.59 8.29492L18 9.70492L12 15.7049L6 9.70492L7.41 8.29492Z" fill="#4F4F4F" />
    </svg>
)

export const Close = ({ width = defaultWidth, height = defaultHeight }) => (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#4F4F4F" />
    </svg>
)

export const Icon = ({ children, label }) => (
    <span className={label} role="img" aria-label={label + ' icon'}>
        {children}
    </span>
)

export const SearchIcon = ({ width = defaultWidth, height = defaultHeight }) => (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.965 14.255H15.755L20.745 19.255L19.255 20.745L14.255 15.755V14.965L13.985 14.685C12.845 15.665 11.365 16.255 9.755 16.255C6.165 16.255 3.255 13.345 3.255 9.755C3.255 6.165 6.165 3.255 9.755 3.255C13.345 3.255 16.255 6.165 16.255 9.755C16.255 11.365 15.665 12.845 14.685 13.985L14.965 14.255ZM5.255 9.755C5.255 12.245 7.26501 14.255 9.755 14.255C12.245 14.255 14.255 12.245 14.255 9.755C14.255 7.26501 12.245 5.255 9.755 5.255C7.26501 5.255 5.255 7.26501 5.255 9.755Z" fill="black" fill-opacity="0.54" />
    </svg>
)

export const Checkbox = ({ width = defaultWidth, height = defaultHeight }) => (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3ZM19 19V5H5V19H19Z" fill="black" fill-opacity="0.54" />
    </svg>
)

export const CheckboxChecked = ({ width = defaultWidth, height = defaultHeight }) => (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM16.58 7.58L17.99 9L9.99 17L5.99 13.01L7.41 11.6L9.99 14.17L16.58 7.58Z" fill="black" fill-opacity="0.54" />
    </svg>
)

export const Filter = ({ width = defaultWidth, height = defaultHeight }) => (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 6V8H21V6H3ZM10 18H14V16H10V18ZM18 13H6V11H18V13Z" fill="black" fill-opacity="0.54" />
    </svg>

)

export const Checkmark = () => (
    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 1.42L10.59 0L4 6.59L1.42 4.02L0 5.43L4 9.42L12 1.42Z" fill="#DADADA" />
    </svg>
)