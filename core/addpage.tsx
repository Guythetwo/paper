import { createNewPage } from "@/core/pageEngine"
import { useEditorStore } from "@/store/editorStore"

export const addNewPage = () => {
    const newpage = createNewPage()
    useEditorStore.getState().addPage(newpage)
};