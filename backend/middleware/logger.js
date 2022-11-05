const { v4: uuid } = require('uuid')
const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')
const { format } = require('date-fns')

const logEvents = async (message, logFileName) => {
<<<<<<< HEAD
  const dateTime = `${format(new Date(), "yyyyMMdd/tHH:mm:ss")}`;
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
  try {
    if (!fs.existsSync(path.join(__dirname, "..", "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "..", "logs"));
    }
    await fsPromises.appendFile(
      path.join(__dirname, "..", "logs", logFileName),
      logItem
    );
  } catch (err) {
    console.log("Error: " + err);
  }
};
=======
    const dateTime = `${format(new Date(), 'yyyyMMdd/tHH:mm:ss')}`
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`
    try {
        if (!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, '..', 'logs'))
        }
        await fsPromises.appendFile(
            path.join(__dirname, '..', 'logs', logFileName),
            logItem
        )
    } catch {
        ;(err) => console.log('Error: ' + err)
    }
}
>>>>>>> v4.0.6
const logger = (req, res, next) => {
    const message = `${req.method}\t${req.url}\t${req.headers.origin}`
    logEvents(message, 'reqLog.log')
    console.log(`${req?.method} ${req?.path}`)
    next()
}
module.exports = { logger, logEvents }
