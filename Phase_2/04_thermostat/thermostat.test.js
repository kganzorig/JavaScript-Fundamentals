const Thermostat = require('./thermostat')

describe('Thermostat', () => {
    let thermostat; 

    beforeEach(() => {
        thermostat = new Thermostat();
    });

    it('return beginning temperature as 20', () => {
        expect(thermostat.getTemperature()).toEqual(20);
    });

    it('up method should increase the temperature', () => {
        thermostat.up();
        thermostat.up();
        expect(thermostat.getTemperature()).toEqual(22);
    });

    it('down method should decrease the temperature', () => {
        thermostat.down();
        expect(thermostat.getTemperature()).toEqual(19);
    });

    it('the minimum temperature should be 10', () => {
        while (thermostat.getTemperature() > 10) {
         thermostat.down();
        }
        expect(thermostat.getTemperature()).toEqual(10);
    });

    it
 });