import dotenv from 'dotenv'; // Changed to single quotes

function PROCESS(): { env: NodeJS.ProcessEnv; mode: string } {
  // Load environment-specific configuration
  if (process.env.NODE_ENV === 'admin') {
    return {
      env: { ...dotenv.config({ path: process.cwd() + '/.env.admin' }).parsed, ...process.env },
      mode: 'Mode Admin',
    };
  } else if (process.env.MODE === 'api') {
    return {
      env: { ...dotenv.config({ path: process.cwd() + '/.env.api' }).parsed, ...process.env },
      mode: 'Mode API',
    };
  } else if (dotenv.config({ path: process.cwd() + '/.env.develop' }).parsed) {
    return {
      env: { ...dotenv.config({ path: process.cwd() + '/.env.develop' }).parsed, ...process.env },
      mode: 'Mode Develop',
    };
  }
  return {
    env: { ...dotenv.config().parsed },
    mode: 'Mode Develop',
  };
}

const VariableAmbient = PROCESS();

export default VariableAmbient
