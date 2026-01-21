"use client" 
import { useEditorStore } from "@/store/editorStore"
import TiptapEditor from "@/components/TiptapEditor"

export default function Displypages() {
  const pages = useEditorStore((state) => state.pages)
  
  return (
    <div>

      {pages.map((page, index) => (
        <div key={page.id} className="page">
          <h3>Page {index + 1}</h3>
          <div className="paper">
            <TiptapEditor page={page}/>
          </div>
          
        </div>
      ))}
    </div>
  )
}
