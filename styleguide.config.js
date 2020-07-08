module.exports = {
    skipComponentsWithoutExample: true,
    pagePerSection: true,
    theme: {
        maxWidth: 1300
    },
    styles: {
        Playground: {
          preview: {
            overflow: 'hidden',
            resize: 'both',
          },
        },
      },
    sections: [
        {
            name: 'Introduction',
            content: 'src/docs/introduction.md'
        },
        {
            name: 'UI Components',
            components: 'src/components/**/*.js',
        }
    ],
}