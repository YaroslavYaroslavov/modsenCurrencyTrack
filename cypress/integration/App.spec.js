const clear = Cypress.LocalStorage.clear;

Cypress.LocalStorage.clear = function (keys, ls, rs) {
  // do something with the keys here
  if (keys) {
    return clear.apply(this, arguments);
  }
};
const datas = [
  {
    time_period_start: '2023-04-16T00:00:00.0000000Z',
    time_period_end: '2023-04-17T00:00:00.0000000Z',
    time_open: '2023-04-16T00:00:00.0000000Z',
    time_close: '2023-04-16T23:59:00.0000000Z',
    rate_open: 30319.65475450825,
    rate_high: 30556.838882219112,
    rate_low: 30157.44571809829,
    rate_close: 30317.06964028716,
  },
  {
    time_period_start: '2023-04-17T00:00:00.0000000Z',
    time_period_end: '2023-04-18T00:00:00.0000000Z',
    time_open: '2023-04-17T00:00:00.0000000Z',
    time_close: '2023-04-17T23:59:00.0000000Z',
    rate_open: 30325.266810176858,
    rate_high: 30327.146721995527,
    rate_low: 29282.919848327125,
    rate_close: 29446.297581054292,
  },
  {
    time_period_start: '2023-04-18T00:00:00.0000000Z',
    time_period_end: '2023-04-19T00:00:00.0000000Z',
    time_open: '2023-04-18T00:00:00.0000000Z',
    time_close: '2023-04-18T23:59:00.0000000Z',
    rate_open: 29445.57084827731,
    rate_high: 30462.173965488368,
    rate_low: 29164.2056166281,
    rate_close: 30393.921129722134,
  },
  {
    time_period_start: '2023-04-19T00:00:00.0000000Z',
    time_period_end: '2023-04-20T00:00:00.0000000Z',
    time_open: '2023-04-19T00:00:00.0000000Z',
    time_close: '2023-04-19T23:59:00.0000000Z',
    rate_open: 30390.862393372805,
    rate_high: 30419.119869581493,
    rate_low: 28668.327151923535,
    rate_close: 28817.694425233454,
  },
  {
    time_period_start: '2023-04-20T00:00:00.0000000Z',
    time_period_end: '2023-04-21T00:00:00.0000000Z',
    time_open: '2023-04-20T00:00:00.0000000Z',
    time_close: '2023-04-20T23:59:00.0000000Z',
    rate_open: 28811.25753956375,
    rate_high: 29067.174676847015,
    rate_low: 28027.62539591173,
    rate_close: 28242.061592502025,
  },
  {
    time_period_start: '2023-04-21T00:00:00.0000000Z',
    time_period_end: '2023-04-22T00:00:00.0000000Z',
    time_open: '2023-04-21T00:00:00.0000000Z',
    time_close: '2023-04-21T23:59:00.0000000Z',
    rate_open: 28245.409485390726,
    rate_high: 28363.53132016112,
    rate_low: 27173.307261462487,
    rate_close: 27272.304152099674,
  },
  {
    time_period_start: '2023-04-22T00:00:00.0000000Z',
    time_period_end: '2023-04-23T00:00:00.0000000Z',
    time_open: '2023-04-22T00:00:00.0000000Z',
    time_close: '2023-04-22T23:59:00.0000000Z',
    rate_open: 27259.882793982102,
    rate_high: 27877.423975776124,
    rate_low: 27163.690523169826,
    rate_close: 27816.443077912285,
  },
  {
    time_period_start: '2023-04-23T00:00:00.0000000Z',
    time_period_end: '2023-04-24T00:00:00.0000000Z',
    time_open: '2023-04-23T00:00:00.0000000Z',
    time_close: '2023-04-23T23:59:00.0000000Z',
    rate_open: 27819.3076736944,
    rate_high: 27819.3076736944,
    rate_low: 27355.74488157229,
    rate_close: 27590.88749794432,
  },
  {
    time_period_start: '2023-04-24T00:00:00.0000000Z',
    time_period_end: '2023-04-25T00:00:00.0000000Z',
    time_open: '2023-04-24T00:00:00.0000000Z',
    time_close: '2023-04-24T23:59:00.0000000Z',
    rate_open: 27590.77434279407,
    rate_high: 27975.58123882902,
    rate_low: 27035.677422769386,
    rate_close: 27522.83402330311,
  },
  {
    time_period_start: '2023-04-25T00:00:00.0000000Z',
    time_period_end: '2023-04-26T00:00:00.0000000Z',
    time_open: '2023-04-25T00:00:00.0000000Z',
    time_close: '2023-04-25T23:59:00.0000000Z',
    rate_open: 27512.365616867955,
    rate_high: 28369.09732756312,
    rate_low: 27207.37066554194,
    rate_close: 28304.723011556747,
  },
  {
    time_period_start: '2023-04-26T00:00:00.0000000Z',
    time_period_end: '2023-04-27T00:00:00.0000000Z',
    time_open: '2023-04-26T00:00:00.0000000Z',
    time_close: '2023-04-26T23:59:00.0000000Z',
    rate_open: 28302.45260154328,
    rate_high: 29985.67263535841,
    rate_low: 27297.183152710226,
    rate_close: 28420.71870752896,
  },
  {
    time_period_start: '2023-04-27T00:00:00.0000000Z',
    time_period_end: '2023-04-28T00:00:00.0000000Z',
    time_open: '2023-04-27T00:00:00.0000000Z',
    time_close: '2023-04-27T23:59:00.0000000Z',
    rate_open: 28426.786436611314,
    rate_high: 29870.80491663778,
    rate_low: 28411.750636739504,
    rate_close: 29483.053141722175,
  },
  {
    time_period_start: '2023-04-28T00:00:00.0000000Z',
    time_period_end: '2023-04-29T00:00:00.0000000Z',
    time_open: '2023-04-28T00:00:00.0000000Z',
    time_close: '2023-04-28T23:59:00.0000000Z',
    rate_open: 29482.603731437233,
    rate_high: 29580.113392601583,
    rate_low: 28946.313783283025,
    rate_close: 29338.974783311452,
  },
  {
    time_period_start: '2023-04-29T00:00:00.0000000Z',
    time_period_end: '2023-04-30T00:00:00.0000000Z',
    time_open: '2023-04-29T00:00:00.0000000Z',
    time_close: '2023-04-29T23:59:00.0000000Z',
    rate_open: 29333.05972495051,
    rate_high: 29445.01806024831,
    rate_low: 29094.900891215922,
    rate_close: 29245.551778209618,
  },
  {
    time_period_start: '2023-04-30T00:00:00.0000000Z',
    time_period_end: '2023-05-01T00:00:00.0000000Z',
    time_open: '2023-04-30T00:00:00.0000000Z',
    time_close: '2023-04-30T23:59:00.0000000Z',
    rate_open: 29244.759773194626,
    rate_high: 29952.354855769052,
    rate_low: 29115.103169228183,
    rate_close: 29270.664538528254,
  },
  {
    time_period_start: '2023-05-01T00:00:00.0000000Z',
    time_period_end: '2023-05-02T00:00:00.0000000Z',
    time_open: '2023-05-01T00:00:00.0000000Z',
    time_close: '2023-05-01T23:59:00.0000000Z',
    rate_open: 29241.323412419504,
    rate_high: 29330.74180241452,
    rate_low: 27670.44643715799,
    rate_close: 28087.240609998367,
  },
  {
    time_period_start: '2023-05-02T00:00:00.0000000Z',
    time_period_end: '2023-05-03T00:00:00.0000000Z',
    time_open: '2023-05-02T00:00:00.0000000Z',
    time_close: '2023-05-02T23:59:00.0000000Z',
    rate_open: 28077.18940330686,
    rate_high: 28878.573392406022,
    rate_low: 27921.39704078016,
    rate_close: 28681.699085575518,
  },
  {
    time_period_start: '2023-05-03T00:00:00.0000000Z',
    time_period_end: '2023-05-04T00:00:00.0000000Z',
    time_open: '2023-05-03T00:00:00.0000000Z',
    time_close: '2023-05-03T23:59:00.0000000Z',
    rate_open: 28681.260954231388,
    rate_high: 29265.63973966376,
    rate_low: 28178.622452630305,
    rate_close: 29012.51080294374,
  },
  {
    time_period_start: '2023-05-04T00:00:00.0000000Z',
    time_period_end: '2023-05-05T00:00:00.0000000Z',
    time_open: '2023-05-04T00:00:00.0000000Z',
    time_close: '2023-05-04T23:59:00.0000000Z',
    rate_open: 29035.604011966567,
    rate_high: 29365.555464134115,
    rate_low: 28700.447944307918,
    rate_close: 28851.134314659022,
  },
  {
    time_period_start: '2023-05-05T00:00:00.0000000Z',
    time_period_end: '2023-05-06T00:00:00.0000000Z',
    time_open: '2023-05-05T00:00:00.0000000Z',
    time_close: '2023-05-05T23:59:00.0000000Z',
    rate_open: 28853.31185512027,
    rate_high: 29681.277584727253,
    rate_low: 28840.769829289227,
    rate_close: 29535.509552475294,
  },
  {
    time_period_start: '2023-05-06T00:00:00.0000000Z',
    time_period_end: '2023-05-07T00:00:00.0000000Z',
    time_open: '2023-05-06T00:00:00.0000000Z',
    time_close: '2023-05-06T23:59:00.0000000Z',
    rate_open: 29535.72386902736,
    rate_high: 29816.643436262722,
    rate_low: 28472.66891359124,
    rate_close: 28901.90453400763,
  },
  {
    time_period_start: '2023-05-07T00:00:00.0000000Z',
    time_period_end: '2023-05-08T00:00:00.0000000Z',
    time_open: '2023-05-07T00:00:00.0000000Z',
    time_close: '2023-05-07T23:59:00.0000000Z',
    rate_open: 28903.05330344164,
    rate_high: 29150.50096925263,
    rate_low: 28445.948041863514,
    rate_close: 28458.528521779695,
  },
  {
    time_period_start: '2023-05-08T00:00:00.0000000Z',
    time_period_end: '2023-05-09T00:00:00.0000000Z',
    time_open: '2023-05-08T00:00:00.0000000Z',
    time_close: '2023-05-08T23:59:00.0000000Z',
    rate_open: 28472.491030875604,
    rate_high: 28656.204926954255,
    rate_low: 27300.991406395166,
    rate_close: 27690.793182664303,
  },
  {
    time_period_start: '2023-05-09T00:00:00.0000000Z',
    time_period_end: '2023-05-10T00:00:00.0000000Z',
    time_open: '2023-05-09T00:00:00.0000000Z',
    time_close: '2023-05-09T23:59:00.0000000Z',
    rate_open: 27692.55401528271,
    rate_high: 27822.98426112957,
    rate_low: 27370.68310750305,
    rate_close: 27648.07956219952,
  },
  {
    time_period_start: '2023-05-10T00:00:00.0000000Z',
    time_period_end: '2023-05-11T00:00:00.0000000Z',
    time_open: '2023-05-10T00:00:00.0000000Z',
    time_close: '2023-05-10T23:59:00.0000000Z',
    rate_open: 27643.325173596037,
    rate_high: 28318.36723861716,
    rate_low: 26888.146132259197,
    rate_close: 27621.78696516952,
  },
  {
    time_period_start: '2023-05-11T00:00:00.0000000Z',
    time_period_end: '2023-05-12T00:00:00.0000000Z',
    time_open: '2023-05-11T00:00:00.0000000Z',
    time_close: '2023-05-11T23:59:00.0000000Z',
    rate_open: 27620.370855177403,
    rate_high: 27621.279839443603,
    rate_low: 26783.548665802336,
    rate_close: 26993.994865844,
  },
  {
    time_period_start: '2023-05-12T00:00:00.0000000Z',
    time_period_end: '2023-05-13T00:00:00.0000000Z',
    time_open: '2023-05-12T00:00:00.0000000Z',
    time_close: '2023-05-12T23:59:00.0000000Z',
    rate_open: 26982.83797619524,
    rate_high: 27051.400156319145,
    rate_low: 25882.74036750527,
    rate_close: 26803.12624753066,
  },
  {
    time_period_start: '2023-05-13T00:00:00.0000000Z',
    time_period_end: '2023-05-14T00:00:00.0000000Z',
    time_open: '2023-05-13T00:00:00.0000000Z',
    time_close: '2023-05-13T23:59:00.0000000Z',
    rate_open: 26807.925975806385,
    rate_high: 27020.02102604408,
    rate_low: 26703.96590094551,
    rate_close: 26782.355351385675,
  },
  {
    time_period_start: '2023-05-14T00:00:00.0000000Z',
    time_period_end: '2023-05-15T00:00:00.0000000Z',
    time_open: '2023-05-14T00:00:00.0000000Z',
    time_close: '2023-05-14T23:59:00.0000000Z',
    rate_open: 26789.39563595396,
    rate_high: 27151.98136555908,
    rate_low: 26659.212657104876,
    rate_close: 26927.81883674945,
  },
  {
    time_period_start: '2023-05-15T00:00:00.0000000Z',
    time_period_end: '2023-05-16T00:00:00.0000000Z',
    time_open: '2023-05-15T00:00:00.0000000Z',
    time_close: '2023-05-15T23:59:00.0000000Z',
    rate_open: 26927.406988305494,
    rate_high: 27649.233863760197,
    rate_low: 26755.194788794695,
    rate_close: 27194.039462259836,
  },
];

describe('Модуль конвертации валют', () => {
  it('Модуль конвертации валют', () => {
    cy.visit('/');
    cy.get('.menu-toggle').click();
    cy.get('a[data-testid]').contains('Homepage').click();
    cy.get('.card-wrapper').first().click();
    cy.get('.currencySelect').first().select('Euro');
    cy.get('.inputCurrencyFrom').clear().type('123');
  });
});

describe('Модуль смены темы', () => {
  it('Модуль смены темы', () => {
    cy.visit('/');

    cy.get('.themeSwitcher')
      .click()
      .then(($themeSwitcher) => {
        if ($themeSwitcher.attr('checked')) {
          cy.get('html').should('have.css', 'background-color', 'rgb(255, 255, 255)');
        } else {
          cy.get('html').should('have.css', 'background-color', 'rgb(0, 0, 0)');
        }
      });
  });
});
describe('Модуль поиска и карты', () => {
  it('Модуль поиска и карты', () => {
    cy.visit('/');
    cy.get('.menu-toggle').click();
    cy.get('a[data-testid]').contains('BankCard').click();
    cy.get('.autocompleteInput').clear().type('E');
    cy.get('.suggestion').should('exist').click();
  });
});

describe('Модуль отрсиовки графика', () => {
  it('Переход на страницу', () => {
    cy.visit('/');
    cy.get('.menu-toggle').click();
    cy.get('a[data-testid]').contains('Timeline').click();
  });
  it('Выбор валюты', () => {
    cy.get('.selectCurrency').select('Yen');
  });
  it('Ввод данных', () => {
    datas.forEach((el) => {
      cy.get('input[placeholder="Open"]').clear();
      cy.get('input[placeholder="High"]').clear();
      cy.get('input[placeholder="Low"]').clear();
      cy.get('input[placeholder="Close"]').clear();
      cy.get('input[placeholder="Open"]').type(el.rate_open);
      cy.get('input[placeholder="High"]').type(el.rate_high);
      cy.get('input[placeholder="Low"]').type(el.rate_low);
      cy.get('input[placeholder="Close"]').type(el.rate_close);
      cy.get('.buttonAddOHLC').click();
    });
  });

  it('Все данные введены, иницилизация отрисовки', () => {
    cy.get('.drawGraph').click();
  });
  it('График отрисован', () => {
    cy.get('canvas').should('exist');
  });
});
