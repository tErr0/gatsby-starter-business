import CMS from 'netlify-cms-app'
import '../assets/sass/styles.sass'
import HomePagePreview from './preview-templates/HomePagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import WorkPreview from './preview-templates/WorkPreview'
import PricingPagePreview from './preview-templates/PricingPagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'

CMS.init()
CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('pricing', PricingPagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
CMS.registerPreviewTemplate('work', WorkPreview)
