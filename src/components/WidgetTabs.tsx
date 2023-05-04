import { useState } from "react"
import { SquidWidget } from "@0xsquid/widget"
import { WidgetTabControl } from "@/components/WidgetTabControl"
import { WIDGETS_LIST } from "@/constants"

export function WidgetTabs() {
  const [visibleWidget, setVisibleWidget] = useState(WIDGETS_LIST[0])

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

      <article className="w-full grid grid-cols-1 md:grid-cols-2 place-content-center gap-6 p-4 mx-auto max-w-5xl">
        <div className="flex justify-center items-center min-h-[640px]">
          <SquidWidget config={visibleWidget.config} />
        </div>

        <div className="flex flex-col items-center gap-4">
          <p className="text-center bg-slate-700 rounded-md py-2 px-4">
            {visibleWidget.description}
          </p>

          <code className="w-full flex-1 max-w-lg overflow-auto">
            <pre>config: {JSON.stringify(visibleWidget.config, null, 2)}</pre>
          </code>
        </div>
      </article>
    </section>
  )
}
