import { SemanticHead } from "@/components/SemanticHead"
import { WidgetTabs } from "@/components/WidgetTabs"

export default function Home() {
  return (
    <>
      <SemanticHead />
      <main>
        <h1 className="text-4xl font-bold text-center my-8">
          Squid Widget Demo
        </h1>

        <WidgetTabs />
      </main>
    </>
  )
}
