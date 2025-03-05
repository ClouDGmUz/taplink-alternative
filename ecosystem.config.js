module.exports = {
  apps: [{
    name: 'taplink',
    script: './server.js',
    instances: 'max',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 8001
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};