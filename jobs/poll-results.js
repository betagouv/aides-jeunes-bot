const axios = require("axios");

const config = {
  MATTERMOST_POST_URL: process.env.MATTERMOST_POST_URL,
};

module.exports = {
  name: "Fetch poll results",
  cronTime: "0 9 * * *",
  start: true,
  timeZone: "Europe/Paris",
  action: async () => {
    try {
      const json = JSON.stringify({ text: "The bot is working" });
      await axios
        .post(config.MATTERMOST_POST_URL, json, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(function (response) {
          //
        })
        .catch(function (error) {
          console.error(
            `Job failed with status ${error.response.status} ${error.response.data}`
          );
        });
    } catch (error) {
      console.error(`Job failed: ${error}`);
    }
  },
};
