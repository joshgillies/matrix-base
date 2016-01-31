var assetsToXML = require('node-matrix-assets-xml')
var asset = require('node-matrix-assets')
var getAssetById = asset.getAssetById

var tree = asset('folder', { name: 'matrix-base' },
  asset('folder', { name: 'Config', link: 'type_2' },
    asset('site', { name: 'Design' }),
    asset('site', { name: 'Media' }),
    asset('site', { name: 'Users' }),
    asset('site', { name: 'Web Services' }),
    asset('folder', { name: 'Metadata' }),
    asset('folder', { name: 'Components' }),
    asset('folder', { name: 'Layouts' })
  ),
  asset('site', { id: 'site', name: 'Site' },
    asset('page_standard', { name: 'Home', link: { index: getAssetById('site') } },
      asset('bodycopy', { link: 'type_2', dependant: '1', exclusive: '1' },
        asset('bodycopy_div', { link: 'type_2', dependant: '1' },
          asset('content_type_wysiwyg', { dependant: '1', exclusive: '1' })
        )
      )
    ),
    asset('page_standard', { name: '404', link: ['type_2', { not_found: getAssetById('site'), archive: getAssetById('site') }] },
      asset('bodycopy', { link: 'type_2', dependant: '1', exclusive: '1' },
        asset('bodycopy_div', { link: 'type_2', dependant: '1' },
          asset('content_type_wysiwyg', { dependant: '1', exclusive: '1' })
        )
      )
    )
  )
)

console.log(assetsToXML(tree))
