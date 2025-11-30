import { Info, Warning, CheckCircle, XCircle, X } from "@phosphor-icons/react"


  variant?: GCAlertVariant

  onDismiss?: () => void
}
const variantSty
    container: "bg-blue-50 
    IconComponent: Info
  success: {
    icon: "text-gree
}

const variantStyles = {
  info: {
    container: "bg-blue-50 border-blue-400 text-blue-900",
    icon: "text-blue-600",
    IconComponent: Info
  },
  success: {
    container: "bg-green-50 border-green-400 text-green-900",
    icon: "text-green-600",
    IconComponent: CheckCircle
  },
  warning: {
    container: "bg-yellow-50 border-yellow-400 text-yellow-900",
    icon: "text-yellow-600",
    IconComponent: Warning
  },
  danger: {
    container: "bg-red-50 border-red-400 text-red-900",
    icon: "text-red-600",
    IconComponent: XCircle
  }
}

export function GCAlert({ 
  variant = "info", 
  title, 
  children, 
  dismissible = false,
  onDismiss,
  className 
}: GCAlertProps) {
  const styles = variantStyles[variant]
  const Icon = styles.IconComponent

          
         
          )}
            {childre
        </div>
          <button
            class
        
     
      </div>
  )























