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
import { useToast } from "@/components/uiShadCn/use-toast";
import { validateToken } from "../dataValidations/tokenValidation";

export default function CardLoginLocalEnv({
  className,
  ...props
}: React.ComponentProps<typeof Card>) {
  const { toast } = useToast();
  const [token, setToken] = React.useState("");
  const [remainLogged, setRemainLogged] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState({
    tokenError: "",
  });
  const router = useRouter();

  const handleApi = async () => {
    if (!validadeForm()) {
      toast({
        title: "Error",
        description: "Please check the form",
        variant: "destructive",
      });
      return;
    }
    setLoading(true);
    const data = await signUp(token, remainLogged);
    if (data.statusCode === 200) {
      router.push("/");
    } else {
      toast({
        title: "Error",
        description: data?.body?.error || "Something went wrong",
        variant: "destructive",
      });
    }
    setLoading(false);
  };
  const validadeForm = () => {
    const { isError, erroMessage } = validateToken(token);
    setErrors((prev) => ({ ...prev, tokenError: erroMessage }));
    return !isError;
  };

  const handleToken = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { isError, erroMessage } = validateToken(e.target.value);
    setErrors((prev) => ({ ...prev, tokenError: erroMessage }));
    setToken(e.target.value);
  };

  return (
    <>
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
              id="passwordTokenLocal"
              placeholder="Token in .ENV"
              type="password"
              value={token}
              onChange={handleToken}
              errorMsg={errors.tokenError}
            />
          </div>
          <div className="pt-2 flex items-center">
            <Checkbox
              id="remainLoggedLocal"
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
          <Button
            className="w-full"
            size="sm"
            onClick={handleApi}
            isLoading={loading}
          >
            Sign in
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
