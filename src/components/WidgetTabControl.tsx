type Props = {
  children: React.ReactNode
  visible: boolean
  handleClick: (event: React.MouseEvent) => void
}

export function WidgetTabControl({ children, visible, handleClick }: Props) {
  return (
    <button
      onClick={handleClick}
      className={`${
        visible ? "bg-brand-primary" : "bg-brand-secondary"
      } hover:bg-brand-primary text-black transition-colors font-bold py-2 px-4 rounded

      `}
    >
      {children}
    </button>
  )
}
