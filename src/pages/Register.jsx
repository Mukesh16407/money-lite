import React from "react";
import { useForm } from "@mantine/form";
import {
  Button,
  Card,
  Divider,
  Stack,
  TextInput,
  Title,
  Anchor,
} from "@mantine/core";
import { showNotification } from "@mantine/notifications";

export const Register = () => {
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
          SBIMONEY - REGISTER
        </Title>
        <Divider variant="dotted" color="gray" />
        <form>
          <Stack>
            <TextInput label="Name" placeholder="Enter your name" name="name" />
            <TextInput
              label="Email"
              placeholder="Enter your email"
              name="email"
            />
            <TextInput
              label="Password"
              placeholder="Enter your password"
              name="password"
              type="password"
            />
            <Button>Register</Button>
            <Anchor href="/login" color="teal">
              Already have an account? Login
            </Anchor>
          </Stack>
        </form>
      </Card>
    </div>
  );
};
