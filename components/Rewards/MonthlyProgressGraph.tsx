import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import { windowHeight, windowWidth } from "@/utils/Dimensions";
import { moderateScale, verticalScale } from "@/utils/Metrics";
import { isiPad } from "@/utils/CommonFun";
import {
  BarChart,
  LineChart,
  PieChart,
  PopulationPyramid,
  yAxisSides,
} from "react-native-gifted-charts";
import { MonthlyGraphdata } from "@/utils/Data";

const MonthlyProgressGraph = ({}: any) => {
  return (
    <View>
      <BarChart
        data={MonthlyGraphdata}
        yAxisSide={yAxisSides.RIGHT}
        barBorderRadius={100}
        isAnimated
        spacing={isiPad ? moderateScale(12) : moderateScale(8)}
        width={isiPad ? windowWidth / 1.2 : windowWidth / 1.4}
        height={isiPad ? verticalScale(200) : 180}
        showLine={false}
        dashGap={30}
        xAxisColor={"#b0b0b0"}
        yAxisColor="transparent"
        rulesType="solid"
        yAxisTextStyle={{ color: "#b0b0b0" }}
        xAxisLabelTextStyle={{ color: "#b0b0b0", textAlign: "center" }}
        yAxisLabelTexts={["31", "600", "1200"]}
        noOfSections={2}
        barWidth={moderateScale(11)}
        renderTooltip={(item: any) => (
          <View
            style={{
              marginBottom: 10,
              marginLeft: -10,
              paddingHorizontal: 6,
              borderRadius: 4,
            }}
          >
            <Text style={{ color: "#626262", fontSize: 10 }}>{item.value}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default MonthlyProgressGraph;
