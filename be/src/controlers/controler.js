const service = require("../services/country_service");

class Controler {
  async countries(_, res) {
    try {
      const data = await service.getCountries();
      res.json(data);
    } catch (error) {
      console.error("Error fetching countries:", error.message);
      res.status(500).json({ message: "Countries are not available." });
    }
  }

  async info(req, res) {
    const { countryCode } = req.params;

    try {
      const detailedInfo = await service.getCountryInfo(countryCode);

      res.json(detailedInfo);
    } catch (error) {
      console.error(
        `Error -----------> country code ${countryCode}:`,
        error.message
      );
      res.status(500).json({ message: "Country information not avalible." });
    }
  }
}

const controler = new Controler();
module.exports = controler;
