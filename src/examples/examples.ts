import { Webflow } from './webflow'
import { Components } from './components'
import { Elements } from './elements'
import { Styles } from './styles'
import { Variables } from './variables'
import { Pages } from './pages'
import { Folders } from './folders'
import { Payments } from './payments'
import { Assets } from './assets'
import { ValidFileTypesEnum } from './assets'

// Add default example for createAssetFromURL
Assets.createAssetFromURL.example = {
  url: 'https://picsum.photos/200',
  fileName: 'example-image.jpg',
  fileTypeEnum: ValidFileTypesEnum.JPEG,
}

const examples = {
  Webflow: Webflow,
  Elements: Elements,
  Styles: Styles,
  Components: Components,
  Variables: Variables,
  Pages: Pages,
  Folders: Folders,
  Payments: Payments,
  Assets: Assets
}

export default examples
