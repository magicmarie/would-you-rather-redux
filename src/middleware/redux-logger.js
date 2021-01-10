import { createLogger } from 'redux-logger';

const logger = createLogger({
  predicate,
  collapsed,

  colors: ColorsObject,
  titleFormatter,

  stateTransformer,
  actionTransformer,
  errorTransformer,

  console: LoggerObject,

  diffPredicate
});

export default logger;
