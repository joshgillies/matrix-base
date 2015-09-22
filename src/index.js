var Importer = require('node-matrix-importer')
var asset = require('node-matrix-virtual-assets')

var tree = asset('folder', { name: 'matrix-base' }, [
  asset('folder', { name: 'Config', link: 'type_2' }, [
    asset('site', { name: 'Design' }),
    asset('site', { name: 'Media' }),
    asset('site', { name: 'Users' }),
    asset('site', { name: 'Web Services' }),
    asset('folder', { name: 'Metadata' }),
    asset('folder', { name: 'Components' }),
    asset('folder', { name: 'Layouts' })
  ]),
  asset('site', { name: 'Site' }, [
    asset('page_standard', { name: 'Home', link: { 'notice': [{ 'index': 'Site' }] } }),
    asset('page_standard', { name: '404', link: { 'notice': [{ 'archive': 'Site' }] } })
  ])
])
