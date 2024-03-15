"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const Tiptap = ({ content }: { content: string }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    editable: false,
    content,
  });

  return <EditorContent editor={editor} />;
};

export default Tiptap;
