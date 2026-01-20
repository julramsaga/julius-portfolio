import { Container, Text, Box, Anchor } from '@mantine/core';
import classes from './Footer.module.css';

export function Footer() {
  return (
    <Box component="footer" className={classes.footer}>
      <Container size="xl">
        <div className={classes.content}>
          <Text size="sm" c="dimmed">
            &copy; 2024 Julius Ramon Saga. All rights reserved.
          </Text>
          <Text size="xs" c="dimmed">
            Designed and developed with care
          </Text>
          <div className={classes.socialLinks}>
              <Anchor href="#" c="dimmed" fw={500}>
                LinkedIn
              </Anchor>
              <Anchor href="#" c="dimmed" fw={500}>
                Dribbble
              </Anchor>
              <Anchor href="#" c="dimmed" fw={500}>
                GitHub
              </Anchor>
              <Anchor href="#" c="dimmed" fw={500}>
                Behance
              </Anchor>
            </div>
        </div>
      </Container>
    </Box>
  );
}

