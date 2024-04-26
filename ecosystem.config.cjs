module.exports: {
  apps: [
    {
      cwd: '/home/ubuntu/full-stack-motorola/frontend',
      script: './.output/server/index.mjs',
      interpreter: "node",
      args: 'start',
      name: 'Front Motorola',
      env: {
        PORT: 3500,
        NODE_ENV: 'development'
      }
    },
    {
      cwd: '/home/ubuntu/full-stack-motorola/backend',
      script: './dist/index.js',
      interpreter: "node",
      args: 'start',
      name: 'Back Motorola',
      env: {
        PORT: 8080,
        NODE_ENV: 'development'
    },
  }
  ]
}
