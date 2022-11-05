import React from "react";
import { useForm } from "@mantine/form";
import {
  Anchor,
  Button,
  Card,
  Divider,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";

export const Login = () => {
  return (
    <div className="flex h-screen justify-center items-center auth">
      <Card
        sx={{
          width: 400,
          padding: "sm",
        }}
        shadow="lg"
        withBorder
      >
        <Title order={2} mb={5} color="gray">
          SBIMONEY - LOGIN
        </Title>
        <Divider variant="dotted" color="gray" />
        <form>
          <Stack>
            <TextInput
              label="Email"
              placeholder="Enter your email"
              name="email"
            />
            <TextInput
              label="Password"
              placeholder="Enter your password"
              type="password"
              name="password"
            />
            <Button>Login</Button>
            <Anchor href="/register" color="teal">
              Don't have an account? Register
            </Anchor>
          </Stack>
        </form>
      </Card>
    </div>
  );
};
