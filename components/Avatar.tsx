import React from "react"
import { Image, ImageStyle, StyleSheet } from "react-native"

type Props = {
  source: { uri: string } | number
  size: number
  resizeMode?: "stretch" | "cover" | "center" | "contain"
  style?: ImageStyle
}

const rw = (size: number) => size * 0.75

export default function Avatar({
  source,
  size,
  style,
  resizeMode = "contain",
}: Props) {
  return (
    <Image
      source={source}
      style={[styles.avatarStyle(size, resizeMode), style]}
    />
  )
}

const styles = StyleSheet.create({
  avatarStyle: (size: number, resizeMode: string) =>
    ({
      width: rw(size),
      height: rw(size),
      borderRadius: size,
      resizeMode,
    }) as any,
})
