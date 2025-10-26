module.exports = {
  apps: [
    {
      name: 'invidget',
      script: 'src/index.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '300M',
      env: {
        NODE_ENV: 'development',
        LOGGING_LEVEL: 'silly'
      },
      env_production: {
        NODE_ENV: 'production',
        LOGGING_LEVEL: 'info'
      }
    }
  ]
}
