import { Linking } from "react-native"

type LoadUrlHookType = {
  loadUrl: (url: string) => void
}

export const useLoadUrl = (): LoadUrlHookType => {
  const loadUrl = async (url: string) => {
    const supported = await Linking.canOpenURL(url)
    if (supported) {
      await Linking.openURL(url)
    } else {
      console.log(`Don't know how to open this URL: ${url}`)
    }
  }

  return { loadUrl }
}
