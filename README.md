[ONLY ONCE ON FIRST USAGE]
The tests project is used to test components before they are they are published to npm. 
In the library project run `npm link`. In the tests project use `npm link rivet-vue`. 
will create a global link reference to the library project and any changes made inside
the library project will be reflected in the tests vite project. 
[Note] Even though the project name is library, the package.json has the package name
rivet-vue. Which is what npm references

Ref: https://docs.npmjs.com/cli/v9/commands/npm-link