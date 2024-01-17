import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ReactNativePedometerViewProps } from './ReactNativePedometer.types';

const NativeView: React.ComponentType<ReactNativePedometerViewProps> =
  requireNativeViewManager('ReactNativePedometer');

export default function ReactNativePedometerView(props: ReactNativePedometerViewProps) {
  return <NativeView {...props} />;
}
