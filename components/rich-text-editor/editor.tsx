"use client";
import{EditorContent, useEditor} from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import MenuBar from "./MenuBar";
import { TextAlign } from "@tiptap/extension-text-align"

export function RichTextEditor({field} : {field: any}){
    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                heading: {
                    levels: [1, 2, 3],
                },
            }),
            TextAlign.configure({
                types: ["heading", "paragraph"]
            })
        ],
        immediatelyRender: false,

        editorProps:{
            attributes:{
                class: 'min-h-[300px] p-4 focus:outline-none [&_h1]:text-4xl [&_h1]:font-bold [&_h2]:text-2xl [&_h2]:font-bold [&_h3]:text-xl [&_h3]:font-bold'
            }
        },

        onUpdate: ({editor}) => {
            field.onChange(JSON.stringify(editor.getJSON()))
        },

        content:field.value ? JSON.parse(field.value): '<p>Hello, visit my course because...</p>'
    });

    return(
        <div className="w-full border border-input rounded-lg overflow-hidden dark:bg-input/30 shadow-lg">
            <MenuBar editor={editor} />
            <EditorContent editor={editor} />
        </div>
    )
}