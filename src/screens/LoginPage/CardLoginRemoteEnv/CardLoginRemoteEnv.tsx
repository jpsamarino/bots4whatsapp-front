import { Button } from "@/components/Button";
import { PasswordInput } from "@/components/PasswordInput/PasswordInput";
import { Checkbox } from "@/components/uiShadCn/checkbox";
import { Input } from "@/components/uiShadCn/input";
import { Label } from "@/components/uiShadCn/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/uiShadCn/card";

export default function CardLoginRemoteEnv({
  className,
  ...props
}: React.ComponentProps<typeof Card>) {
  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle className="text-lg">Remote Login</CardTitle>
        <CardDescription>
          To obtain the token you need to check the remote server configuration
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="current">Server Andress</Label>
          <Input id="current" placeholder="https://exemple.com:7979" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="name">Token</Label>
          <PasswordInput
            id="name"
            placeholder="Token in .ENV"
            type="password"
          />
        </div>
        <div className="pt-2 flex items-center">
          <Checkbox id="terms" className="border-primary" />
          <Label
            htmlFor="terms"
            className="text-sm pl-2 peer-disabled:cursor-not-allowed mt-0"
          >
            Continue logged into the system
          </Label>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" size="sm">
          Sign in
        </Button>
      </CardFooter>
    </Card>
  );
}
