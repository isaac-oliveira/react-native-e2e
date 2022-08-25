# configurando o iOS

Instale as ferramentas abaixo para o detox pode controlar o simulador do iOS

```cmd
brew tap wix/brew;brew install applesimutils;
```

Depois no arquivo `.detoxrc.json` adicione as configurações abaixo e lembre de substituir `[APP_NAME]` pelo nome do seu projeto

```json
{
  "testRunner": "jest",
  "runnerConfig": "e2e/config.json",
  "skipLegacyWorkersInjection": true,
  "devices": {
    "simulator": {
      "type": "ios.simulator",
      "device": {
        "type": "iPhone 11"
      }
    }
  },
  "apps": {
    "ios.release": {
      "name": "[APP_NAME]",
      "type": "ios.app",
      "binaryPath": "ios/build/Build/Products/Release-iphonesimulator/[APP_NAME].app",
      "build": "xcodebuild -project ios/[APP_NAME].xcodeproj -scheme [APP_NAME] -sdk iphonesimulator -derivedDataPath ios/build"
    }
  },
  "configurations": {
    "ios.sim.release": {
      "device": "simulator",
      "app": "ios.release"
    }
  }
}
```
