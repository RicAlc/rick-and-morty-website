import React from 'react';

function PortalSvg(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      style={{ width: 'inherit', height: 'inherit' }}
      fill='none'
      viewBox='0 0 400 400'
      {...props}
    >
      <g id='portal'>
        <path
          id='Base'
          fill='#77F93A'
          stroke='#77F93A'
          strokeLinecap='round'
          strokeWidth='3'
          d='M98.18 77.188c-3.713 1.144-24.129 17.046-28.51 22.014-5.564 2.785-9.896 13.921-14.347 18.28-10.427 13.702-26.348 82.065-22.824 99.235 3.525 17.17 2.214 15.212 3.913 21.545 1.15 4.285.888 8.455 3.079 12.325 4.38 7.737 9.067 15.065 12.467 23.333.94 2.283 1.813 3.304 3.33 4.822 1.88 1.883 2.665 4.669 3.967 6.95 7.973 13.969 19.508 27.921 33.01 36.737 2.277 1.487 3.96 4.606 6.234 5.744 1.839.921 4.06 1.319 5.738 2.554 4.742 3.491 8.553 8.178 13.636 11.276 2.901 1.768 5.43 2.827 8.111 5.213 2.026 1.802 4.646 2.743 6.942 4.148 3.242 1.984 5.977 1.639 9.78 2.518 9.937 2.296 21.46 3.053 31.301 5.812 5.741 1.609 55.088-3.727 60.926-2.266 3.214-1.379 6.829-2.608 10.201-3.546 3.298-.917 5.627-3.447 8.89-4.468 2.184-.683 4.285-.677 6.482-1.667 4.05-1.824 7.879-4.094 11.936-5.921 1.158-.522 2.373-.39 3.613-.39 2.175 0 4.011-.909 6.056-1.561 4.197-1.336 6.979-4.104 11.122-4.858 2.539-.462 4.805-3.451 6.978-4.68 3.09-1.749 5.808-3.652 8.642-5.78 2.052-1.541 4.49-2.511 6.411-4.22 2.761-2.458 4.069-5.875 6.056-8.936 1.614-2.485 4.106-3.97 5.774-6.418 2.192-3.219 4.908-6.164 7.367-9.184 3.953-4.858 17.611-36.757 21.485-41.869 1.075-3.51 5.726-11.433 6.521-15.015.81-3.652 1.205-9.391 1.956-13.058 2.374-11.587-.452-16.745 2.482-31.337 1.631-4.994 1.279-9.692 0-14.073-1.517-5.195-3.544-10.362-4.959-15.46-2.719-9.799-4.833-19.191-8.43-28.794-3.195-8.531-12.901-15.134-15.442-23.404-1.004-3.264-3.413-5.242-5.101-8.014-2.401-3.943-5.31-7.875-8.146-11.489-2.223-2.832-4.185-4.425-6.871-6.666-2.666-2.224-6.366-2.993-8.926-5.46-4.984-4.806-9.922-8.887-15.797-12.944-4.616-3.187-9.754-5.87-14.628-8.581-1.98-1.101-5.947-2.735-7.332-4.468-.707-.885-4.854-1.494-6.021-1.915-2.571-.927-5.317-1.57-7.969-2.234a815.168 815.168 0 01-12.432-3.191c-8.737-2.333-17.568-4.065-26.352-6.064-10.686-2.431-20.659 1.614-31.027 2.872-18.273 2.218-36.648 6.994-53.944 12.766-4.122 1.376-8.564 4.533-12.396 6.702-3.738 2.115-9.075 4.502-12.184 7.376-1.95 1.801-8.038 4.868-10.768 5.709z'
        ></path>
        <g id='centro' strokeLinecap='round'>
          <path
            id='centro-oscuro'
            fill='#54EA0F'
            stroke='#54EA0F'
            d='M110.18 243.647c1.829 2.094 3.894 3.997 5.859 5.963.558 2.975.057 6.788 2.048 8.97 1.264 1.384 3.026 2.796 4.485 3.992 1.085.89 2.706.797 3.474 1.919 2.139 3.12 3.198 6.906 5.756 9.748.854.949 1.835 1.793 2.644 2.748 4.32 5.095 8.284 6.159 14.311 8.063 4.268 1.347 9.024 2.809 13.481 3.526 3.442.553 6.011 1.865 9.204 3.162 2.65 1.077 6.293.865 9.074.778 4.741-.148 9.4-1.162 14.129-1.348 3.575-.14 7.158.065 10.733-.052 8.198-.269 15.855-4.177 23.955-5.003 6.184-.631 14.412 1.356 19.859-2.334 3.036-2.056 6.547-4.042 8.815-7 2.226-2.904 5.221-5.246 7.881-7.725 2.185-2.036 3.707-4.894 6.015-6.741 3.042-2.434 6.247-4.604 9.929-5.911 2.342-.831 4.017-1.941 5.704-3.811 2.749-3.046 3.565-6.874 4.693-10.707 1.091-3.71 2.858-6.805 3.24-10.707.867-8.84-1.75-18.462-3.266-27.222-.52-3-.844-5.858-.674-8.918.163-2.943 1.518-5.352 2.255-8.115.485-1.82-1.479-5.19-2.281-6.637-1.476-2.662-1.942-5.238-2.904-8.037-1.709-4.972-5.657-9.352-7-14.414-1.291-4.868-5.007-8.478-7.778-12.522-1.922-2.808-3.496-6.576-6.766-8.115-4.148-1.952-9.013-.362-12.911-3.163-6.18-4.442-11.129-11.068-15.529-17.214-1.892-2.643-4.006-5.43-6.793-7.208-4.195-2.677-9.071-2.37-13.844-2.333-6.978.054-14.809.258-21.103 3.63-2.705 1.448-4.884 4.056-7.674 5.236-2.899 1.227-6.071 1.95-9.022 3.163-7.307 3.005-16.383 3.224-22.633 8.322-5.261 4.292-10.183 8.72-14.726 13.767-5.138 5.709-11.079 10.665-14.44 17.707-3.23 6.766-9.921 10.933-13.43 17.448-1.565 2.907-2.094 6.661-3.111 9.8-1.012 3.125-1.4 5.861-1.4 9.125 0 7.106-1.044 12.718-4.303 19.237-2.476 4.952-2.696 9.075-2.696 14.518 0 2.643-.097 5.213 1.037 7.674 1.171 2.545 3.872 4.643 5.703 6.741z'
          ></path>
          <path
            id='centro-claro'
            fill='#78FF39'
            stroke='#78FF39'
            d='M177.65 189.838c-3.07 9.333-8.682 6.396-16.714 6.396-1.213-4.244-.497-8.271 2.302-11.47 1.484-1.695 6.122-21.05 1.566-20.594-2.514.251-6.517 7.978-8.303 9.636-1.845 1.714-3.108 4.737-5.116 5.884-2.681 1.532-10.225 2.098-10.575 5.074-.53 4.502 3.101 10.168 0 13.432-1.916 2.016-3.52.075-5.586-.384-3.964-.881-7.023-6.062-10.896-5.693-2.088.199-8.675 5.813-8.675 8.806 0 4.912 3.415 8.015 6.524 11.469 8.114 9.016 15.174 16.83 26.692 21.149 5.947 2.23 11.327 4.84 17.439 6.61 3.203.927 5.854 1.967 2.132 3.07-5.037 1.492 2.898 4.387-2.33 4.387-.653 0-17.843-.883-18.563-.678-1.347.385-1.312 4.643-1.578 5.756 1.209 11.896 4.151 11.48 10.532 15.265 8.237 4.886 15.133 8.23 24.987 8.102 7.142-.093 9.857-6.683 13.985-11.342 4.956-5.593 9.454-11.625 14.583-17.056 2.536-2.685-.442 8.57 3.711 8.57 5.515 0 17.175-16.153 18.547-9.295.636 3.181 1.825 6.173 2.728 9.295 1.203 4.155 2.903 8.064 4.52 12.067.518 1.283 1.479 5.611 3.198 6.14 2.936.904 7.595.17 10.703.086 3.682-.1 4.574-.927 5.116-4.179 1.6-9.601 2.9-19.233 2.9-28.995 0-7.376 9.737-8.556 9.737-15.933 0-7.03-7.437-18.997-5.942-25.725 1.454-6.544 5.462-6.465 10.404-9.21 3.356-1.865 1.013-5.755-.427-8.357-2.152-3.891-4.292-4.513-7.803-6.268-7.516-3.758-16.74-3.487-24.73-5.884-3.376-1.013-5.347-3.894-7.931-6.055-1.009-.843-3.667-1.45-3.667-1.45s7.186-.146 10.745-.597c2.392-.303 7.612-.489 8.485-3.283.853-2.728.561-5.716-.895-8.144-3.44-5.733-9.601-6.768-15.606-8.699-7.325-2.354-13.827-3.753-21.491-4.605-15.241-1.693-31.236-3.902-44.344 5.97-6.418 4.833-4.439 5.487-.682 11.939 2.562 4.4 5.253 7.235 9.892 9.125 6.788 2.765 2.055 20.717.426 25.668z'
          ></path>
        </g>
        <g
          id='verdeclaro'
          fill='#4ACE10'
          stroke='#4ACE10'
          strokeLinecap='round'
        >
          <path
            id='Vector 2'
            d='M77.616 119.315c-5.089 14.19-16.042 23.265-26.834 34.236-7.558 3.714.036 4.954 4.77 5.196 5.491.282 9.289-7.434 11.86-10.796 2.47-3.227 4.61-7.125 6.295-10.796.907-1.976 3.648-3.657 5.433-4.966 4.139-3.032 7.315-6.847 11.397-9.93 4.776-3.607 11.952-3.919 16.962-6.697 6.112-3.389 7.2-4.619 14.842-4.619 4.883 0 7.389-2.505 10.005-5.485 5.88-6.7 18.034-11.216 26.105-15.588 9.842-5.33 22.717-4.72 33.461-7.217 12.217-2.839 25.535-2.15 37.502-6.004 8.232-2.651 17.436-4.157 26.437-4.157 4.458 0 7.386.987 11.728 1.847 11.085 2.195 16.966 12.399 28.358 15.011 6.507 1.492 4.246 8.364 5.367 12.76 1.469 5.759 2.319 12.213 2.319 18.186 0 4.87 4.349 5.941 7.753 8.314 3.474 2.422 5.655 5.909 8.679 8.545 1.401 1.22 4.874 3.365 5.036 5.196.664 7.525 7.156 14.144 7.156 21.593 0 4.564-3.073 28.507 5.367 24.421 5.735-2.776 5.239-8.338 7.487-12.99 1.195-2.472-.476-11.685-1.524-14.607-1.09-3.041-1.074-6.764-1.723-9.872-1.362-6.53-1.142-13.394-2.716-19.977-1.385-5.79-4.061-11.494-5.963-17.089-2.227-6.549-3.985-18.561-10.734-22.632-3.245-1.957-6.789-3.569-9.873-5.658-2.446-1.658-6.685-1.366-9.607-3.233-8.323-5.319-13.131-7.461-23.191-8.776-1.439-.188-8.429-6.31-6.493-7.275 3.268-1.627 11.272 1.19 14.949.87 9.859-.859-8.481-3.94-11.106-3.987-7.723-.138-15.469-2.213-22.992-3.638-4.928-.933-11.357-2.782-16.365-1.328-5.239 1.522-9.837 4.666-15.24 5.774-14.817 3.038-30.149-2.887-44.724-2.887-11.659 0-20.365 2.733-31.34 6.005-10.494 3.128-20.398 6.342-28.425 13.336-8.131 7.085-18.461 14.335-28.557 19.11-9 4.258-9.27 12.579-11.86 19.804z'
          ></path>
          <path
            id='Vector 3'
            d='M322.788 280.323c5.09-14.191 16.043-23.266 26.835-34.237 7.558-3.713-.037-4.953-4.771-5.196-5.491-.281-9.288 7.435-11.86 10.797-2.469 3.227-4.609 7.125-6.295 10.796-.906 1.976-3.648 3.657-5.433 4.965-4.138 3.033-7.314 6.848-11.396 9.931-4.776 3.606-11.953 3.919-16.962 6.697-6.113 3.389-7.2 4.619-14.842 4.619-4.884 0-7.39 2.504-10.005 5.485-5.881 6.7-18.035 11.216-26.106 15.588-9.841 5.331-22.717 4.72-33.46 7.217-12.217 2.838-25.535 2.15-37.503 6.004-8.231 2.651-17.436 4.157-26.437 4.157-4.458 0-7.385-.988-11.727-1.847-11.085-2.196-16.966-12.399-28.359-15.011-6.506-1.492-4.246-8.364-5.367-12.76-1.469-5.76-2.319-12.214-2.319-18.186 0-4.87-4.348-5.941-7.752-8.314-3.474-2.422-5.656-5.91-8.68-8.545-1.4-1.221-4.874-3.365-5.035-5.196-.665-7.525-7.156-14.144-7.156-21.593 0-4.564 3.073-28.507-5.367-24.422-5.735 2.776-5.24 8.338-7.487 12.991-1.195 2.472.475 11.685 1.523 14.607 1.091 3.041 1.075 6.764 1.723 9.872 1.363 6.53 1.143 13.394 2.717 19.976 1.384 5.791 4.06 11.495 5.963 17.09 2.227 6.549 3.985 18.561 10.734 22.632 3.244 1.957 6.789 3.568 9.872 5.658 2.447 1.658 6.686 1.366 9.608 3.233 8.323 5.318 13.131 7.461 23.19 8.776 1.44.188 8.429 6.311 6.494 7.274-3.268 1.628-11.272-1.19-14.949-.87-9.86.859 8.48 3.941 11.106 3.988 7.722.137 15.469 2.212 22.991 3.637 4.928.934 11.358 2.783 16.366 1.328 5.239-1.521 9.837-4.666 15.239-5.773 14.817-3.038 30.15 2.887 44.725 2.887 11.659 0 20.365-2.733 31.34-6.005 10.494-3.128 20.397-6.342 28.425-13.337 8.131-7.084 18.461-14.334 28.557-19.11 9-4.257 9.269-12.578 11.86-19.803z'
          ></path>
        </g>
        <g id='amarillo' fill='#C2FF3B' stroke='#C2FF3B' strokeLinecap='round'>
          <path
            id='Vector 14'
            d='M85.492 117.488c-2.348 4.834-8.398 10.414-8.398 15.735 0 2.256-6.89 8.131-6.89 10.356 0 1.844 2.994-2.374 4.567-3.466 1.61-1.117 2.984-2.161 4.418-3.513 3.84-3.625 6.023-8.234 8.984-12.507 3.092-4.463 6.387-8.497 8.884-13.21 3.971-7.495 5.883-16.141 12.061-22.296 2.832-2.822 4.503-7.507 8.934-8.104 3.816-.514 7.874-3.622 11.218-5.2 3.809-1.797 7.188-4.135 11.118-5.901 2.733-1.229 5.917-2.047 8.438-3.56 1.729-1.04-10.495.473-12.905 1.217-6.89 2.128-13.099 4.115-19.308 7.682-10.869 6.244-20.244 16.072-24.668 27.262-2.05 5.183-4.01 10.474-6.453 15.505z'
          ></path>
          <path
            id='Vector 15'
            d='M153.007 99.41c-4.85.609-12.063 5.385-17.571 5.105 3.304-4.573 1.862-5.775 2.482-7.401.501-1.315 2.813-2.35 3.772-3.935 1.143-1.888 8.425-5.256 10.721-5.527 8.131-.96 16.344-2.725 24.271-4.684 6.077-1.502 11.752-1.51 17.769-2.53 7.337-1.243 14.547-2.904 21.988-2.904h18.563c4.846 0 8.203 1.973 12.607 4.028 8.359 3.9 14.556 3.948 23.18 5.2 9.183 1.333 18.368 1.615 25.015 8.853 2.047 2.228 4.791 3.645 6.502 6.183 1.238 1.835 2.014 3.885 3.574 5.527 2.774 2.92 3.007 7.85 5.112 11.383 2.952 4.952 4.914 11.592 4.914 17.425 0 3.945 2.03 19.906-1.787 22.156-3.296 1.945.618 12.43-1.786 15.833-.148.209-3.885-8.27-4.07-8.713-1.515-3.616-2.083-7.53-3.574-11.148-1.401-3.399-1.721-7.038-3.077-10.399-1.463-3.623-4.364-6.687-5.758-10.258-3.918-10.037-10.639-17.086-20.35-22.344-8.515-4.61-15.845-8.886-25.76-10.446-9.545-1.5-20.601-1.116-30.327-1.358-14.945-.371-29.87-.843-44.869-.843-7.29 0-14.343-.11-21.541.796z'
          ></path>
          <path
            id='Vector 16'
            d='M215.594 314.956c-11.685 0-22.46.147-34-.843 0-2.426-3.268-8.942-8.04-6.558-3.771 1.884-13.252 4.137-16.479.656-2.372-2.558 2.857-7.573 5.361-8.432 1.451-.498 2.64-.787 4.169-.843 1.774-.064 1.771-1.314 2.978-1.639.883-.239 5.302-1.649 5.162-1.687-2.302-.62-6.881-.352-9.232.141-10.36 2.173-21.444 1.151-31.965 2.998-4.686.823-6.885 2.983-4.467 7.776 2.682 5.314 5.091 11.642 9.53 15.832 1.813 1.711 4.362 2.558 6.254 4.31 2.145 1.985 4.756 5.608 7.644 6.698 1.67.631 3.49-.646 5.162-.703 4.059-.136 8.15 0 12.21 0 15.319 0 30.233-2.529 45.514-2.529h22.038c4.262 0 15.728 1.995 18.514-1.218 3.732-4.305 10.854-5.173 10.522-10.961-.45-7.864-3.472-13.811-9.778-19.018l-.098-.081c-3.391-2.8-4.722-3.9-8.886-3.338-1.301.175-7.967-.309-5.41.093 2.941.463 6.455 5.593 8.041 7.963 2.26 3.377-2.786 8.344-6.204 8.854-1.943.289-2.259 2.529-4.517 2.529h-24.023z'
          ></path>
          <path
            id='Vector 19'
            d='M106.716 147.398c-4.398-4.612-10.067 22.495-10.522 23.421-.28.461-.536 6.835-.944 10.492-.329 2.95-2.64 7.22 1.39 5.106 2.034-1.066 4.293-2.342 5.41-4.356 1.416-2.551 1.946-10.005 1.946-12.862 0-6.546 4.903-8.347 4.705-14.869-.035-1.184-1.137-6.043-1.985-6.932z'
          ></path>
          <path
            id='Vector 17'
            d='M58.193 215.95c0-2.889.812-11.476-3.573-11.476.715-.608 7.71-2.786 8.487-3.373 2.818-2.127 2.202-5.902 6.254-5.902 4.919 0 2.858 3.689 2.035 7.401-1.318 5.942-3.348 11.815-4.467 17.8-1.094 5.847 2.309 12.52 4.666 18.081 1.588 3.748 5.393 5.885 7.147 10.024 1.231 2.905 1.228 6.441 2.68 9.181.916 1.728 2.68 1.886 2.68 4.122 0 6.744-2.62 14.414-.695 21.079.397 1.373 2.56 1.771 1.39 1.686-1.797-.13-4.978-1.219-6.055-2.717-3.33-4.632-5.621-11.115-8.04-16.254-2.481-5.267-3.945-10.489-5.758-16.113-1.508-4.674-3.719-11.346-4.07-16.161-.206-2.817-2.055-5.184-2.482-7.963-.474-3.08-.199-6.31-.199-9.415z'
          ></path>
          <path
            id='Vector 18'
            d='M326.219 237.357c-3.604 2.181-10.195 2.529-14.295 2.529-1.097 2.07-1.787 3.305-1.787 5.855 0 2.717-3.165 3.998-1.588 7.636.91 2.1 1.683 3.75 1.588 6.089-.026.634-1.913 1.499-1.241 1.499 3.44 0 9.774-3.205 12.458-4.872 2.894-1.796 6.75-.92 9.828-2.857 4.555-2.866 5.45-7.962 8.438-11.664 2.926-3.624-.247-10.14 1.34-14.333 1.951-5.157 3.508-10.94 3.971-16.395.401-4.73-1.465-8.868-1.738-13.49-.224-3.809-.72-8.627-2.183-12.179-1.252-3.038-3.985-4.219-6.949-5.809-.632-.339-9.53-2.15-9.53-.562 0 1.7 2.288 4.328 2.978 5.809 1.44 3.087 2.221 6.318 3.177 9.555 2.153 7.293 3.573 14.505 3.573 22.11 0 9.11.544 15.881-8.04 21.079z'
          ></path>
        </g>
        <g id='verdeoscuro'>
          <path
            id='Vector 6'
            fill='#009600'
            stroke='#009600'
            strokeLinecap='round'
            d='M99.705 133.834c.739 2.292 2.613 4.641 4.172 6.181 1.51 1.491 1.091 1.818.67 4.415-.665 4.107-.204 5.248 1.341 8.683 1.805 4.01.79-3.851.82-5.519.028-1.61.623-7.857 1.489-8.903.583-.704 6.442-4.302 5.736-5.298-3.106-4.384-2.533-10.295-2.533-15.379 0-5.508 7.727-7.175 11.547-9.271 5.844-3.207 11.93-5.639 17.728-8.756 5.592-3.007 11.647-4.715 17.133-7.8 6.004-3.376 9.651-7.94 16.314-9.713 6.459-1.718 11.492-4.177 18.176-3.385 10.639 1.261 20.61 3.164 31.36 3.164h22.869c7.139 0 15.392.065 22.124 2.281 3.285 1.082 7.266 1.903 9.982 4.342 1.54 1.383 1.388 3.698 1.75 5.665.362 1.966.877 6.422 2.347 7.874 1.34 1.323 3.365 3.058 4.32 4.709 2.576 4.453 6.393 2.281 10.205 2.281h6.034c1.066 0 7.309-.474 3.874-.662-2.266-.125-6.646-1.729-8.716-2.649-3.362-.415-1.615-5.285-4.693-5.96-2.671-.587-3.806-9.787-4.022-11.92-.214-2.108-2.031-8.705-3.501-9.934-3.505-2.93-3.943-8.265-6.853-11.663-2.524-2.946-3.976-6.18-7.785-7.873-1.856-.825-9.928-4.715-7.71-.331 2.301 4.546 7.004 4.617 8.661 9.528.636 1.884.516 11.513-.653 9.897-1.139-1.575-6.73-2.393-7.256-4.215-.525-1.812-18.145-2.41-20.79-2.591-4.314-.294-9.4 1.656-13.726 1.656-.626 0-8.079-3.545-8.079-4.746 0-.983 5.299-1.133 5.922-1.325 2.954-.912 4.101-4.815 7.19-5.779 2.841-.886 6.472-.71 13.051-1.469 2.769.048 6.365-.662.298-1.95-1.843-.843-1.425-1.655-3.315-1.655-4.613 0-9.019-1.417-13.855-.331-4.326.97-9.143.413-13.334 2.023-5.251 2.017-11.49 4.546-16.09 7.726-4.925 3.405-10.034 6.98-15.42 9.64-3.112 1.537-5.925 1.463-9.013 3.016-.603.304-3.482 1.856-4.162 1.251-1.902-1.69 5.752-5.96-2.915-5.96-.747-.427-2.452-.721-.67-.81 2.58-.127 5.389-1.59 7.747-2.501 2.366-.915 4.388-1.977 6.853-2.649 1.686-.46 2.797-.448.298-1.472-5.127-2.1-12.755-.75-18.027-.147-3.353.384-4.525 5.939-6.257 8.756-2.312 3.761-4.154 7.41-7.859 10.008-5.049 3.539-10.007 7.248-14.972 10.927-.8.592-11.578 8.28-12.664 4.525-1.031-3.564 5.106-6.15 7.3-7.91 3.155-2.533.449-4.406-2.383-3.311-12.093 4.674-19.947 15.528-25.7 26.894-1.219 2.408-1.685 5.377-2.384 7.983-.817 3.049-2.989 7.261-1.974 10.412z'
          ></path>
          <path
            id='Vector 7'
            fill='#009600'
            d='M199.839 334.887c-1.444-1.907-2.322-4.636-2.719-6.653-.385-1.954-.873-1.863-3.185-3.153-3.656-2.039-4.326-3.053-6.252-6.214-2.25-3.692 3.518 1.796 4.873 2.791 1.309.961 6.646 4.352 7.953 4.388.879.025 6.922-1.845 7.342-.749 1.849 4.821 6.905 8.022 10.989 11.117 4.423 3.353 9.922-.986 13.661-2.357 5.721-2.097 10.95-4.834 16.575-6.954 5.424-2.044 10.056-5.2 15.486-7.123 5.943-2.105 11.572-1.853 16.582-5.391 4.857-3.431 9.541-5.42 12.502-10.534 4.714-8.14 8.553-16.208 14.339-23.657l12.309-15.846c3.843-4.946 8.233-10.704 10.077-16.718.899-2.935 2.383-6.193 1.886-9.559-.282-1.91-2.223-3.214-3.609-4.663-1.383-1.447-4.685-4.517-5.06-6.418-.342-1.734-.645-4.194-1.457-5.861-2.19-4.496 1.609-5.818 3.661-8.46l3.248-4.181c.574-.738 4.314-4.776 2.617-2.281-1.12 1.646-2.189 5.658-2.564 7.652-1.476 2.582 3.375 4.336 2.261 6.88-.967 2.208 5.811 8.595 7.409 10.044 1.578 1.431 5.898 6.706 6.094 8.473.466 4.211 4.516 7.764 5.678 11.849 1.007 3.541 2.824 6.517 2.133 10.186-.336 1.789-1.557 9.75-3.884 5.544-2.412-4.362.062-7.664-2.991-11.802-1.171-1.587-8.969-7.366-8.3-5.572.652 1.748-1.7 6.12-.521 7.594 1.174 1.467-7.83 14.041-9.109 15.983-2.086 3.168-6.389 5.505-8.718 8.503-.337.434-1.502 7.756-.537 8.487.789.599 3.762-2.982 4.252-3.297 2.322-1.491 6.075.09 8.512-1.464 2.24-1.429 4.054-4.052 8.204-8.149 1.452-1.948 3.957-4.007 1.726.98-.315 1.791.563 1.996-.454 3.305-2.483 3.197-3.717 7.112-7.192 9.802-3.109 2.407-5.254 6.084-8.802 8.008-4.447 2.41-9.836 5.194-14.866 6.445-5.386 1.34-11.006 2.704-16.042 4.817-2.91 1.221-4.365 3.215-7.274 4.409-.569.233-3.365 1.283-3.245 2.122.334 2.347 7.883-.357 3.218 5.648-.059.778-.74 2.138.289.957 1.491-1.71 4.178-2.765 6.179-3.845 2.009-1.082 3.95-1.836 5.817-3.136 1.276-.888 1.865-1.665 1.342.69-1.073 4.831-6.262 9.295-9.585 12.58-2.114 2.09-7.206-.479-10.401-.994-4.265-.688-8.187-1.633-12.267-.647-5.56 1.344-11.208 2.522-16.835 3.723-.906.193-12.882 2.981-10.451 6.02 2.308 2.884 7.687.205 10.282-.243 3.733-.645 3.78 2.371 1.377 3.667-10.264 5.534-23.208 4.368-35.433 1.436-2.591-.622-5.227-2.106-7.696-3.209-2.888-1.29-7.44-2.349-9.424-4.97z'
          ></path>
          <path
            id='Vector 8'
            fill='#009600'
            stroke='#009600'
            strokeLinecap='round'
            d='M129.069 298.213c5.601 3.259 10.975 6.982 16.848 9.772-1.088.671 3.599 4.708 2.322 4.954-2.036.391 1.249 3.392 1.976 4.369 3.188 4.286 12.768 5.35 17.573 5.884l.165.018c5.144.572 6.769-.514 3.957 3.83-3.611 5.578-9.507 7.693-15.984 8.201-8.057.63-18.024-4.557-24.373-8.729-2.622-1.723-4.91-6.436-8.402-6.71-.972-.076-2.896.757-2.785 1.836.243 2.37 1.905 3.091 1.999 5.593.135 3.593.87 7.837-1.374 10.965-2.053 2.862-11.076-14.703-11.75-16.5-3.578-9.536-5.21-19.116-10.433-28.125-1.06-1.828-2.982 4.094-3.103 4.629-.969 4.299-2.662 9.565-1.59 13.93.196.802 2.9 5.025.91 2.698-2.232-2.61-3.156-6.082-4.963-8.971-5.707-9.127-7.562-17.202-9.059-27.721-.873-6.136-.475-12.826-.525-19.024-.029-3.527 1.783-4.554-1.896-4.864-1.878-.158-3.988-.651-5.547-1.719-2.53-1.731-6.538-2.051-8.84-4.234-3.085-2.927-6.24-5.612-9.335-8.512-2.994-2.807-4.816-6.635-7.615-9.643-2.416-2.596-.074-2.145 2.355-2.482 5.234-.727 12.673-.494 17.32-2.776 5.187-2.548 6.422-6.587 7.086-12.315.714-6.154 1.737-18.632 9.606-19.724 4.02-.558 1.42 10.027 1.184 12.022-.188 1.587-.494 8.613 1.634 8.318 2.78-.386 5.614-.966 8.415-1.131 1.722-.102 6.174.844 6.741 2.705.382 1.254-2.76 5.912-3.567 7.182-3.357 5.287-6.49 9.517-5.758 16.367 1.052 9.837 4.026 18.779 5.403 28.452.36 2.535 2.036 4.741 3.07 7.041 2.197 4.887 4.364 9.585 8.92 12.731 6.263 4.325 12.857 7.867 19.415 11.683z'
          ></path>
          <path
            id='Vector 9'
            fill='#009600'
            stroke='#009600'
            strokeLinecap='round'
            d='M202.856 218.74c1.811.398 2.922.44 4.883.44 3.081 1.95-12.738 3.37-14.177-4.569-3.89 0-2.574 1.547-6.471 1.547-1.032 0-3.128-1.317-4.142-1.604-.697-.196-2.674-3.199-3.049-4.079-.664-1.557-3.002.257-3.002-1.45 0-4.605-1.01-9.346.029-13.962.496-2.207.912-2.425-1.171-.367-1.415 1.398-3.037 3.989-3.769 5.952-1.257 3.37-1.257 7.608-1.257 11.27v.154c0 1.531-.496 1.456-.914 2.539-.395 1.024.169 3.669.429 4.823.48 2.134 3.208 4.241 4.711 5.726 2.35 2.321 2.826 5.513 4.541 8.265 1.123 1.804 3.926 3.526 6.139 3.526 2.109 0 10.834-6.743 12.96-6.587 12.224-1.421-13.767 8.523-5.753 8.523 5.221 0 32.76-.431 37.712-1.936 2.048-.623 6.226-3.186 7.91-4.683 2.39-2.124 1.118-1.194-.32-5.456-1.438-3.551 0-3.975 0-5.682 0-2.277-6.174-1.906-6.019-1.95 2.917-.823 2.424-2.312 5.3-5.153 6.472-2.131 2.876-1.421 5.034-4.262-2.877-3.551-7.91-6.393 0-4.972.547-.946-5.1-4.913-3.596-4.972 3.144-.124 4.315.71 6.472 3.551-.405 3.998 2.219 7.432 0 10.655-2.821 4.098.93 3.447-3.595 5.682-.92.454 0 4.262 1.438 6.393 2.157 2.131 6.788 2.403 5.033 3.551-2.14 1.401-2.133 4.89-4.4 5.885-2.227.978-5.868 4.017-7.824 5.48-2.54 1.901-1.319-2.786-3.862-1.134-5.092 3.309-10.795 3.558-16.677 3.667-5.799.109-11.715 1.524-17.476 1.524-4.158 0-8.238-1.524-12.451-1.524h-8.624c-3.586 0-3.684-10.154-7.196-10.154-1.703 0-2.631-1.025-2.97-2.765-.425-2.186-.352-1.47-1.399-2.849-2.273-2.994-1.497-7.977-3.741-10.747-.59-.728-.194-3.644 0-4.456.593-2.473.998-5.166 1.714-7.588.897-3.04.813-6.337 2.17-9.168 1.18-2.461 1.38-5.736 2.056-8.405.434-1.717 1.453-2.628 2.427-4.034 1.668-2.408 3.629-4.353 6.54-5.444 1.957-.734 3.205-2.934 5.282-2.934h6.425c1.949 0 7.514-3.598 15.306 6.093-12.826-1.878-9.581-2.259-12.107-.457-2.799 1.997-6.201 2.629-9.624 2.742-2.517.083-.037 10.617-1.513 13.004-2.778 4.49 1.396 9.713 4.626 12.58 3.037 2.696 9.378.564 12.964.564h4.998c2.197 0 1.741 1.063.2 2.014-5.179 3.9-1.606 6.884-.2 7.193z'
          ></path>
          <g id='Vector 10'>
            <path
              fill='#009600'
              d='M214.528 203.412c.398-.056.623-.049.508.064a2.08 2.08 0 01-.508-.064c-.976.14-2.995.666-3.604.967-1.13.558-1.496 2.081-.921 2.649 1.574 1.555 6.427-.847 5.752 1.42-.46 1.547-5.464 1.705-6.773 1.705-2.341 0-5.01-2.636-6.564-4.172l-.004-.003c-.804-.795-.702-2.281-.599-3.3.088-.875 1.659-.907 2.313-1.467 3.839-3.287 6.148-6.563 8.567-10.973 1.898-3.462 1.038-9.234.514-12.975-.571-4.067-2.247-10.876-5.569-13.653-3.47-2.9-7.096-6.06-9.966-9.477-1.935-2.304-4.823-4.909-7.996-4.909-1.32 0-2.5-.507-3.598-.507-3.04 0-9.874-1.355 2.35-2.775 3.934 0 9.227 1.208 12.944 2.775 2.988 1.26 2.09 3.989 5.238 4.795 1.217.312 2.178.116 3.113 1.015 2.885 2.776 6.195 5.105 9.023 7.899 3.912 3.863 9.767 8.559 9.767 14.414 0 1.234.782 5.387-.8 5.387-1.097 0-4.055-8.565-4.226-10.004-.085-.708-10.763-9.319-9.891-7.103 1.133 2.877 6.017 13.281 6.293 16.337.195 2.16 4.547 9.172 3.598 11.151-.52 1.083-1.142 2.931-1.142 4.09 0 1.022-1.562 1.863-2.456 1.156-1.37-1.082-.813-3.733-1.657-5.19-.813-1.407-5.302 5.806-5.654 6.544-.842 1.769.409 3.82 1.948 4.204z'
            ></path>
            <path
              stroke='#009600'
              strokeLinecap='round'
              d='M215.036 203.476c.396-.39-3.255.48-4.112.903-1.13.558-1.496 2.081-.921 2.649 1.574 1.555 6.427-.847 5.752 1.42-.46 1.547-5.464 1.705-6.773 1.705-2.343 0-5.014-2.64-6.568-4.175-.804-.795-.702-2.281-.599-3.3.088-.875 1.659-.907 2.313-1.467 3.839-3.287 6.148-6.563 8.567-10.973 1.898-3.462 1.038-9.234.514-12.975-.571-4.067-2.247-10.876-5.569-13.653-3.47-2.9-7.096-6.06-9.966-9.477-1.935-2.304-4.823-4.909-7.996-4.909-1.32 0-2.5-.507-3.598-.507-3.04 0-9.874-1.355 2.35-2.775 3.934 0 9.227 1.208 12.944 2.775 2.988 1.26 2.09 3.989 5.238 4.795 1.217.312 2.178.116 3.113 1.015 2.885 2.776 6.195 5.105 9.023 7.899 3.912 3.863 9.767 8.559 9.767 14.414 0 1.234.782 5.387-.8 5.387-1.097 0-4.055-8.565-4.226-10.004-.085-.708-10.763-9.319-9.891-7.103 1.133 2.877 6.017 13.281 6.293 16.337.195 2.16 4.547 9.172 3.598 11.151-.52 1.083-1.142 2.931-1.142 4.09 0 1.022-1.562 1.863-2.456 1.156-1.37-1.082-.813-3.733-1.657-5.19-.813-1.407-5.302 5.806-5.654 6.544-.934 1.961.705 4.268 2.456 4.268z'
            ></path>
          </g>
          <path
            id='Vector 11'
            fill='#009600'
            stroke='#009600'
            strokeLinecap='round'
            d='M121.034 148.135c-1.758 1.994-4.401 3.897-5.686 6.247 0 1.198-2.891 12.072-2.891 13.136 0 2.844-1.511 5.244-1.511 8.075 0 2.508.074 5.105 1.846 7.147 2.237 2.577 2.747-3.041 2.988-4.179.793-3.741-.68-11.132 1.726-14.234 1.483-1.913 4.806-1.467 6.063-3.507.67-1.088 1.728-2.32 2.199-3.482.807-1.994 2.461-4.336 4.33-5.472 1.025-.623 1.103-2.068 1.897-2.852 2.485-2.455 5.797-4.258 8.796-6.035 2.46-1.458 5.241-2.073 7.789-3.35.508-.254 2.908-1.527 2.853-1.558-.93-.541-1.85-1.213-2.719-1.857-.674-.5-2.718-1.485-1.058-2.09.963-.35 1.775-1.062 2.753-1.359.967-.294 1.918-.536 2.82-1.012 1.073-.565 8.88-6.928 8.712-7.047-.46-.324-3.399.516-3.861.73l-.061.028c-4.235 1.96-8.042 3.721-12.662 4.548-3.756.673-7.228 1.835-10.105 4.344-2.752 2.4-5.304 5.046-8.141 7.346-2.425 1.965-4.051 4.135-6.077 6.433z'
          ></path>
          <path
            id='Vector 12'
            fill='#009600'
            stroke='#009600'
            strokeLinecap='round'
            d='M190.261 280.54c-6.926-1.811-14.016-7.978-18.989-12.891-1.808-1.786-6.821-9.282-9.252-8.011-3.298 1.724 5.429 12.641 6.91 14.104 5.005 4.944 8.803 11.325 14.278 15.74 1.411 1.138 4.193 3.065 5.826 3.525 7.195 2.031 16.55.426 23.644-1.748 8.347-2.559 16.17-6.567 24.444-9.168 5.108-1.605 10.094-3.447 14.62-6.346 5.838-3.741 10.309-8.902 15.478-13.455 4.09-3.604 7.907-7.176 10.965-11.707 1.629-2.414 2.57-3.688 2.57-6.515 0-4.571.595-8.234 1.657-12.637.255-1.061 1.34-1.33 1.656-2.624.208-.851.062-1.782.685-2.397.262-.259 1.085-.408 1.085-.734 0-1.832-1.051-4.085-1.485-5.867-.601-2.472-2.754-7.141-2.17-1.805.369 3.375.006 6.67-.914 9.929-1.405 4.981-4.204 9.536-6.054 14.386-1.298 3.403-3.201 6.016-5.568 8.659-3.024 3.377-6.34 8.077-11.051 9.111-3.427.753-6.727 3.396-9.966 4.767-4.857 2.057-8.852 5.943-13.85 7.588-2.747.905-5.577 1.273-8.11 2.765-2.418 1.424-3.861 2.771-6.625 3.356-10.217 2.163-19.34 4.705-29.784 1.975z'
          ></path>
          <path
            id='Vector 13'
            fill='#009600'
            stroke='#009600'
            strokeLinecap='round'
            d='M297.959 166.567c-2.426-1.968-2.864-8.558-9.823-7.419-3.108 2.413-1.129-6.801-.951-3.98.082 1.291 4.545 2.457 5.753 2.457 2.758 0 5.954.959 8.628.384 1.39-.298 1.417-3.045 1.476-4.559.042-1.089 1.057-1.6 1.028-2.651-.089-3.245-2.4-6.455-4.055-9.083-1.015-1.611-3.704-2.877-1.485-2.877 3.574 0 4.659-.034 7.167 2.651 2.493 2.668 3.782 5.813 5.797 8.745 1.731 2.516 3.548 4.618 4.912 7.39 2.247 4.565 3.179 8.965 4.083 13.878.493 2.677.419 5.255.543 7.954.046 1 1.028 1.42 1.028 2.539 0 2.844-1.366 6.189-2.056 8.914-.12.474-2.331 7.141-2.684 6.093-.422-1.25-.457-3.837-2.199-3.837-1.225 0-1.398.282-1.685 1.523-.754 3.26-1.358 7.861-3.712 10.353-1.283 1.357-.514-1.426-.514-2.229 0-2.151-.336-4.182-.486-6.318-.377-5.401 1.057-10.428-.828-15.684-2.022-5.64-5.2-10.4-9.937-14.244z'
          ></path>
        </g>
        <g id='white' stroke='#FEFFF8' strokeLinecap='round'>
          <path
            id='Vector 20'
            strokeWidth='4'
            d='M250.036 63.276c.77.097.554.273.836.84'
          ></path>
          <path
            id='Vector 21'
            strokeWidth='4'
            d='M83.183 114.408c-.267 1.069-2.345.644-3.205.644'
          ></path>
          <path
            id='Vector 22'
            strokeWidth='4'
            d='M91.516 102.825c1.556-.312 2.567-1.937 3.204-3.217'
          ></path>
          <path
            id='Vector 23'
            strokeWidth='4'
            d='M165.869 57.78c-2.429 0-4.817-.252-7.051.644'
          ></path>
          <path
            id='Vector 24'
            strokeWidth='4'
            d='M95.361 148.513c0 1.971.32 3.85.641 5.791'
          ></path>
          <path
            id='Vector 25'
            strokeWidth='4'
            d='M81.9 183.261c-.995 0-1.64.274-2.563.644'
          ></path>
          <path
            id='Vector 26'
            strokeWidth='4'
            d='M76.132 245.037c.59.074.424.208.641.643'
          ></path>
          <path
            id='Vector 27'
            strokeWidth='4'
            d='M70.363 298.446c1.901 1.909 4.111 3.763 6.41 5.148'
          ></path>
          <path
            id='Vector 28'
            strokeWidth='4'
            d='M106.899 324.186c.789.713 1.716 1.292 2.564 1.93'
          ></path>
          <path
            id='Vector 29'
            strokeWidth='4'
            d='M157.536 335.125c1.938 0 3.396.418 5.128 1.287'
          ></path>
          <path
            id='Vector 30'
            strokeWidth='4'
            d='M175.484 339.63c2.767.278 5.616 1.892 8.333 2.574'
          ></path>
          <path
            id='Vector 31'
            strokeWidth='4'
            d='M254.324 327.403h3.846'
          ></path>
          <path
            id='Vector 32'
            strokeWidth='4'
            d='M258.811 337.699c.222 1.779 3.918 1.287 5.128 1.287'
          ></path>
          <path
            id='Vector 33'
            strokeWidth='4'
            d='M319.704 271.42c.125 1.003 2.237 1.287 3.063 1.287 2.097 0-.148-.935-1.14-1.931'
          ></path>
          <path
            id='Vector 34'
            strokeWidth='4'
            d='M325.473 211.575c-2.609-.524-3.763-2.968-4.487-5.148'
          ></path>
          <path
            id='Vector 35'
            strokeWidth='4'
            d='M329.319 151.73c-1.144-.229-1.465-1.011-1.923-1.93'
          ></path>
          <path
            id='Vector 36'
            strokeWidth='4'
            d='M292.783 85.45c-1.22-1.07.931 4.912 1.282 5.792'
          ></path>
          <path id='Vector 37' strokeWidth='4' d='M220.352 84.164h1.282'></path>
          <path
            id='Vector 38'
            strokeWidth='4'
            d='M278.681 120.199c2.996.752 5.194 3.894 7.692 5.148'
          ></path>
          <path
            id='Vector 39'
            strokeWidth='10'
            d='M111.386 85.45c3.304 0 1.395.228.641-1.286'
          ></path>
          <path
            id='Vector 40'
            strokeWidth='10'
            d='M307.526 178.114c.086.69 1.343.996 1.922 1.287'
          ></path>
          <path
            id='Vector 41'
            strokeWidth='10'
            d='M135.102 317.751h1.282'
          ></path>
          <path
            id='Vector 42'
            strokeWidth='2'
            d='M74.376 228.739c-.855-.286-3.16-1.979-3.466-2.9'
          ></path>
          <path
            id='Vector 43'
            strokeWidth='2'
            d='M72.932 208.148c-.034-.267-.094-.192-.29-.29'
          ></path>
          <path id='Vector 44' strokeWidth='2' d='M76.976 167.257v-.29'></path>
          <path id='Vector 45' strokeWidth='2' d='M77.843 142.896h.289'></path>
          <path
            id='Vector 46'
            strokeWidth='2'
            d='M87.087 296.891c.672.075 1.241.765 1.733 1.16'
          ></path>
          <path
            id='Vector 47'
            strokeWidth='2'
            d='M75.532 275.14c-.501-.503-1.004-.896-1.445-1.45'
          ></path>
          <path
            id='Vector 48'
            strokeWidth='2'
            d='M213.904 341.262c1.787.09 3.407.58 5.2.58'
          ></path>
          <path
            id='Vector 49'
            strokeWidth='2'
            d='M101.531 306.171c.389.049.84.66 1.155.87'
          ></path>
          <path
            id='Vector 50'
            strokeWidth='2'
            d='M293.923 324.442c1.883 0 2.695-1.406 4.044-2.61'
          ></path>
          <path
            id='Vector 51'
            strokeWidth='2'
            d='M302.878 310.231c0 1.746-.289 3.468-.289 5.221'
          ></path>
          <path
            id='Vector 52'
            strokeWidth='2'
            d='M327.722 252.81c.088.883.578 1.741.578 2.61'
          ></path>
          <path
            id='Vector 53'
            strokeWidth='2'
            d='M317.611 299.791c-.504.051-.926.29-1.444.29'
          ></path>
          <path id='Vector 54' strokeWidth='2' d='M326.566 228.159h.578'></path>
          <path
            id='Vector 55'
            strokeWidth='2'
            d='M326.855 195.968c-.032-.294-.196-.592-.289-.87'
          ></path>
          <path id='Vector 56' strokeWidth='2' d='M318.189 152.756v4.93'></path>
          <path id='Vector 57' strokeWidth='2' d='M311.833 109.255v.87'></path>
          <path
            id='Vector 58'
            strokeWidth='2'
            d='M314.722 126.945c.266.034.192.095.289.29'
          ></path>
          <path
            id='Vector 59'
            strokeWidth='2'
            d='M203.504 55.023c1.343 1.277 2.907 1.366 4.334 2.32'
          ></path>
          <path
            id='Vector 60'
            strokeWidth='2'
            d='M136.196 70.394c1.258 0 2.487.29 3.755.29'
          ></path>
          <path id='Vector 61' strokeWidth='2' d='M217.371 65.464h1.444'></path>
          <path
            id='Vector 62'
            strokeWidth='2'
            d='M268.213 60.823c1.193 1.298 2.525 2.245 3.755 3.48'
          ></path>
          <path id='Vector 63' strokeWidth='7' d='M185.662 63.276h1.672'></path>
          <path
            id='Vector 64'
            strokeWidth='7'
            d='M71.962 148.046c1.093 0 1.23.048 1.672-.839'
          ></path>
          <path
            id='Vector 65'
            strokeWidth='7'
            d='M90.355 169.028c1.438.181 3.22 2.757 5.016 3.358'
          ></path>
          <path
            id='Vector 66'
            strokeWidth='7'
            d='M107.075 239.53c-3.421 1.099-6.487 1.806-10.032 2.518'
          ></path>
          <path
            id='Vector 67'
            strokeWidth='7'
            d='M97.88 284.852c0-.994 2.7 2.195 3.343 2.518'
          ></path>
          <path
            id='Vector 68'
            strokeWidth='7'
            d='M210.743 331.014h2.508'
          ></path>
          <path
            id='Vector 69'
            strokeWidth='7'
            d='M300.198 301.638c2.877 0 6.112.317 7.524-2.518'
          ></path>
          <path id='Vector 70' strokeWidth='7' d='M289.329 99.366h-.836'></path>
          <path id='Vector 71' strokeWidth='7' d='M271.773 82.58h2.508'></path>
          <path
            id='Vector 72'
            strokeWidth='7'
            d='M229.971 59.08c2.108.264 6.871 4.746 7.525 6.714'
          ></path>
          <path
            id='Vector 73'
            strokeWidth='7'
            d='M146.369 68.312c-3.688 0-7.156.84-10.869.84'
          ></path>
          <path
            id='Vector 74'
            strokeWidth='7'
            d='M117.108 101.045c-2.468 0-4.683-.669-5.852 1.678'
          ></path>
          <path id='Vector 75' strokeWidth='7' d='M95.371 137.135h1.672'></path>
          <path
            id='Vector 76'
            fill='#FEFFF8'
            d='M80.255 220.328c.147.213 2.217 6.795 2.854 5.09 1.37 0 2.6-.578 3.938-.668 1.4-.093 3.034-.249 4.38-.667.871-.27 1.953-.413 2.756-.84 1.003-.532.398-3.606.222-4.447l-.012-.057c-.284-1.357-.709-3.393-2.203-3.821-1.935-.555-2.06-2.747-2.436-4.398-.406-1.781.31-1.389 1.329-2.322 2.588-2.373.614-4.738 3.1-7.282 2.08-2.126 7.992-4.204 5.02-6.034-1.19-.734-3.988 2.084-4.847 2.841-2.022 1.78-3.923 3.854-5.267 6.176-.452.782-2.143 3.405-3.273 3.014-.567-.196-1.068-.859-1.636-.346-.687.621-1.153 1.335-1.686 2.076-1.266 1.76-3.439 3.059-3.937 5.311-.465 2.099.522 4.673 1.698 6.374z'
          ></path>
          <path
            id='Vector 77'
            fill='#FEFFF8'
            d='M233.062 334.656c-3.49 0-6.488-1.151-9.796-2.269-.688-1.38-1.604 1.567-1.863 2.48-.378 1.329 1.428 4.134 2.219 5.589 1.393 2.564 4.767 4.475 7.64 3.951 2.829-.516 5.662-.383 8.499-.756 3.451-.455 4.228-1.594 4.228-5.023 0-3.011-1.278-2.837-3.81-2.837-2.399 0-4.682-1.135-7.117-1.135z'
          ></path>
          <path
            id='Vector 78'
            fill='#FEFFF8'
            d='M285.091 314.212c-2.077 2.374-11.005 9.758-14.742 6.756 0 3.546-2.626 3.861 2.564 3.861 3.941 0 7.647-.998 11.537-1.608 2.365-.371 6.242-.654 6.909-3.397 1.026-4.226-.499-8.705-.499-13.048 0-.977-3.139-7.441-3.267-3.711-.189 5.508 1.026 7.113-2.502 11.147z'
          ></path>
          <path
            id='Vector 79'
            fill='#FEFFF8'
            d='M153.37 134.714c2.737-3.359 8.652-4.219 12.499-4.219 3.627 0 5.788 1.717 9.152 3.218.413.184-4.797 1.165-5.662 1.322-4.761.87-7.917 8.102-12.464 8.33-1.956.098-4.343.434-4.985-1.93-.454-1.672.394-5.413 1.46-6.721z'
          ></path>
          <path
            id='Vector 80'
            fill='#FEFFF8'
            d='M259.737 287.507c2.313.125 3.284-2.86 5.484-1.931-.843-1.692-5.679-3.54-7.371-4.861-2.171-1.695-.416-4.158-2.885-5.434-4.469-2.312-6.335 3.936-3.49 6.792 2.151 2.159 5.045 5.259 8.262 5.434z'
          ></path>
          <path
            id='Vector 81'
            fill='#FEFFF8'
            d='M289.973 143.074c0 3.351.664 6.499.664 9.858-.428.86-1.107 3.857-1.107 4.817 0 .816-.018 1.426-.763 1.853-.402.231-.123 2.003-.123 2.397 0 .971-.628 5.919-.086 6.04.906.202 2.266-1.029 2.953-1.42 1.316-.751 2.684-1.264 3.778-2.347 1.151-1.141 2.117-2.446 3.248-3.607.913-.938 1.152-1.824 1.735-2.928 1.073-2.035 2.916-3.767 4.146-5.744 1.083-1.739 2.015-3.564 3.273-5.188 1.138-1.469 2.021-2.867 2.646-4.632 1.086-3.068 1.132-7.039.849-10.266-.148-1.691.07-3.638-.443-5.262-.499-1.58-1.519-2.899-2.387-4.286-1.585-2.531-3.996-4.993-6.226-6.98-2.551-2.271-4.291-4.249-7.838-4.249-1.543 0-.882 1.003-.295 2.162.923 1.823 2.129 3.481 2.522 5.522.325 1.688.305 3.965 0 5.657-.42 2.333-1.99 4.523-2.916 6.683-.623 1.453-1.743 2.48-2.19 3.977-.244.817-.511 1.636-.726 2.459a21.322 21.322 0 00-.714 5.484z'
          ></path>
          <path
            id='Vector 82'
            fill='#FEFFF8'
            d='M244.686 95.624c-2.24-2.023-3.982-5.198-6.516-6.96-.679-.227-1.346-1.372-1.589-2.078-.259-.752-.292-1.55-.867-2.127-.936-.94 1.669.27 1.958.419 2.138 1.108 4.645 2.214 6.147 4.14 1.162 1.491 2.284 2.96 3.531 4.35.169.19.391 1.291.497 1.564.593 1.52 1.993 3.03 2.119 4.672.1 1.313-1.856-.96-2.151-1.257-1.016-1.02-2.129-1.819-3.129-2.722z'
          ></path>
        </g>
      </g>
    </svg>
  );
}

export default PortalSvg;