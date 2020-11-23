import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

// @ts-ignore
import { Defs, LinearGradient, Stop, Circle } from 'react-native-svg';
import {
  VictoryPie,
  VictoryAnimation,
  VictoryLabel,
  VictoryContainer,
  //@ts-ignore
} from 'victory-native';

interface CircleChartNativeProps {
  backgroundProgressBarColorStart?: string;
  backgroundProgressBarColorEnd?: string;
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
  data: any;
}

const CircleChart: React.FC<CircleChartProps> = ({
  label,
  duration,
  labelStyle,
  subLabelStyle,
  subLabelText,
  onPress,
  data,
  ...props
}) => {
  const size = props.style
    ? Number(StyleSheet.flatten(props.style).width) ||
      Number(StyleSheet.flatten(props.style).height)
    : 200;

  const RADIUS = (size || 200) / 2;

  return (
    <View
      {...(onPress && {
        onTouchStart: onPress,
      })}
    >
      <VictoryContainer height={size} width={size}>
        <Defs>
          <LinearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop
              offset="0%"
              stopColor={props.backgroundProgressBarColorStart || '#03bfd7'}
            />
            <Stop
              offset="100%"
              stopColor={props.backgroundProgressBarColorEnd || '#10395e'}
            />
          </LinearGradient>
        </Defs>
        <Circle
          r={RADIUS - 3.4}
          stroke="#BEC0C2"
          cx={RADIUS}
          cy={RADIUS}
          strokeWidth={7}
        />
        <VictoryPie
          standalone={false}
          width={size}
          height={size}
          innerRadius={({ datum }: { datum: { x: number } }) => {
            if (datum.x === 1) {
              return RADIUS - 7;
            }

            return RADIUS;
          }}
          cornerRadius={({ datum }: { datum: { x: number } }) => {
            if (datum.x === 1) {
              return 25;
            }
            return 0;
          }}
          radius={({ datum }: { datum: { x: number } }) => {
            if (datum.x === 1) {
              return RADIUS;
            }

            return RADIUS - 7;
          }}
          labels={() => null}
          data={data}
          animate={{ duration }}
          colorScale={['url(#gradient1)']}
          style={{
            data: {
              fill: ({ datum }: { datum: { x: number } }) => {
                return datum.x === 2 ? '#BEC0C2' : 'url(#gradient1)';
              },
              overflow: 'visible',
            },
          }}
        />
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
                  x={RADIUS}
                  y={RADIUS}
                  text={`$${labelText}`}
                  style={labelStyle}
                />
                <VictoryLabel
                  textAnchor="middle"
                  verticalAnchor="middle"
                  x={RADIUS}
                  y={RADIUS + 40}
                  text={subLabelText || ''}
                  style={subLabelStyle}
                />
              </>
            );
          }}
        </VictoryAnimation>
      </VictoryContainer>
    </View>
  );
};

export default CircleChart;
