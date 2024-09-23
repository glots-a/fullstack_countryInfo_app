const axios = require("axios");
const { getInfo, getPopulation, getFlag } = require("../helpers/helpers");

class Country {
  async getCountries() {
    const response = await axios.get(
      "https://date.nager.at/api/v3/AvailableCountries"
    );

    return response.data;
  }

  async getCountryInfo(countryCode) {
    // Country Info
    const countryInfo = await getInfo(countryCode);

    //  Border
    const borderCountries = countryInfo?.borders || [];

    // Population

    const population = await getPopulation(countryInfo?.commonName);

    // Flag
    const flag = await getFlag(population?.data?.iso3);

    // Prepearing data for response
    const detailedInfo = {
      name: countryInfo?.commonName,
      countryCode: countryInfo?.countryCode,
      borders: borderCountries,
      population: population?.data?.populationCounts,
      flag,
    };

    return detailedInfo;
  }
}

const service = new Country();

module.exports = service;
