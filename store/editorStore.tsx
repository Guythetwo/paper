import { create } from "zustand"
import { Page } from "@/core/documentModel"

interface EditorState {
  pages: Page[]
  addPage: (page: Page) => void
}

export const useEditorStore = create<EditorState>((set) => ({
  pages: [],
  addPage: (page) =>
    set((state) => ({
      pages: [...state.pages, page],
      content: "<p>เริ่มพิมพ์ที่นี่...</p>",
      setContent: (html) => set({ content: html })
    })),
}))
