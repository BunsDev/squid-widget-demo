import { Widget, WidgetTheme } from "@/types"

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

export const WIDGET_THEMES: WidgetTheme[] = [
  {
    name: "Darkblue",
    color: "bg-[#202053]",
    style: {
      neutralContent: "#636781",
      baseContent: "#eeeefe",
      base100: "#454565",
      base200: "#202053",
      base300: "#111131",
      error: "#ed5656",
      warning: "#eded56",
      success: "#56ed56",
      primary: "#353595",
      secondary: "#37397C",
      secondaryContent: "#bbbbfb",
      neutral: "#101030",
      roundedBtn: "24px",
      roundedBox: "20px",
      roundedDropDown: "0px"
    }
  },
  {
    name: "Solarized Dark",
    color: "bg-[#602116]",
    style: {
      neutralContent: "#836761",
      baseContent: "#feeeee",
      base100: "#231010",
      base200: "#402033",
      base300: "#211121",
      error: "#ed3636",
      warning: "#eded36",
      success: "#36ed36",
      primary: "#541010",
      secondary: "#602116",
      secondaryContent: "#fbbbbb",
      neutral: "#301020",
      roundedBtn: "24px",
      roundedBox: "20px",
      roundedDropDown: "0px"
    }
  },
  {
    name: "Dark",
    color: "bg-[#080808]",
    style: {
      neutralContent: "#666666",
      baseContent: "#eeeeee",
      base100: "#080808",
      base200: "#151515",
      base300: "#1f1f1f",
      error: "#ee3333",
      warning: "#eeee33",
      success: "#33ee33",
      primary: "#000000",
      secondary: "#000000",
      secondaryContent: "#bbbbbb",
      neutral: "#080808",
      roundedBtn: "24px",
      roundedBox: "20px",
      roundedDropDown: "0px"
    }
  }
]
