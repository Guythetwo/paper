import { Content } from "next/font/google"
import { Page } from "./documentModel"

export function createNewPage(): Page {
  return {
    id: crypto.randomUUID(),
    content: "<p>เริ่มพิมพ์ที่นี่...</p>",
    setContent(html: string) {this.content}
  }
}
