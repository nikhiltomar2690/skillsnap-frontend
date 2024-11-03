import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Gift, User, Key, Mail, Lock, LogOut } from "lucide-react";
import InviteDialog from "@/components/Dialogs/InviteDialog";
import UsernameDialog from "@/components/Dialogs/UsernameDialog";
import PasswordDialog from "@/components/Dialogs/PasswordDialog";
import EmailDialog from "@/components/Dialogs/EmailDialog";
import LockDialog from "@/components/Dialogs/LockDialog";
import LogoutDialog from "@/components/Dialogs/LogoutDialog";

interface SettingOption {
  icon: React.ReactNode;
  label: string;
  action: () => void;
}

export default function SettingsForm() {
  const handleLogout = () => {
    console.log("User logged out");
  };

  const [openDialog, setOpenDialog] = useState<string | null>(null);

  const handleCloseDialog = () => setOpenDialog(null);

  const settingOptions: SettingOption[] = [
    {
      icon: <Gift className="w-5 h-5 text-gray-800" />,
      label: "Invite",
      action: () => setOpenDialog("invite"),
    },
    {
      icon: <User className="w-5 h-5 text-gray-800" />,
      label: "Change Username",
      action: () => setOpenDialog("username"),
    },
    {
      icon: <Key className="w-5 h-5 text-gray-800" />,
      label: "Reset Password",
      action: () => setOpenDialog("password"),
    },
    {
      icon: <Mail className="w-5 h-5 text-gray-800" />,
      label: "Change Email",
      action: () => setOpenDialog("email"),
    },
    {
      icon: <Lock className="w-5 h-5 text-gray-800" />,
      label: "Lock Portfolio",
      action: () => setOpenDialog("lock"),
    },
    {
      icon: <LogOut className="w-5 h-5 text-gray-800" />,
      label: "Logout",
      action: () => setOpenDialog("logout"),
    },
  ];

  return (
    <div className="flex flex-col p-4 max-w-md mx-auto">
      <h2 className="text-lg font-semibold text-black">Settings</h2>
      <div className="mt-4">
        {settingOptions.map((option) => (
          <Button
            key={option.label}
            variant="outline"
            className="flex flex-row items-center justify-start p-3 hover:bg-gray-100 font-medium border rounded-lg mb-2 w-full max-w-xs"
            onClick={option.action}
          >
            {option.icon}
            <span className="ml-2 text-black">{option.label}</span>
          </Button>
        ))}
      </div>

      <InviteDialog
        open={openDialog === "invite"} // Ensure openDialog is a string representing the open dialog state
        onClose={handleCloseDialog} // Close handler to close the dialog
        snapPoints={500} // Provide a value for snapPoints (example: 100)
      />
      {openDialog === "username" && (
        <UsernameDialog onClose={handleCloseDialog} />
      )}
      <PasswordDialog
        open={openDialog === "password"}
        onClose={handleCloseDialog}
      />
      <EmailDialog open={openDialog === "email"} onClose={handleCloseDialog} />
      <LockDialog open={openDialog === "lock"} onClose={handleCloseDialog} />
      <LogoutDialog
        open={openDialog === "logout"} // Open when 'openDialog' is set to 'logout'
        onClose={handleCloseDialog} // Function to handle closing the dialog
        onConfirm={handleLogout} // Function to handle the logout action
      />
    </div>
  );
}
