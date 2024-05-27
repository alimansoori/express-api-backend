import winston, { format, Logger } from 'winston';
import config from '../config';

export abstract class BaseLogger {
    protected abstract getFormat(): winston.Logform.Format;

    public createLogger(): Logger {
        const enumerateErrorFormat = winston.format((info) => {
            if (info instanceof Error) {
                Object.assign(info, { message: info.stack });
            }
            return info;
        });

        return winston.createLogger({
            level: this.getLevel(),
            format: format.combine(
                enumerateErrorFormat(),
                format.splat(),
                this.getTimestampFormat(),
                format.errors({ stack: true }),
                this.getMessageFormat(),
                this.getFormat(),
            ),
            defaultMeta: { service: 'user-service' },
            transports: [
                new winston.transports.Console({
                    stderrLevels: ['error']
                }),
                new winston.transports.File({ filename: 'tmp/error.log', level: 'error' }),
                new winston.transports.File({ filename: 'tmp/combined.log' })
            ]
        })
    }

    private getLevel(): string {
        return config.env === 'development' ? 'debug' : 'info';
    }

    protected getTimestampFormat(): winston.Logform.Format {
        return format.timestamp();
    }

    private getMessageFormat(): winston.Logform.Format {
        return format.json();
    }

}
