describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Verifica se está na tela de login', async () => {
    await expect(element(by.text('Login'))).toBeVisible();
  });

  it('Não deve realizar login', async () => {
    await element(by.id('field-email')).typeText('Isaac@gmail.com');
    await element(by.id('field-password')).typeText('abc13');

    await element(by.id('button-login')).tap();

    await waitFor(element(by.text('Erro ao realizar login')))
      .toBeVisible()
      .withTimeout(3500);
  });

  it('Deve realizar login', async () => {
    await element(by.id('field-email')).typeText('Isaac@gmail.com');
    await element(by.id('field-password')).typeText('abc123');

    await element(by.id('button-login')).tap();

    await waitFor(element(by.text('Seja Bem-vindo')))
      .toBeVisible()
      .withTimeout(3500);

    await element(by.id('scroll-home')).scrollTo('bottom');
    await element(by.id('scroll-home')).scrollTo('top');

    await element(by.id('button-profile')).tap();

    await expect(element(by.text('Olá, Isaac'))).toBeVisible();
  });
});
