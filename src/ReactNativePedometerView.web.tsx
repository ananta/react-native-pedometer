import * as React from 'react';

import { ReactNativePedometerViewProps } from './ReactNativePedometer.types';

export default function ReactNativePedometerView(props: ReactNativePedometerViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
