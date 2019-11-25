module.exports = {
  name: 'durotar',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/durotar',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
