type Props = {
  label?: string
  onToggle: (checked: boolean) => void
}

export function ToggleBar({ onToggle, label }: Props) {
  return (
    <label className="flex text-ellipsis min-w-max text-center gap-2 items-center justify-center cursor-pointer bg-slate-950 hover:bg-slate-900 border-2 border-transparent transition-colors hover:border-gray-300 p-3 rounded-full text-gray-300">
      <div className="relative">
        <input
          onChange={e => onToggle(e.target.checked)}
          type="checkbox"
          className="sr-only peer"
        />
        <div className="w-11 h-6 rounded-full peer bg-black ring-2 ring-brand-primary peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-brand-primary after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all opacity-90"></div>
      </div>

      {label && <span className="text-sm font-medium">{label}</span>}
    </label>
  )
}
