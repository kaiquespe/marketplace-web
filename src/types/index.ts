import * as HugeIcons from "hugeicons-react";

export interface BaseProps {
  className?: string;
}

export interface ProductCardProps {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  status: "available" | "sold" | "cancelled";
  category: string;
}

export interface CategoryTagProps {
  label: string;
}

export interface StatusTagProps {
  status: "available" | "sold" | "cancelled";
}

export interface ButtonProps {
  label: string;
  size?: "sm" | "md";
  variant?: "solid" | "outline" | "link";
  icon?: keyof typeof HugeIcons;
  iconPosition?: "left" | "right";
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
}

export interface InputProps {
  label?: string;
  placeholder?: string;
  id: string;
  type: "text" | "password" | "number" | "email" | "tel";
  icon?: keyof typeof HugeIcons;
  error?: string;
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
}

export interface SelectProps {
  label?: string;
  placeholder?: string;
  id: string;
  options: { value: string; label: string }[];
  icon?: keyof typeof HugeIcons;
  error?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export interface NavLinkProps {
  to: string;
  icon: keyof typeof HugeIcons;
  children: React.ReactNode;
}

export interface UserProps {
  name?: string;
  avatarUrl?: string;
} 