import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ReactNativePedometer.web.ts
// and on native platforms to ReactNativePedometer.ts
import ReactNativePedometerModule from './ReactNativePedometerModule';
import ReactNativePedometerView from './ReactNativePedometerView';
import { ChangeEventPayload, ReactNativePedometerViewProps } from './ReactNativePedometer.types';

// Get the native constant value.
export const PI = ReactNativePedometerModule.PI;

export function hello(): string {
  return ReactNativePedometerModule.hello();
}

export async function setValueAsync(value: string) {
  return await ReactNativePedometerModule.setValueAsync(value);
}

const emitter = new EventEmitter(ReactNativePedometerModule ?? NativeModulesProxy.ReactNativePedometer);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ReactNativePedometerView, ReactNativePedometerViewProps, ChangeEventPayload };
