import { Button } from "@/components/Button";
import { PasswordInput } from "@/components/PasswordInput/PasswordInput";
import { Checkbox } from "@/components/uiShadCn/checkbox";
import { Label } from "@/components/uiShadCn/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/uiShadCn/card";
import * as React from "react";
import { signUp } from "@/api/auth/signUp";
import { useRouter } from "next/navigation";

export default function CardLoginLocalEnv({
  className,
  ...props
}: React.ComponentProps<typeof Card>) {
  const [token, setToken] = React.useState("");
  const [remainLogged, setRemainLogged] = React.useState(false);
  const router = useRouter();
  const handleApi = async () => {
    const data = await signUp(token, remainLogged);
    if (data.statusCode === 200) {
      router.push("/");
    } else {
      alert(JSON.stringify(data.body));
    }
  };
  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle className="text-lg">Login</CardTitle>
        <CardDescription>
          To get the token you need to check .env file in the root of the
          project
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="name">Token</Label>
          <PasswordInput
            id="name"
            placeholder="Token in .ENV"
            type="password"
            value={token}
            onChange={(e) => setToken(e.target.value)}
          />
        </div>
        <div className="pt-2 flex items-center">
          <Checkbox
            id="terms"
            className="border-primary"
            checked={remainLogged}
            onClick={() => setRemainLogged((prev) => !prev)}
          />
          <Label
            htmlFor="terms"
            className="text-sm pl-2 peer-disabled:cursor-not-allowed mt-0"
          >
            Continue logged into the system
          </Label>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" size="sm" onClick={handleApi}>
          Sign in
        </Button>
      </CardFooter>
    </Card>
  );
}
