import { joinURL } from 'ufo'
import type { ProviderGetImage } from '@nuxt/image'
import { createOperationsGenerator } from '#image'

const operationsGenerator = createOperationsGenerator({ joinWith: "&"})

export const getImage: ProviderGetImage = (
  src,
  { modifiers = {} } = {}
) => {

  const operations = operationsGenerator({...modifiers, hide_border: "true"} as {})

  return {
    url: joinURL("https://github-readme-stats.vercel.app", src + (operations ? '?' + operations : '')),
  }
}