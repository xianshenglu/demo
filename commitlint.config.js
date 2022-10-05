module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: ['commitlint-plugin-function-rules'],
  rules: {
    'type-empty': [0],
    'subject-empty': [0],
    'type-enum': [0],
    'function-rules/type-enum': [
      2,
      'always',
      parsed => {
        /**
         * for @commitlint/cli@^12.1.1
         * parsed.type would be null when meeting message with # in the type.
         * for example, feat#123: add a feature
         * parsed.type would be null, also for subject. So, I turn off
         * type-empty, subject-empty, type-enum...
         */
        const headerRegex = /(((feat|fix|perf)([^\s]+)?)|(build|chore|ci|docs|refactor|revert|style|test)): .+/
        const isHeaderValid = parsed.header.match(headerRegex)
        if (isHeaderValid) {
          return [true]
        }
        return [false, `header must match this regex: ${headerRegex}`]
      }
    ]
  }
}
