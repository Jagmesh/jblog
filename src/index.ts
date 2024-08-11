import * as colors from 'colors'

interface LogConfig {
    /** List of scopes of logger. Will be showed in log output */
    scopes?: string[],
    /** UTC for time in log */
    utc?: number
}

class Logger {
    private readonly _scopeList: string | undefined;
    private readonly _levels = {
        INFO: 'INFO   ',
        SUCCESS: 'SUCCESS',
        ERROR: 'ERROR  ',
        WARN: 'WARN   '
    }
    private readonly _utc: number = 0;

    constructor(config?: LogConfig) {
        if (!config) return;

        this._scopeList = config.scopes
            ? config.scopes.map((scope) => `[${scope}]`).join('')
            : undefined
        if (config?.utc) this._utc = config?.utc
    }

    /** Prints an INFO type log in console*/
    public info(...text: any[]): void {
        this._logBaseRow(colors.bgBlue(this._levels.INFO), ...text)
    }

    /** Prints a SUCCESS type log in console*/
    public success(...text: any[]): void {
        this._logBaseRow(colors.bgGreen(this._levels.SUCCESS), ...text)
    }

    /** Prints a WARN type log in console*/
    public warn(...text: any[]): void {
        this._logBaseRow(colors.bgYellow(this._levels.WARN), ...text)
    }

    /** Prints an ERROR type log in console*/
    public error(...text: any[]): void {
        this._logBaseRow(colors.bgRed(this._levels.ERROR), ...text)
    }

    /** Highlight a part of text*/
    public highlight(text: string | number): string {
        return colors.bgYellow(`${text}`)
    }

    /** Make a header from a part of text*/
    public header(text: string | number): string {
        return colors.cyan(`${text}`)
    }

    private _logBaseRow(level: string, ...text: any[]): void {
        console.log(
            colors.grey(this._getLocalDate()),
            level + (this._scopeList ? ' ' + colors.magenta(this._scopeList) : ''),
            ...text
        )
    }

    private _getLocalDate(): string {
        const date = new Date();
        date.setHours(date.getHours() + this._utc);
        return date.toJSON().slice(0, -5).replace(/T/, ' ');
    }
}

export = Logger