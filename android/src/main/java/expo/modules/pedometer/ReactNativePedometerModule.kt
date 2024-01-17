package expo.modules.pedometer

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ReactNativePedometerModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ReactNativePedometer")

    Function("hello") {
      "Hello world! 👋"
    }
  }
}
