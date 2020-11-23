import React from 'react';
import {
  requireNativeComponent,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

import {
  VictoryAnimation,
  VictoryLabel,
  VictoryContainer,
  // @ts-ignore
} from 'victory-native';

interface CircleChartNativeProps {
  backgroundProgressBarColor?: string;
  progressBarColorEnd?: string;
  progress?: number;
  barSize?: number;
  style?: ViewStyle;
}

interface CircleChartProps extends CircleChartNativeProps {
  digitUpdateTimes: number;
  label: number;
  duration: number;
  labelProgress: number;
  labelStyle: any;
  subLabelStyle: any;
  subLabelText?: string;
  onPress?: () => void;
}

const CircleChartNative = requireNativeComponent<CircleChartNativeProps>(
  'CircleChart'
);

const CircleChart: React.FC<CircleChartProps> = ({
  label,
  duration,
  labelStyle,
  subLabelStyle,
  subLabelText,
  onPress,
  ...props
}) => {
  const size = props.style
    ? Number(StyleSheet.flatten(props.style).width) ||
      Number(StyleSheet.flatten(props.style).height)
    : 200;

  const LABEL_SIZE = (size || 200) / 2;

  return (
    <View
      {...(onPress && {
        onTouchStart: onPress,
      })}
    >
      <CircleChartNative {...props} />
      <View style={styles.container}>
        <VictoryContainer height={size} width={size}>
          <VictoryAnimation
            duration={duration}
            data={{ progress: props.progress }}
          >
            {(param: { progress: number }) => {
              const { progress } = param;

              const factor = progress ? progress / (props.progress || 1) : 0;
              const labelText = (label * factor).toFixed(2);

              return (
                <>
                  <VictoryLabel
                    textAnchor="middle"
                    verticalAnchor="middle"
                    x={LABEL_SIZE}
                    y={LABEL_SIZE}
                    text={`$${labelText}`}
                    style={labelStyle}
                  />
                  <VictoryLabel
                    textAnchor="middle"
                    verticalAnchor="middle"
                    x={LABEL_SIZE}
                    y={LABEL_SIZE + 40}
                    text={subLabelText || ''}
                    style={subLabelStyle}
                  />
                </>
              );
            }}
          </VictoryAnimation>
        </VictoryContainer>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CircleChart;
