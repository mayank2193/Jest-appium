import wd from 'wd';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
const PORT = 4723;
const config = {
  'platform' : 'Android',
            'deviceName' : 'Galaxy S21',
            'isRealMobile' : true,
            'platformVersion' : '11',
            'platformName': 'Android',
            'name': 'sample test', // test name
            'build': 'Android Build jest-new', // CI/CD job or build name
            'app': 'Android'

};
const driver = wd.promiseChainRemote('http://mayankmaurya:4N7wU1Sq7cBGRHCaGf5Y72mTS30xyLV1faGphyvELhuNoTLMRk@beta-hub.lambdatest.com/wd/hub');

beforeAll(async () => {
  await driver.init(config);
  await driver.sleep(20000); // wait for app to load - if you keep this too short you may get problems.
})

test('appium renders', async () => {
  //expect(await driver.hasElementByAccessibilityId('testview')).toBe(true);
  //expect(await driver.hasElementByAccessibilityId('notthere')).toBe(false);
});
afterAll(async () => {
  await driver.quit()
});


