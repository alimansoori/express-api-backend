import winston, { format } from 'winston';
import config from '../config';
import { BaseLogger } from './base-logger';

export class ProdLogger extends BaseLogger {
    protected getFormat(): winston.Logform.Format {
        return format.combine(
            config.env === 'development' ? format.colorize() : format.uncolorize(),
        );
    }

    protected getTimestampFormat(): winston.Logform.Format {
        return format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' });
    }
}

export default new ProdLogger().createLogger();