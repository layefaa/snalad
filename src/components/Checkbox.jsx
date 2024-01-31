import React from 'react'

const Checkbox = ({ selected }) => {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="radio"
        // value={option.id}
        // onChange={(e) => {
        //   handleChange(e.target.value)
        // }}
        className="hidden"
      />
      <div className={`flex cursor-pointer items-center justify-center`}>
        {selected ? (
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.2688 10.2369C22.7654 8.99544 22.0273 7.88383 21.0729 6.92939C20.1185 5.97494 19.0046 5.2369 17.7654 4.73349C16.5649 4.24601 15.2984 4 14 4C12.7016 4 11.4351 4.24601 10.2369 4.73121C8.99544 5.23462 7.88383 5.97267 6.92939 6.92711C5.97494 7.88155 5.23462 8.99544 4.73349 10.2346C4.24601 11.4351 4 12.7016 4 14C4 15.2984 4.24601 16.5649 4.73121 17.7631C5.23462 19.0046 5.97267 20.1162 6.92711 21.0706C7.88155 22.0251 8.99544 22.7631 10.2346 23.2665C11.4351 23.754 12.7016 24 14 24C15.2984 24 16.5649 23.754 17.7631 23.2688C19.0046 22.7654 20.1162 22.0273 21.0706 21.0729C22.0251 20.1185 22.7654 19.0046 23.2665 17.7654C23.754 16.5649 24 15.2984 24 14C24 12.7016 23.754 11.4351 23.2688 10.2369ZM12.6856 17.3189L9.64692 14.4715L10.2688 13.8064L12.6629 16.0501L17.7198 10.9932L18.3645 11.6378L12.6856 17.3189Z"
              fill="#97DAAA"
            />
            <circle cx="14" cy="14" r="10" fill="white" fill-opacity="0.25" />
            <circle
              cx="14"
              cy="14"
              r="12"
              stroke="#96DAA9"
              stroke-opacity="0.25"
              stroke-width="4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M20.2688 7.2369C19.7654 5.99544 19.0273 4.88383 18.0729 3.92939C17.1185 2.97494 16.0046 2.2369 14.7654 1.73349C13.5649 1.24601 12.2984 1 11 1C9.70159 1 8.43508 1.24601 7.2369 1.73121C5.99544 2.23462 4.88383 2.97267 3.92939 3.92711C2.97494 4.88155 2.23462 5.99544 1.73349 7.23462C1.24601 8.43508 1 9.70159 1 11C1 12.2984 1.24601 13.5649 1.73121 14.7631C2.23462 16.0046 2.97267 17.1162 3.92711 18.0706C4.88155 19.0251 5.99544 19.7631 7.23462 20.2665C8.43508 20.754 9.70159 21 11 21C12.2984 21 13.5649 20.754 14.7631 20.2688C16.0046 19.7654 17.1162 19.0273 18.0706 18.0729C19.0251 17.1185 19.7654 16.0046 20.2665 14.7654C20.754 13.5649 21 12.2984 21 11C21 9.70159 20.754 8.43508 20.2688 7.2369ZM9.68565 14.3189L6.64692 11.4715L7.26879 10.8064L9.66287 13.0501L14.7198 7.99317L15.3645 8.63781L9.68565 14.3189Z"
              fill="#EEEEEE"
            />
          </svg>
        )}
      </div>
    </label>
  )
}

export default Checkbox
