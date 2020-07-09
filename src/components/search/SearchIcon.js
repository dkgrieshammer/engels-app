import React from 'react';
import css from './SearchIcon.module.scss'

export const SearchIcon = () => {
  return (
    <div className={css.searchIcon}>
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9649 11H12.7549L17.7449 16L16.2549 17.49L11.2549 12.5V11.71L10.9849 11.43C9.84488 12.41 8.36488 13 6.75488 13C3.16488 13 0.254883 10.09 0.254883 6.5C0.254883 2.91 3.16488 0 6.75488 0C10.3449 0 13.2549 2.91 13.2549 6.5C13.2549 8.11 12.6649 9.59 11.6849 10.73L11.9649 11ZM2.25488 6.5C2.25488 8.99 4.26488 11 6.75488 11C9.24488 11 11.2549 8.99 11.2549 6.5C11.2549 4.01 9.24488 2 6.75488 2C4.26488 2 2.25488 4.01 2.25488 6.5Z" fill="black" fill-opacity="0.54" />
    </svg>
    </div>
  )
}