import { AppConfig } from "@0xsquid/widget/widget/core/types/config"

type Props = {
  config: AppConfig
}

export function IframeWidget({ config }: Props) {
  return (
    <iframe
      title="Squid Widget"
      width="420"
      height="641"
      src={`https://widget.squidrouter.com/iframe?config=${encodeURIComponent(
        JSON.stringify(config)
      )}`}
    ></iframe>
  )
}
