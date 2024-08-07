import React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

interface Rank1Props {
    width: number;
    height: number;
}

const Rank1 = ({width, height}: Rank1Props) => {
    
    return (
        <Svg width={width} height={height} fill="none">
            <Path fill="url(#a)" d="M.051 22.035h150.187v335.872H.051z" />
            <Path fill="#FFB800" d="M21.896.19h106.496l21.845 21.845H.051L21.896.189Z" />
            <Path fill="#fff" d="M103.773 152.518v13.517H51.618v-13.517h19.387v-47.65c-.819 1.092-2.093 2.23-3.823 3.413-1.73 1.183-3.686 2.321-5.87 3.414a42.322 42.322 0 0 1-6.418 2.457c-2.184.637-4.187.956-6.007.956v-14.063c1.82 0 3.914-.546 6.28-1.639a58.006 58.006 0 0 0 6.964-3.822c2.366-1.548 4.369-3.004 6.007-4.37 1.638-1.456 2.594-2.503 2.867-3.14h15.429v64.444h17.339Z" />
            <Defs>
                <LinearGradient id="a" x1={75.144} x2={75.144} y1={22.035} y2={258.237} gradientUnits="userSpaceOnUse">
                    <Stop stopColor="#FFB552" />
                    <Stop offset={0} stopColor="#FFB800" />
                </LinearGradient>
            </Defs>
        </Svg>
    );
    
}

export default Rank1;
