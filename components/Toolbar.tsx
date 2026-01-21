"use client"
import { addNewPage } from "@/core/addpage"

export default function Toolbar() {
  return (
    <button onClick={addNewPage}>
      ➕ เพิ่มกระดาษ
    </button>
  )
}
