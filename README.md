[ONLY ONCE ON FIRST USAGE]
The tests project is used to test components before they are they are published to npm. 
In the library project run `npm link`. In the tests project use `npm link library`. This
will create a global link reference to the library project and any changes made inside
that project will be reflected in this vite project. The test project uses cypress for 
frontend ux/ui testing

Ref: https://docs.npmjs.com/cli/v9/commands/npm-link