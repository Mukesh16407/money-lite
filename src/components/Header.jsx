import React from 'react'
import { Card, Group, Text } from "@mantine/core";

export const Header = () => {
  return (
    <div>
        <Card  shadow='md'
       p={20}
       withBorder
       color="">
        <div className="flex justify-between">
            <Text  size='xl'
               color="teal"
               variant="text"
               weight="bold">
                  SBIYMONEY LITE
            </Text>

        </div>

        </Card>
    </div>
  )
}
