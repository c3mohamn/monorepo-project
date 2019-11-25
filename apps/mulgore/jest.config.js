module.exports = {
  name: 'mulgore',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/mulgore',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
