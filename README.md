# `spawnp`

### A simple Async/Promise wrapper around `child_process.spawn`

## Install

```
npm i @develephant/spawnp --save
```

## Usage

```js
const spawnp = require('@develephant/spawnp')
```

## Example

```js
async function run() {
  await spawnp('browserify', ['index.js', '-o', 'bundle.js'], process.cwd())
}
```

---

#### `spawnp` &Star; &copy; 2017 develephant &Star; MIT license
