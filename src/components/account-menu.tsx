import { DropdownMenu,DropdownMenuTrigger,DropdownMenuLabel,DropdownMenuItem,DropdownMenuContent,DropdownMenuSeparator} from "./ui/dropdown-menu"
import { ChevronDown,Building, LogOut } from "lucide-react"
import { Button } from "./ui/button"
import { useQuery } from "@tanstack/react-query"
import { getProfile } from "@/api/get-profile"
import { getManagedRestaurant } from "@/api/get-managed-restaurant"
import { Skeleton } from "@/components/ui/skeleton"
import { StoreDialogProfile } from "./store-dialog-profile"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog" 

export function AccountMenu(){

    const {data:profileData, isLoading:isLoadingProfile} = useQuery({
        queryKey:['profile'],
        queryFn:getProfile
    })

    const {data:ManagedRestaurantData, isLoading:isLoadingManagedRestaurant} = useQuery({
        queryKey:['managed-restaurant'],
        queryFn:getManagedRestaurant
    })

    return(
        <Dialog>
            <DropdownMenu>
                <DropdownMenuTrigger className="flex gap-2 p-2 select-none" asChild>
                    <Button variant="outline">
                        {isLoadingManagedRestaurant?<Skeleton className="h-4 w-4"/>:<span>{ManagedRestaurantData?.name}</span>}
                        <ChevronDown/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel className="flex flex-col">
                        {isLoadingProfile?<Skeleton className="w-4 h-4"/>:<span>{profileData?.name}</span>}
                       {isLoadingProfile?<Skeleton className="w-8 h-2"/>: <span className="text-xs text-muted-foreground">{profileData?.email}</span>}
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator/>
                    <DialogTrigger className="w-full">
                        <DropdownMenuItem className="flex gap-2 pointer">
                            <Building/>
                            <span>Perfil da loja</span>
                        </DropdownMenuItem>
                    </DialogTrigger>
                    <DropdownMenuItem className="flex gap-2 text-rose-500 dark:text-rose-400 pointer">
                        <LogOut/>
                        <span>Sair da loja</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <StoreDialogProfile/>
        </Dialog>
    )
}