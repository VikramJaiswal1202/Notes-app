"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Button } from "./ui/button"
import { Loader2 } from "lucide-react"

const LogoutButton = () => {
    const [loading, setLoading] = useState(false);
    const handleLogout = async () => {
        setLoading(true);
    }
  return (
    <div>
        <Button variant="outline" disabled={loading} onClick={()=>{
            handleLogout();}}>
            Loading ?<Loader2 className="animate-spin"/>:"Logout"  
        </Button>
    </div>
  )
}

export default LogoutButton