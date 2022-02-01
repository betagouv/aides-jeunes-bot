const cron = require("cron");

const jobs = {
  pollResult: require("./jobs/poll-results.js"),
};

function createCronJob(configuration) {
  console.log(
    `Created cron task "${configuration.name}" (${
      configuration.cronTime
    }) at ${new Date()}`
  );
  return new cron.CronJob({
    cronTime: configuration.cronTime,
    onTick: () => {
      console.log(`Running job "${configuration.name}" at ${new Date()}`);
      configuration.action();
    },
    start: configuration.start,
    timeZone: configuration.timeZone,
  });
}

for (let key in jobs) {
  createCronJob(jobs[key]);
}
