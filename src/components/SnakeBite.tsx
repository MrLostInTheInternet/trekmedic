import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SnakeBite(props:any) {
  return (
    <Svg
      width='50%'
      height='90%'
      viewBox="0 0 105 190"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M227.8 200.355c-1.357-.545-2.824-2.996-2.824-4.717 0-1.264 3.29-3.926 4.853-3.926 1.956 0 4.48 2.577 4.48 4.573 0 1.633-2.764 4.785-4.136 4.718-.475-.023-1.543-.315-2.374-.648zm92.266-.691c-4.653-3.66.572-10.315 5.428-6.914 2.006 1.405 2.018 5.077.023 6.936-1.85 1.723-3.24 1.717-5.451-.022zm-93.039-14.344c-2.405-2.024-2.567-3.44-.67-5.851 2.56-3.254 7.952-1.486 7.952 2.607 0 1.843-2.675 4.97-4.252 4.97-.538 0-1.902-.777-3.03-1.726zm94.16 1.009c-1.66-.617-2.878-2.552-2.878-4.573 0-3.395 5.267-5.362 7.563-2.825 3.046 3.365-.496 8.956-4.686 7.398zm-92.841-21.722c-1.65-2.096-1.33-3.895 1.082-6.086 3.951-3.588 9.332 2.74 5.548 6.525-1.925 1.924-4.928 1.725-6.63-.439zm89.445.734c-2.916-2.042-1.58-6.732 2.247-7.895 2.185-.664 4.938 1.87 4.938 4.545 0 3.865-3.872 5.67-7.185 3.35zm-84.59-17.947c-3.292-2.305-2.202-7.142 1.807-8.022 4.274-.939 7.075 4.636 3.842 7.648-1.723 1.605-3.705 1.737-5.65.374zm80.41-.24c-3.087-2.5-1.02-8.108 2.99-8.108.811 0 2.128.694 2.925 1.543 4.03 4.29-1.349 10.262-5.914 6.566zM241.886 127.6c-4.898-2.372-1.608-9.995 3.534-8.186 3.487 1.226 3.848 6.678.541 8.185-2.002.912-2.193.912-4.075 0zm66.581.089c-3.515-1.412-3.08-6.934.651-8.246 5.108-1.796 8.427 5.916 3.51 8.156-1.976.9-2.135.904-4.16.09zm-61.72-19.195c-1.465-1.618-1.403-4.97.116-6.344 1.618-1.465 4.97-1.403 6.344.116 1.618 1.787 1.42 5.15-.379 6.41-1.988 1.392-4.73 1.31-6.081-.182zm54.278-.537c-.76-.966-1.382-2.126-1.382-2.577 0-.451.622-1.61 1.382-2.577 2.791-3.548 7.952-1.63 7.952 2.955 0 3.94-5.406 5.435-7.952 2.199zm-63.9-17.282c-1.033-.723-1.482-1.718-1.482-3.285 0-3.963 3.597-6.065 6.58-3.848 4.938 3.67-.06 10.662-5.098 7.133zm15.852-.295c-2.546-2.546-1.173-6.9 2.333-7.4 4.424-.629 6.863 4.181 3.837 7.567-1.397 1.562-4.526 1.477-6.17-.167zm42.048-.423c-1.694-2.155-1.72-3.43-.113-5.522 1.658-2.157 5.126-2.204 6.835-.092 1.66 2.05 1.548 4.173-.313 5.92-2.116 1.989-4.701 1.865-6.409-.306zm16.49.59c-2.2-2.561-1.93-5.238.737-7.33 2.322-1.82 6.725.755 6.725 3.933 0 3.799-5.116 6.128-7.462 3.397zm-56.422-16.377c-1.856-1.975-1.852-4.697.01-6.43 3.05-2.843 7.208-.935 7.208 3.307 0 4.34-4.319 6.209-7.217 3.123zm38.187-.093c-.9-.9-1.637-2.264-1.637-3.03 0-1.8 2.868-4.667 4.667-4.667 1.907 0 4.667 2.91 4.667 4.921 0 1.853-2.777 4.412-4.787 4.412-.7 0-2.01-.736-2.91-1.636zm-59.812-3.197c-1.648-1.252-2.481-4.003-1.675-5.535 1.713-3.256 4.768-3.87 7.068-1.422 1.88 2.002 1.843 4.521-.094 6.34-1.735 1.63-3.669 1.855-5.3.617zm82.301-.526c-2.882-2.685-.892-7.974 3-7.974 2.15 0 4.208 2.282 4.208 4.667 0 4.039-4.303 6.013-7.208 3.307zm-83.41-21.064c-.76-.966-1.382-2.126-1.382-2.577 0-.45.622-1.61 1.382-2.577 2.629-3.342 7.951-1.463 7.951 2.807 0 4.073-5.351 5.652-7.951 2.347zm82.999.709c-1.433-1.433-1.336-5.152.171-6.516 1.619-1.464 4.97-1.403 6.344.116 1.465 1.618 1.404 4.97-.115 6.344-1.543 1.396-5.03 1.426-6.4.056zm-68.611-16.172c-1.465-1.618-1.403-4.97.116-6.344 1.618-1.464 4.97-1.403 6.344.116 1.464 1.618 1.403 4.97-.116 6.344-1.618 1.465-4.97 1.403-6.344-.116zm56.583-.092c-2.643-2.92-.606-7.355 3.379-7.355 2.394 0 4.268 1.902 4.268 4.333 0 3.897-5.05 5.893-7.647 3.022zm-38.314-7.982c-3.661-3.662.646-9.443 5.258-7.058 1.062.549 2.077 1.758 2.334 2.78 1.033 4.117-4.586 7.283-7.592 4.278zm20.01-.463c-1.652-2.1-1.737-3.44-.345-5.428 1.46-2.084 5.799-2.084 7.258 0 3.361 4.799-3.297 10.026-6.914 5.428z"
        transform="translate(-224.976 -18.134)"
        fill="#000"
        fillOpacity={1}
      />
    </Svg>
  )
}

export default SnakeBite