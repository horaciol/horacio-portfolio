import {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated"

import { isWeb } from "../utils/utils"

type CustomeAnimationType = {
  opacity: number
  top: number
}

type CustomFadeInUpAnimationHook = {
  animationStyles: CustomeAnimationType
}
type CustomFadeInUpAnimationHookProps = {
  index: number
  duration?: number
  delay?: number
}

export function useFadeInUpAnimation({
  index,
  duration = 700,
  delay = isWeb ? 150 : 220,
}: CustomFadeInUpAnimationHookProps): CustomFadeInUpAnimationHook {
  const sharedValueOpacity = useSharedValue(0)
  const sharedValuePosition = useSharedValue(0)
  const animationStyles = useAnimatedStyle(() => {
    return {
      opacity: sharedValueOpacity.value,
      top: sharedValuePosition.value,
    }
  })

  sharedValueOpacity.value = withDelay(
    delay * index + delay,
    withTiming(1, { duration })
  )
  sharedValuePosition.value = withDelay(
    delay * index + delay,
    withTiming(-10, { duration })
  )

  return {
    animationStyles,
  }
}
