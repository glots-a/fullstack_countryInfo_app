const axios = require("axios");

async function getInfo(countryCode) {
  try {
    const countryInfoResponse = await axios.get(
      `https://date.nager.at/api/v3/CountryInfo/${countryCode}`
    );

    return countryInfoResponse?.data;
  } catch (error) {
    console.log("getInfo", error.message);
  }
}

async function getPopulation(countryName) {
  try {
    const populationResponse = await axios.post(
      "https://countriesnow.space/api/v0.1/countries/population",
      {
        country: countryName,
      }
    );

    return populationResponse?.data;
  } catch (error) {
    console.error("getPopulation", error.message);
    return [];
  }
}

async function getFlag(iso3) {
  try {
    const flagsResponse = await axios.get(
      "https://countriesnow.space/api/v0.1/countries/flag/images"
    );

    const flagsData = Array.isArray(flagsResponse?.data?.data)
      ? flagsResponse?.data?.data
      : [];
    const flag = flagsData.find((flagItem) => flagItem?.iso3 === iso3);

    return flag?.flag || null;
  } catch (error) {
    console.log("getFlag", error.message);
  }
}

module.exports = { getInfo, getPopulation, getFlag };
