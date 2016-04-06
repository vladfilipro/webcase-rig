# rig-<% name %>
A rig containing a task used for outputting messages to console

## How to use
1. Install rigs package: `npm install rigs`
2. Install rig-<% name %>: `npm install rig-<% name %>`

## Available tasks in rig-<% name %>
- `rig-<% name %>__output`: A task which outputs the configured message to the console
  - properties:
    - `message`: String, contains the message to be displayed

    ```
    {
        taskname: 'rig-<% name %>__output',
        dependency: [],
        message: 'This is an example'
    }
    ```

### Generated using [webcase-rig](https://www.npmjs.com/package/webcase-rig) version <% version %>
