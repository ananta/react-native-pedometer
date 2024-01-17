import ExpoModulesCore

public class ReactNativePedometerModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ReactNativePedometer")
    
    Function("hello") {
      return "Hello world! 👋"
    }
  }
}
