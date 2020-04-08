# babel7-usage
Babel 7.x usage

I debug Node.js app with Babel 7.x tools. I have used babel, @babel/node, @babel/register (hook)

You can find different options to debug in **launch.json** file.

if you want to see Babel 6.x usage, check this repository (https://github.com/kenanhancer/babel6-usage.git)

## package.json
```json
{
  "name": "babel7-usage",
  "version": "1.0.0",
  "description": "Babel 7.x usage",
  "type": "commonJS",
  "main": "index.js",
  "scripts": {
    "buildv1:src": "babel src -d dist -s --delete-dir-on-start",
    "buildv2:src": "babel src -d dist --source-maps --delete-dir-on-start",
    "buildv3:src": "babel src --out-dir dist -s --delete-dir-on-start",
    "buildv4:src": "babel src --out-dir dist --source-maps --delete-dir-on-start",
    "buildv5:src": "babel src --out-dir dist --delete-dir-on-start",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "devDependencies": {
    "@babel/cli": "^7.8.4",
    "@babel/core": "^7.9.0",
    "@babel/node": "^7.8.7",
    "@babel/plugin-transform-runtime": "^7.9.0",
    "@babel/preset-env": "^7.9.5",
    "@babel/preset-react": "^7.9.4",
    "@babel/register": "^7.9.0",
    "nodemon": "^2.0.2"
  },
  "dependencies": {
    "react": "^16.13.1"
  }
}
```

## tasks.json
```json
{
    "version": "2.0.0",
    "tasks": [
        {
            "label": "build-babel",
            "type": "npm",
            "script": "buildv2:src",
            "group": "build",
            "problemMatcher": []
        }
    ]
}
```

## launch.json
```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Debug App with babel preLaunchTask",
            "type": "node",
            "request": "launch",
            "preLaunchTask": "build-babel",
            "program": "${workspaceRoot}/src/index.js",
            "outFiles": [
                "${workspaceRoot}/dist/**"
            ],
            "console": "internalConsole",
            "internalConsoleOptions": "openOnSessionStart",
            "stopOnEntry": false
        },
        {
            "name": "Debug App with @babel/register",
            "type": "node",
            "request": "launch",
            "program": "${workspaceRoot}/src/index.js",
            "runtimeArgs": [
                "--nolazy",
                "--require",
                "@babel/register"
            ],
            "console": "internalConsole",
            "internalConsoleOptions": "openOnSessionStart",
            "stopOnEntry": false
        },
        {
            "name": "Debug App with Nodemon and @babel/register",
            "type": "node",
            "request": "launch",
            "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/nodemon",
            "program": "${workspaceRoot}/src/index.js",
            "runtimeArgs": [
                "--nolazy",
                "--require",
                "@babel/register"
            ],
            "console": "internalConsole",
            "internalConsoleOptions": "openOnSessionStart",
            "stopOnEntry": false
        },
        {
            "name": "Debug App with @babel/node",
            "type": "node",
            "request": "launch",
            "program": "${workspaceRoot}/src/index.js",
            "runtimeArgs": [
                "--nolazy",
                "./node_modules/.bin/babel-node"
            ],
            "env": {
                "NODE_ENV": "development"
            },
            "console": "internalConsole",
            "internalConsoleOptions": "openOnSessionStart",
            "stopOnEntry": false
        }
    ]
}
```