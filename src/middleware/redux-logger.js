import { createLogger } from 'redux-logger';

const logger = createLogger({
  collapsed: true,
  level: true,
});

export default logger;
