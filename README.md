# npm-issue-3958-workaround
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

["An attempt to work around npm issue 3958"](https://github.com/isaacs/npm/issues/3958)

## Documentation

Add `npm-issue-3958-workaround` to your project's `package.json` file like so:

* Under `devDependencies`.
* As an `install` script.

```json
{
  "name": "your-project",
  "version": "1.2.3",
  "scripts": {
    "install": "npm-issue-3958-workaround"
  },
  "devDependencies": {
    "npm-issue-3958-workaround": "~0.1.0",
    "something-that-lists-your-project-as-a-peerdependency": "*"
  }
}
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## License
Copyright (c) 2013 "Cowboy" Ben Alman  
Licensed under the MIT license.
