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

    it('when power saving mode is on, the temperature does not exceed the maximum of', () => {
        thermostat.setPowerSavingMode(true); 
        for (let i = thermostat.temperature; i < thermostat.maxPSMonTemperature; i++) {
            thermostat.up(); 
        }
        expect(thermostat.getTemperature()).toEqual(25);


        /*
        thermostat.temperature = thermostat.maxPSMonTemperature;
        expect(thermostat.getTemperature()).toEqual(25);

        */
    })

    it('when power saving mode is off, the max temperature is 32', () => {
        thermostat.setPowerSavingMode(false);
        for (let i = thermostat.temperature; i < thermostat.maxPSMoffTemperature; i++) {
            thermostat.up();
        }
        expect(thermostat.getTemperature()).toEqual(32);
        });

    it('resets the temperature to 20 when the reset method is used', () => {
        thermostat.down();
        thermostat.reset();
        expect(thermostat.getTemperature()).toEqual(20);
    });
});        