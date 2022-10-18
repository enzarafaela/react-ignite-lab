import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { Children, InputHTMLAttributes, ReactNode } from "react";


export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className="flex items-center gap-3 h-12 py-4 px-3 bg-gray-800  w-full focus-within:ring-2 ring-cyan-300 rounded">
      {props.children}
    </div>
  );
}

export interface TextInputIconProps {
  children: ReactNode,
}

function TextInputIcon(props: TextInputIconProps) {
  return (
    <Slot className="w-6 h-6 text-gray-400">
      {props.children}
    </Slot>
  )
}

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className="bg-trasnparent flex-1 text-xs text-gray-100 placeholder:text-gray-400 outline-none"
      {...props}
    />
  );
}

TextInputIcon.displayName = "TextInput.Icon";
TextInputInput.displayName = "TextInput.Input";
TextInputRoot.displayName = "TextInput.Root";

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
}


