function updateFile (api, file, callback) {
  file = api.resolve(file)
  let content = fs.existsSync(file)
    ? fs.readFileSync(file, { encoding: 'utf8' })
    : ''

  content = callback(content.split(/\r?\n/g)).join('\n')

  fs.writeFileSync(file, content, { encoding: 'utf8' })
}

module.exports = {
  updateFile,
}