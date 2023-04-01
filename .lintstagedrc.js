module.exports = {
  '*.ss': ['prettier --write', 'eslint'],
  '*.jsx': ['prettier --write', 'eslint'],
  '*.html': ['eslint', 'prettier --write'],
  '*.css': 'prettier --write',
};
