'use client';

import { Container, Title, Text, Group, Button, Badge, Box } from '@mantine/core';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import classes from './Hero.module.css';

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Box component="section" id="home" className={classes.hero}>
      <Container size="xl">
        <div className={classes.content}>
          <motion.div
            initial={mounted ? { opacity: 0, y: 20 } : false}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={classes.text}
          >
            <Title order={1} className={classes.title}>
              <Text component="span" className={classes.greeting}>
                Hello, I'm
              </Text>
              <Text
                component="span"
                className={classes.name}
                variant="gradient"
                gradient={{ from: 'indigo', to: 'indigo', deg: 135 }}
              >
                Julius Ramon Saga
              </Text>
            </Title>
            <Text size="xl" fw={500} c="dimmed" mb="md" style={{ textAlign: 'center' }}>
              UX/UI Designer • Product Designer • Frontend / Full-Stack Developer
            </Text>
            <Text size="lg" c="dimmed" mb="xl" maw={600} style={{ textAlign: 'center' }}>
              Crafting beautiful, user-centered digital experiences with 2+ years of expertise in
              design and development.
            </Text>
            <Group gap="md" mb="xl" justify="center">
              <Badge size="lg" color="indigo" radius="xl">
                Available Immediately
              </Badge>
              <Badge size="lg" color="indigo" radius="xl">
                US Timezone
              </Badge>
            </Group>
            <Group gap="lg" justify="center">
              <Button
                component="a"
                href="#contact"
                size="md"
                color="indigo"
                radius="md"
                style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
              >
                Get in Touch
              </Button>
              <Button
                component="a"
                href="#case-studies"
                variant="outline"
                size="md"
                color="indigo"
                radius="md"
              >
                View Work
              </Button>
            </Group>
          </motion.div>
        </div>
      </Container>
    </Box>
  );
}

