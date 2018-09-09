React SPA Example
=================

Setup
-----

**1. Install latest Node**

Download for Mac: https://nodejs.org/en/download/

**2. Create React App**

    $ npx create-react-app

**3. Git Init**

    $ git init; git remote add origin ...

**4. Copy Src to Scaffold**

cp -R src scaffold

**5. Remove Unnecessary Files**

    $ rm -f README.md

**6. Set Text Editor Tab Size to 2**

    Code > Preferences > Settings > "Indent" Tab Size

**7. Create Components Directory & Imports**

- common
- forms
- layout
- pages

**8. Add React-HTTP-Request npm module**

Link: https://www.npmjs.com/package/react-http-request

Useful component to perform a network request and parse the response using superagent module.

    $ yarn add react-http-request

Test
----

**1. Usage**

    $ yarn start

Test
----

**1. Run Tests**

    $ yarn test [a(all)|w(watch)]

