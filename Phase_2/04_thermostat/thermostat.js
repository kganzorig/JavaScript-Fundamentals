class Thermostat {
    constructor() {
        this.temperature = 20;
        this.minTemperature = 10; 
        this.maxPSMonTemperature = 25;
        this.maxPSMoffTemperature = 32;
        this.powerSavingMode = true;

    }

    getTemperature() {
        return this.temperature;
    }

    up() {
        if(this.temperature < this.maxPSMonTemperature) {
            this.temperature += 1;
        }
        else {
        if(this.temperature < this.maxPSMoffTemperature) {
            this.temperature +=1;
        }
        }

    }

    down() {
        if(this.temperature > this.minTemperature) {
            this.temperature -= 1; 
        }
    }


    setPowerSavingMode() {
        this.powerSavingMode = !this.powerSavingMode;
        this.temperature = (this.powerSavingMode && this.temperature > 25) ? 25 : this.temperature;
    }

    reset() {
        this.temperature = 20;
    }

    currentEnergyUsage() {
        if(this.temperature < 18) {
            return 'low-usage';
        }
        else if(this.temperature <=25) {
                return 'medium-usage';
        }
        else {
            return 'high-usage' ;
         }
    }
}

module.exports = Thermostat