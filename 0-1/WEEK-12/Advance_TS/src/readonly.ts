/*
When you have a configuration object that should not be altered after initialization, making it Readonly ensures its properties cannot be changed.
*/

interface Config {
    readonly endpoint: string;
    readonly apiKey: string;
  }
  
  const config: Config = {
    endpoint: 'https://api.example.com',
    apiKey: 'abcdef123456',
  };
  
  // config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.
  