import React from "react"
import Svg, { Path } from "react-native-svg"

interface Rank2Props {
    width: number;
    height: number;
}

const Rank2 = ({width, height}: Rank2Props) => {

    return (
        <Svg width={width} height={height} fill="none">
            <Path fill="#51B5FD" d="M.056 22.725h141.995V246.64H.056z" />
            <Path fill="#A7CFEC" d="M19.42.88H142.05v21.845H.056L19.42.88Z" />
            <Path fill="#fff" d="M45.412 137.725c0-3.058.255-5.861.764-8.41a26.546 26.546 0 0 1 2.622-7.428c1.31-2.33 3.095-4.514 5.352-6.553 2.33-2.112 5.28-4.114 8.847-6.008a120.36 120.36 0 0 1 7.21-3.823c2.257-1.165 4.26-2.293 6.007-3.386 1.747-1.165 3.094-2.403 4.041-3.713 1.02-1.311 1.53-2.804 1.53-4.478 0-1.603-.438-3.095-1.311-4.479-.874-1.383-2.185-2.476-3.933-3.277-1.747-.874-3.859-1.31-6.335-1.31-1.966 0-3.786.255-5.461.764a19.311 19.311 0 0 0-4.478 2.076 22.329 22.329 0 0 0-3.605 2.73 26.103 26.103 0 0 0-2.84 2.84l-7.536-8.629c.728-.874 1.856-1.857 3.386-2.949 1.602-1.165 3.495-2.294 5.68-3.386 2.257-1.165 4.805-2.112 7.645-2.84 2.84-.8 5.935-1.201 9.285-1.201 4.733 0 8.774.8 12.124 2.403 3.35 1.529 5.898 3.677 7.646 6.444 1.82 2.694 2.73 5.753 2.73 9.175 0 2.694-.546 5.06-1.638 7.1a19.7 19.7 0 0 1-4.041 5.461 35.664 35.664 0 0 1-5.353 4.042 145.5 145.5 0 0 1-5.133 2.949c-2.84 1.383-5.316 2.657-7.428 3.823-2.039 1.165-3.786 2.33-5.242 3.495-1.457 1.092-2.658 2.257-3.605 3.495-.947 1.165-1.748 2.585-2.403 4.26h36.045v10.813H45.412Z" />
        </Svg>
    );

}

export default Rank2;