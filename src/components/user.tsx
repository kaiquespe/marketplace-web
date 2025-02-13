import * as Avatar from "@radix-ui/react-avatar";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Separator from "@radix-ui/react-separator";
import { useMutation } from "@tanstack/react-query";
import { Logout01Icon } from "hugeicons-react";
import { useNavigate } from "react-router-dom";
import { signOut } from "../api/sign-out";

export function User() {
  const { mutateAsync } = useMutation({
    mutationFn: () => signOut(),
  });
  const navigate = useNavigate();

  async function handleSignOut() {
    await mutateAsync();
    navigate("/sign-in");
  }

  return (
    <div className="flex">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild className="inline-flex items-center">
          <button type="button">
            <Avatar.Root className="flex justify-center items-center bg-shape rounded-xl h-w-12 w-12 cursor-pointer overflow-hidden">
              <Avatar.Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg.png?20220226140232"
                alt="John Doe"
              />
            </Avatar.Root>
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className="bg-white p-4 border rounded-xl w-[168px]"
            align="end"
            side="bottom"
            sideOffset={15}
          >
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center gap-3">
                <Avatar.Root className="flex justify-center rounded-lg w-8 h-8 overflow-hidden align-center">
                  <Avatar.Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg.png?20220226140232"
                    alt="John Doe"
                    className="object-cover"
                  />
                </Avatar.Root>
                <p className="flex-1 text-gray-300 text-pretty body-xs">
                  John Doe
                </p>
              </div>

              <Separator.Root
                className="bg-shape w-full h-[1px]"
                orientation="horizontal"
              />

              <div className="inline-flex">
                <DropdownMenu.Item asChild>
                  <button
                    type="button"
                    onClick={handleSignOut}
                    className="flex justify-between items-center focus:ring-opacity-50 focus:ring-2 focus:ring-orange-base w-full font-medium text-orange-base text-sm hover:text-orange-dark transition-colors duration-200 focus:outline-none"
                  >
                    Sign out
                    <Logout01Icon width={20} strokeWidth={1.5} />
                  </button>
                </DropdownMenu.Item>
              </div>
            </div>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
}
