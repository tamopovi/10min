To add the package to target project:
1. Add a package.json with this content in the target project node_modules:
```
{
  "name": "commons",
  "version": "1.0.0",
  "description": "bar",
  "main": "./bin/index.js"
}
```
2. Change `compilerOptions` in `tsconfig.json` to:
```
"compilerOptions": {
    "outDir": "../TARGET_PROJECT/node_modules/commons/bin",
    "declaration": true
}
```

Build `commons` project:
```
tsc -b
```