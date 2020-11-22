import { NativeModules } from 'react-native';

type CircleChartType = {
  multiply(a: number, b: number): Promise<number>;
};

const { CircleChart } = NativeModules;

export default CircleChart as CircleChartType;
