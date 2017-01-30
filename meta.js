module.exports = {
  "helpers": {
    "if_or": function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    }
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Project name"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "A Vue.js project"
    },
    "author": {
      "type": "string",
      "message": "Author"
    },
    "unit": {
      "type": "confirm",
      "default": false,
      "message": "Setup unit tests with Karma + Mocha?"
    },
    "e2e": {
      "type": "confirm",
      "default": false,
      "message": "Setup e2e tests with Nightwatch?"
    }
  },
  "filters": {
    "config/test.env.js": "unit || e2e",
    "test/unit/**/*": "unit",
    "test/e2e/**/*": "e2e"
  },
  "completeMessage": "To get started:\n\n  cd {{destDirName}}\n  yarn install\n yarn run config\n  yarn run dev"
};
