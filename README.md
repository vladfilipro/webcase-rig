# Webcase - rig
[![Dependency Status](https://david-dm.org/vladfilipro/webcase-rig.svg)](https://david-dm.org/vladfilipro/webcase-rig)

Generates templates used for creating [rigs](https://www.npmjs.com/package/rigs) plugins.

The template will generate a rig containing one task called `output`. You can follow the same pattern to create additional tasks. Do not forget to update the readme file and the package.json once your component is finished.

## How to use:
Install webcase:

```
npm install webcase -g
```

Install webcase-rig:

```
npm install webcase-rig -g
```

Use the following command to initialize a template in the folder you wish:

```
webcase rig init
```

### Known issues
The template will fail if the folder you are trying to initialize in is not empty. It will only tolerate the `.git` folder.

### Important:
Remember the plugin name must be of format `rig-{name}` in order to be identified by RIGS.

#### Generated using webcase@1.0.3
