import dotenv from 'dotenv';

dotenv.config({ override: true });

function requireEnvVariable(envVariable: string): string {
  const envVariableValue = process.env[envVariable];
  if (!envVariableValue || envVariableValue.trim().length === 0) {
    throw new Error(
      `Environment variable ${envVariable} is not set or is empty.`,
    );
  }
  return envVariableValue;
}

export const BASE_URL = requireEnvVariable('BASE_URL');
