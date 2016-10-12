# Karma and Jasmine Configuration

1. `git init`
2. `touch .gitignore`
3. `npm init`
4. `npm install --save-dev karma`
5. Run `karma init` :
    1. `./node_modules/karma/bin/karma init`
                OR
    2. create a script inside of package.json:
        ```javascript
              "scripts": {
                "test": "karma start",
                "karma-init": "karma init"
              },
        ```
6. `npm install --save-dev jasmine`
7. `bower init` To get client side dependencies.