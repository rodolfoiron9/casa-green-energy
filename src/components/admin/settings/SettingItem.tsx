import { Card } from "@/components/ui/card";
import { Settings, Trash2, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface SettingItemProps {
  id: string;
  settingKey: string;
  settingValue: any;
  onDelete: (id: string) => void;
  onUpdate: (id: string, key: string, value: any) => void;
}

export const SettingItem = ({ id, settingKey, settingValue, onDelete, onUpdate }: SettingItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedKey, setEditedKey] = useState(settingKey);
  const [editedValue, setEditedValue] = useState(settingValue);

  const handleSave = () => {
    onUpdate(id, editedKey, editedValue);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedKey(settingKey);
    setEditedValue(settingValue);
    setIsEditing(false);
  };

  return (
    <Card className="p-4 border rounded-lg bg-background/50">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Settings className="w-4 h-4 text-muted-foreground" />
          {isEditing ? (
            <Input
              value={editedKey}
              onChange={(e) => setEditedKey(e.target.value)}
              className="w-48"
            />
          ) : (
            <div className="font-medium">{settingKey}</div>
          )}
        </div>
        <div className="flex items-center gap-2">
          {isEditing ? (
            <>
              <Button variant="outline" size="sm" onClick={handleCancel}>
                Cancel
              </Button>
              <Button size="sm" onClick={handleSave}>
                Save
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-muted-foreground hover:text-primary"
                onClick={() => setIsEditing(true)}
              >
                <Pencil className="h-4 w-4" />
              </Button>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Delete Setting</AlertDialogTitle>
                    <AlertDialogDescription>
                      Are you sure you want to delete this setting? This action cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => onDelete(id)} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </>
          )}
        </div>
      </div>
      <div className="mt-2">
        {isEditing ? (
          <Input
            value={editedValue}
            onChange={(e) => setEditedValue(e.target.value)}
          />
        ) : (
          <div className="text-sm text-muted-foreground">
            {JSON.stringify(settingValue)}
          </div>
        )}
      </div>
    </Card>
  );
};