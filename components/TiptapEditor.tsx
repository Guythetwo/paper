"use client"

import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { useEditorStore } from "@/store/editorStore"

export default function TiptapEditor( {page} ) {
  const content = useEditorStore((page) => page.content)
  const setContent = useEditorStore((page) => page.setContent)

  const editor = useEditor({
    extensions: [StarterKit],
    content,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML())
    },
  })

  return <EditorContent editor={editor} className="border p-4 min-h-[400px]" />
}
