import * as Avatar from "@radix-ui/react-avatar";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Separator from "@radix-ui/react-separator";
import { Logout01Icon } from "hugeicons-react";
import { useAuth } from "../hooks/useAuth";
import { UserProps } from "../types";

export function User({ name = "John Doe", avatarUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg.png?20220226140232" }: UserProps) {
  const { handleSignOut } = useAuth();

  const handleSignOutClick = async () => {
    await handleSignOut();
  };

  return (
    <div className="flex">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild className="inline-flex items-center">
          <button type="button" aria-label="User menu">
            <Avatar.Root className="flex justify-center items-center bg-shape rounded-xl h-w-12 w-12 cursor-pointer overflow-hidden">
              <Avatar.Image
                src={avatarUrl}
                alt={name}
              />
            </Avatar.Root>
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className="min-w-[220px] bg-white rounded-lg p-2 shadow-lg"
            sideOffset={5}
            align="end"
          >
            <div className="flex items-center gap-2 p-2">
              <Avatar.Root className="flex justify-center items-center bg-shape rounded-xl h-w-8 w-8 overflow-hidden">
                <Avatar.Image
                  src={avatarUrl}
                  alt={name}
                />
              </Avatar.Root>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-900">{name}</span>
                <span className="text-xs text-gray-500">john.doe@example.com</span>
              </div>
            </div>

            <Separator.Root className="h-px bg-gray-200 my-2" />

            <DropdownMenu.Item
              className="flex items-center gap-2 px-2 py-1.5 text-sm text-gray-700 rounded outline-none cursor-pointer hover:bg-gray-100 focus:bg-gray-100"
              onClick={handleSignOutClick}
            >
              <Logout01Icon size={16} />
              Sign out
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
}
