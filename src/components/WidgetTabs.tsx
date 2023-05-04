import { useState } from "react"
import { SquidWidget } from "@0xsquid/widget"
import { WidgetTabControl } from "@/components/WidgetTabControl"
import { WIDGET_THEMES, WIDGETS_LIST } from "@/constants"

export function WidgetTabs() {
  const [visibleWidget, setVisibleWidget] = useState(WIDGETS_LIST[0])
  const [widgetTheme, setWidgetTheme] = useState(WIDGET_THEMES[0])

  return (
    <section>
      <nav className="flex flex-row items-center justify-center gap-4 p-4">
        {WIDGETS_LIST.map(widget => (
          <WidgetTabControl
            key={widget.id}
            visible={visibleWidget.id === widget.id}
            handleClick={() => setVisibleWidget(widget)}
          >
            {widget.name}
          </WidgetTabControl>
        ))}
      </nav>

      <article className="w-full grid items-start grid-cols-1 md:grid-cols-2 gap-6 p-4 mx-auto max-w-5xl">
        <div className="flex justify-center items-center min-h-[640px]">
          <SquidWidget
            config={{
              ...visibleWidget.config,
              style: widgetTheme.style
            }}
          />
        </div>

        <div className="flex flex-col items-center gap-4">
          <p className="text-center bg-slate-700 rounded-md py-2 px-4">
            {visibleWidget.description}
          </p>

          <code className="w-full flex-1 max-w-lg overflow-auto">
            <pre>config: {JSON.stringify(visibleWidget.config, null, 2)}</pre>
          </code>

          <nav className="flex gap-4 items-center justify-center">
            {WIDGET_THEMES.map(theme => (
              <button
                key={theme.name}
                className="bg-slate-700 rounded-full py-2 px-4 flex items-center gap-2 hover:bg-slate-600 transition-colors "
                onClick={() => setWidgetTheme(theme)}
              >
                <span
                  className={`inline-block w-4 h-4 rounded-full ${theme.color}`}
                ></span>
                {theme.name}
              </button>
            ))}
          </nav>
        </div>
      </article>
    </section>
  )
}
