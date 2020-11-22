import { requireNativeComponent } from 'react-native';

type CircleChartProps = {
  backgroundColor?: string;
  foregroundColor?: string;
};

const CircleChart = requireNativeComponent<CircleChartProps>(
  'CircleChart'
);

export default CircleChart;
