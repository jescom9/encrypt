import fs from 'fs';

interface LogEntry {
  functionName: string;
  params: any;
}

const logFile = 'paramsLog.json';

export const logParams = (functionName: string, params: any) => {
  const logEntry: LogEntry = { functionName, params };
  const logs = fs.existsSync(logFile) ? JSON.parse(fs.readFileSync(logFile, 'utf8')) : [];
  logs.push(logEntry);
  fs.writeFileSync(logFile, JSON.stringify(logs, null, 2));
};
