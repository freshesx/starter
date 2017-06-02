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
      "message": "Your Project name"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "Some project with Vue2 and HumanUI"
    },
    "author": {
      "type": "string",
      "message": "Author"
    }
  },
  "completeMessage": "{{#inPlace}}Congratulations, To get started:\n\n1. yarn run first\n2. yarn run dev{{else}}Congratulations, To get started:\n\n1. cd {{destDirName}}\n2. yarn run first\n3. yarn run dev{{/inPlace}}"
};
