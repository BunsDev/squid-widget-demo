import { Widget } from "@/types"

const sharedWidgetConfig = {
  apiUrl: "https://testnet.api.0xsquid.com"
}

export const WIDGETS_LIST: Widget[] = [
  {
    id: 1,
    name: "Minimalist",
    description: "The default widget",
    config: sharedWidgetConfig
  },
  {
    id: 2,
    name: "Brave",
    description: "Infinite approval and high slippage",
    config: {
      ...sharedWidgetConfig,
      slippage: 3,
      infiniteApproval: true
    }
  },
  {
    id: 3,
    name: "Opinionated",
    description: "Predefined default DEX and chains",
    config: {
      ...sharedWidgetConfig,
      preferDex: ["uniswap"],
      initialFromChainId: 1,
      initialToChainId: 137
    }
  },
  {
    id: 4,
    name: "Controls changed",
    description: "Default controls and logo changed",
    config: {
      ...sharedWidgetConfig,
      titles: {
        swap: "Swap",
        settings: "Configuration",
        wallets: "Connect Wallets",
        tokens: "Change Token",
        chains: "Change Chain",
        history: "History",
        transaction: "Transaction",
        destination: "Destination address",
        allTokens: "Tokens"
      },
      mainLogoUrl: "https://doodleipsum.com/50x50/avatar"
    }
  },
  {
    id: 5,
    name: "Cautious",
    description: "Low slippage and infinite approval disabled",
    config: {
      ...sharedWidgetConfig,
      slippage: 0.5,
      infiniteApproval: false
    }
  }
]
