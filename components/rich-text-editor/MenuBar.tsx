import React from 'react'

import {type Editor} from "@tiptap/react"
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from '../ui/tooltip';
import { Toggle } from '../ui/toggle';
import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon, Bold, Heading1Icon, Heading2Icon, Heading3Icon, Italic, ListIcon, ListOrderedIcon, Redo, Strikethrough, UndoIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';


interface iAppProps{
    editor: Editor | null;
}

const MenuBar = ({editor}: iAppProps) => {

    if(!editor){
        return null;
    }

   return (
    <div className='border border-input border-t-0 border-x-0 rounded-t-lg p-2 bg-card flex flex-wrap gap-1 items-center'>
        <TooltipProvider>
            <div className='flex flex-wrap gap-1'>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Toggle size="sm" pressed={editor.isActive("bold")} 
                         onPressedChange={() => editor.chain().focus().toggleBold().run()}
                            >
                            <Bold />
                        </Toggle>
                    </TooltipTrigger>
                    <TooltipContent>Bold</TooltipContent>
                </Tooltip>

                 <Tooltip>
                    <TooltipTrigger asChild>
                        <Toggle size="sm" pressed={editor.isActive("italic")} 
                         onPressedChange={() => editor.chain().focus().toggleItalic().run()}
                            >
                            <Italic />
                        </Toggle>
                    </TooltipTrigger>
                    <TooltipContent>Italic</TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Toggle size="sm" pressed={editor.isActive("strike")} 
                         onPressedChange={() => editor.chain().focus().toggleStrike().run()}
                            >
                            <Strikethrough />
                        </Toggle>
                    </TooltipTrigger>
                    <TooltipContent>Strike</TooltipContent>
                </Tooltip>

                 <Tooltip>
                    <TooltipTrigger asChild>
                        <Toggle size="sm" pressed={editor.isActive("heading", {level: 1})} 
                         onPressedChange={() => editor.chain().focus().toggleHeading({level: 1}).run()}
                            >
                            <Heading1Icon />
                        </Toggle>
                    </TooltipTrigger>
                    <TooltipContent>Heading 1</TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Toggle size="sm" pressed={editor.isActive("heading", {level: 2})} 
                         onPressedChange={() => editor.chain().focus().toggleHeading({level: 2}).run()}
                            >
                            <Heading2Icon />
                        </Toggle>
                    </TooltipTrigger>
                    <TooltipContent>Heading 2</TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Toggle size="sm" pressed={editor.isActive("heading", {level: 3})} 
                         onPressedChange={() => editor.chain().focus().toggleHeading({level: 3}).run()}
                            >
                            <Heading3Icon />
                        </Toggle>
                    </TooltipTrigger>
                    <TooltipContent>Heading 3</TooltipContent>
                </Tooltip>

            </div>

            <div className='w-px h-6 bg-border mx-3'></div>

            <div className='flex flex-wrap gap-1'>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Toggle size="sm" pressed={editor.isActive({textAlign : 'left'})} 
                         onPressedChange={() => editor.chain().focus().setTextAlign("left").run()}
                            >
                            <AlignLeftIcon />
                        </Toggle>
                    </TooltipTrigger>
                    <TooltipContent>Align Left</TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Toggle size="sm" pressed={editor.isActive({textAlign : 'center'})} 
                         onPressedChange={() => editor.chain().focus().setTextAlign("center").run()}
                            >
                            <AlignCenterIcon />
                        </Toggle>
                    </TooltipTrigger>
                    <TooltipContent>Align Center</TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Toggle size="sm" pressed={editor.isActive({textAlign : 'right'})} 
                         onPressedChange={() => editor.chain().focus().setTextAlign("right").run()}
                            >
                            <AlignRightIcon />
                        </Toggle>
                    </TooltipTrigger>
                    <TooltipContent>Align Right</TooltipContent>
                </Tooltip>
            </div>

            <div className='w-px h-6 bg-border mx-3'></div>

            <div className='flex flex-wrap gap-1'>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button size="sm" variant="ghost" type='button' onClick={() => editor.chain().focus().undo().run()}
                            >
                                    <UndoIcon />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>Undo Changes</TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button size="sm" variant="ghost" type='button' onClick={() => editor.chain().focus().redo().run()}
                            >
                                    <Redo />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>Redo Changes</TooltipContent>
                </Tooltip>
            </div>
        </TooltipProvider>
    </div>
  )
}

export default MenuBar