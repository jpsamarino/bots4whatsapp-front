import React from "react";
import { useRouter } from "next/navigation";
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
import { useToast } from "@/components/uiShadCn/use-toast";
import { ValidationInput } from "@/components/ValidationInput/ValidationInput";
import { validateServerUrl, validateToken } from "../dataValidations";
import { serverConfig } from "@/config/serverConfig";
import { signUp } from "@/api/auth/signUp";

export default function CardLoginRemoteEnv({
  className,
  ...props
}: React.ComponentProps<typeof Card>) {
  const { toast } = useToast();
  const [token, setToken] = React.useState("");
  const [serverUrl, setServerUrl] = React.useState("");
  const [remainLogged, setRemainLogged] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState({
    tokenError: "",
    serverUrlError: "",
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
    const data = await signUp(token, remainLogged, serverUrl);
    if (data.statusCode === 200) {
      //save url in localstorage
      serverConfig.setServerUrl(serverUrl);
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
    const errorToken = validateToken(token);
    const errorServerUrl = validateServerUrl(serverUrl);
    setErrors((prev) => ({
      ...prev,
      tokenError: errorToken.erroMessage,
      serverUrlError: errorServerUrl.erroMessage,
    }));
    return !errorToken.isError && !errorServerUrl.isError;
  };

  const handleToken = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { erroMessage } = validateToken(e.target.value);
    setErrors((prev) => ({ ...prev, tokenError: erroMessage }));
    setToken(e.target.value);
  };

  const handleServerUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { erroMessage } = validateServerUrl(e.target.value);
    setErrors((prev) => ({ ...prev, serverUrlError: erroMessage }));
    setServerUrl(e.target.value);
  };
  console.log(errors);
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
          <ValidationInput
            id="current"
            placeholder="https://exemple.com:7979"
            value={serverUrl}
            onChange={handleServerUrl}
            errorMsg={errors.serverUrlError}
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="name">Token</Label>
          <PasswordInput
            id="passwordTokenRemote"
            placeholder="Token in .ENV"
            type="password"
            value={token}
            onChange={handleToken}
            errorMsg={errors.tokenError}
          />
        </div>
        <div className="pt-2 flex items-center">
          <Checkbox
            id="remainLoggedRemote"
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
  );
}
