# React Native Testes End-To-End

Primeiro instale as dependências do detox

```cmd
yarn add detox jest jest-circus @types/detox -D
```

Em seguida configure o detox com o comando abaixo

```cmd
npx detox init -r jest
```

Depois é preciso configurar cada plataforma de forma diferente, siga os manuais abaixo

[iOS](/ios/README.md)
<br/>
[Android](/android/README.md)

Com as configurações finalizada é preciso gerar uma build para pode realizar os testes, execute o comando abaixo

```cmd
npx detox build --configuration ios.sim.release
```

Depois é só rodar os testes e verificar os resultados

```cmd
npx detox test --configuration ios.sim.release
```

Obs: `ios.sim.release` é foi um nome dado na hora de configurar a iOS

Caso queira tirar screenshot a medida que o teste ocorrer é necessário adicionar as configurações abaixo no `.detoxrc.json`

```json
"artifacts": {
	"rootDir": "./e2e/artifacts"
}
```
