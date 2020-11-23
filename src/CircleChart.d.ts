/* eslint-disable no-var */
import DefaultIos from './CircleChart.ios.ios';
import * as ios from './CircleChart.ios';
import DefaultAndroid from './CircleChart.android';
import * as android from './CircleChart.android';

declare var _test: typeof ios;

declare var _testAndroid: typeof android;

declare var _testDefault: typeof DefaultIos;

declare var _testDefaultIOAndroid: typeof DefaultAndroid;

export * from './CircleChart.ios';
export default DefaultIos;
