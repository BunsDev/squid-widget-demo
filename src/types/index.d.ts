import type {
  AppConfig,
  ConfigTheme
} from "@0xsquid/widget/widget/core/types/config"

export type Widget = {
  id: number
  name: string
  description: string
  config: AppConfig
}

export type WidgetTheme = {
  color: string
  name: string
  style: ConfigTheme
}
