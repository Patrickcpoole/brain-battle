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
import { windowHeight, windowWidth } from "@/utils/Dimensions";
import { moderateScale, verticalScale } from "@/utils/Metrics";
import { isiPad } from "@/utils/CommonFun";
import { BarChart, yAxisSides } from "react-native-gifted-charts";
import { DailyGraphdata, MonthlyGraphdata } from "@/utils/Data";
import { LineDataItem } from "@/types";
const DailyProgressGraph = ({}: any) => {
  return (
    <View>
      <BarChart
        data={DailyGraphdata}
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
        yAxisLabelTexts={["24", "0", "0"]}
        noOfSections={2}
        barWidth={moderateScale(11)}
        renderTooltip={(item: LineDataItem) => (
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

export default DailyProgressGraph;

const styles = StyleSheet.create({});
