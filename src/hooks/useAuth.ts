import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { signOut } from '../api/sign-out';
import { ROUTES } from '../config';

export function useAuth() {
  const navigate = useNavigate();

  const { mutateAsync: handleSignOut } = useMutation({
    mutationFn: () => signOut(),
    onSuccess: () => {
      navigate(ROUTES.SIGN_IN);
    },
  });

  return {
    handleSignOut,
  };
} 