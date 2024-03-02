"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import Image from "@tiptap/extension-image";
import StarterKit from "@tiptap/starter-kit";
import { useDebouncedCallback } from "use-debounce";
import { useCallback } from "react";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit, Image],
    content: "<p>Hello World! 🌎️</p>",
    onUpdate: useDebouncedCallback(({ editor: e }) => {
      const content = e.getHTML();
      console.log(content);
    }, 500),
  });

  const addImage = useCallback(() => {
    const url = window.prompt("URL");

    if (url && editor) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  return (
    <div>
      <button onClick={addImage}>setImage</button>
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
